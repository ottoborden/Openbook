'use strict';

var React = require('react'),
    $ = require('jquery'),
    _ = require('lodash'),
    SocketIo = require('socket.io-client'),
    Navbar = require('./assets/components/navbar');

var Ob = React.createClass({
    render: function() {
        return (
            <h1>whatevz</h1>,
            <Navbar />
        );
    }

});

var io = SocketIo();

io.on('connect', function (socket) {
    console.log('connect');

    io.on('successfullyAuthenticated', function (data) {
        console.log('authenticate');
        console.log(data);
    });
});