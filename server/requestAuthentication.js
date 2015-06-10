var SocketIo = require('socket.io'),
    jwt = require('jsonwebtoken'),
    config = require('config').get(process.env.NODE_ENV);

var db = require('seraph')({
    server: config.dbConfig.protocol + config.dbConfig.host,
    endpoint: config.dbConfig.endpoint,
    user: config.dbConfig.user,
    pass: config.dbConfig.pass
});

var requestAuthentication = function (data) {
    db.save(data, 'User', function (err, node) {
        if(err) {
            throw err;
        } else {
            var socket = SocketIo(),
                jwtSecret = 'foo bar big secret';

            /*
                If the users credentials check out
             */
            var token = jwt.sign(node, jwtSecret, { expiresInMinutes: 60000*5 });

            socket.emit('successfullyAuthenticated', { token: token });
        }
    });
};

function createJwt () {

}

module.exports = requestAuthentication;