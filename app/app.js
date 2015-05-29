var React = require('react'),
    $ = require('jquery'),
    _ = require('lodash'),
    io = require('socket.io-client'),
    Navbar = require('./assets/components/navbar');

var Ob = React.createClass({
    render: function() {
        return (
            <h1>whatevz</h1>,
            <Navbar />
        );
    }

});

module.exports = Ob;