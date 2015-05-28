'use restrict';

var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var config = require('config');
var localDev = config.get('localDev');

app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.sendFile('/Users/oborden14/Documents/Openbook/app/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('clickGraphDisplay', processClick);
});

function processClick(data) {
    console.log(data);
}

http.listen(3000, function () {
    console.log('listening on *:3000');
});