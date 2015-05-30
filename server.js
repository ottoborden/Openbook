'use restrict';

var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Get event handler modules
var requireDir = require('require-dir');
var serverEventHandler = requireDir('./server', { recurse: true });

// Get configuration
var config = require('config').get(process.env.NODE_ENV);

app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.sendFile('/Users/oborden14/Documents/Openbook/app/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('clickSignInButton', serverEventHandler.clickSignInButton);
});

function processClick(data) {
    console.log(data);
}

http.listen(config.server.port, function () {
    console.log('listening on *:' + config.server.port);
});