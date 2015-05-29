'use restrict';

var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Get event handler modules
var requireDir = require('require-dir');
var server = requireDir('./server', { recurse: true });

// Get configuration
var config = require('config'),
    localDev = config.get(process.env.NODE_ENV);

app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.sendFile('/Users/oborden14/Documents/Openbook/app/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('clickSignInButton', server.clickSignInButton);
});

function processClick(data) {
    console.log(data);
}

http.listen(localDev.server.port, function () {
    console.log('listening on *:' + localDev.server.port);
});