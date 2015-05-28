var React = require('react');
var $ = require('jquery');
var Navbar = require('./assets/components/navbar');

var Ob = React.createClass({
    render: function() {
        return (
            <h1>Hello world!</h1>,
            <Navbar />
        );
    }

});

module.exports = Ob;