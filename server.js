'use strict';

var express = require("express"),
    app = express(),
    http = require('http').Server(app),
    socketIo = require('socket.io')(http);

// Get event handler modules
var requireDir = require('require-dir');
var serverEventHandler = requireDir('./server', { recurse: true });

// Get configuration
var config = require('config').get(process.env.NODE_ENV);

app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.sendfile('/Users/oborden14/Documents/Openbook/app/index.html');
});

socketIo.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('requestAuthentication', function (data) {
        serverEventHandler.requestAuthentication(data, socket);
    });
});

http.listen(config.server.port, function () {
    console.log('listening on *:' + config.server.port);
});