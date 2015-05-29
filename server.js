'use restrict';

var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var config = require('config'),
    localDev = config.get('localDev');

app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.sendFile('/Users/oborden14/Documents/Openbook/app/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('clickGraphDisplay', processClick);

    socket.on('clickSignInButton', function(data) {
        console.log(data);
    });
});

function processClick(data) {
    console.log(data);
}

http.listen(localDev.server.port, function () {
    console.log('listening on *:' + localDev.server.port);
});