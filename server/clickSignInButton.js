var io = require('socket.io'),
    config = require('config').get(process.env.NODE_ENV);

var db = require('seraph')({
    server: config.dbConfig.protocol + config.dbConfig.host,
    endpoint: config.dbConfig.endpoint,
    user: config.dbConfig.user,
    pass: config.dbConfig.pass
});

var clickSignInButton = function (data) {
    db.save(data, 'User', function (err, node) {
        if(err) {
            throw err;
        } else {
            console.log(node);
        }
    });
};

module.exports = clickSignInButton;