var React = require('react');
var $ = require('jquery');
var Navbar = require('./assets/components/navbar');

var Ob = React.createClass({
    render: function() {
        return (
            <Navbar />
        );
    }

});

module.exports = Ob;