var SocketIo = require('socket.io-client');

var handler = function () {
    var io = SocketIo();

    socket.on('successfullyAuthenticated', function (data) {
        console.log(data);
    });
}

module.exports = handler;