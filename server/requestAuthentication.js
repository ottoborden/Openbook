var SocketIo = require('socket.io'),
    jwt = require('jsonwebtoken'),
    config = require('config').get(process.env.NODE_ENV);

var db = require('seraph')({
    server: config.dbConfig.protocol + config.dbConfig.host,
    endpoint: config.dbConfig.endpoint,
    user: config.dbConfig.user,
    pass: config.dbConfig.pass
});

var requestAuthentication = function (data, socket) {
    db.save(data, 'User', function (err, node) {
        if(err) {
            console.log('error');
            throw err;
        } else {
            /*
                If the users credentials check out
             */
            var token = createJwt(node);

            socket.emit('successfullyAuthenticated', { token: token });
        }
    });
};

function createJwt (node) {
    jwtSecret = 'foo bar big secret';
    return jwt.sign(node, jwtSecret, { expiresInMinutes: 60000*5 });
}

module.exports = requestAuthentication;