var React = require('react'),
    io = require('socket.io-client'),
    _ = require('lodash');

var SignInForm = React.createClass({
    getInitialState: function () {
        return {
            username: null,
            password: null
        }
    },

    handlePasswordChange: function (event) {
        this.setState({
            password: event.target.value
        });
    },

    handleUsernameChange: function (event) {
        this.setState({
            username: event.target.value
        });
    },

    processSignIn: function () {
        var socket = io();
        socket.emit('clickSignInButton', {
            username: this.state.username,
            password: this.state.password
        });
    },

    render: function () {
        return (
            <form className='form'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                />

                <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />

                <button
                    type='button'
                    className='btn'
                    data-toggle='button'
                    onClick={this.processSignIn}
                >
                    Sign In
                </button>
            </form>
        )
    }
});

module.exports = SignInForm;