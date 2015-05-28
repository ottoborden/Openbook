var React = require('react');

var Navbar = React.createClass({
    render: function () {
        return (
            React.createElement('nav', { className: 'navbar navbar-default', role: 'navigation' }, [
                <NavbarBrand />,
                <NavbarList />
            ])
        );
    }
});

var NavbarBrand = React.createClass({
    render: function () {
        return (
            React.createElement('a', { className: 'navbar-brand', href: '#' }, 'Openbook' )
        )
    }
});

var NavbarList = React.createClass({
    render: function () {
        return (
            React.createElement('ul', { className: 'nav navbar-nav' }, [
                <NavbarDropDown />
            ])
        )
    }
});

var NavbarDropDown = React.createClass({
    render: function () {
        return (
            React.createElement('li', { className: 'dropdown' },
                React.createElement('a', {
                    className: 'dropdown-toggle',
                    href: '#',
                    "data-toggle": 'dropdown',
                    role: 'button'
                }, [ 'Sign In',
                    React.createElement('span', {
                        className: 'caret'
                    })
                ]),
                <NavbarSignIn />
            )
        )
    }
});

var NavbarSignIn = React.createClass({
    render: function () {
        return (
            React.createElement('div', {
                className: 'dropdown-menu',
                role: 'menu'
            }, [
                React.createElement('form', { className: 'form' }, [
                    React.createElement('input', {
                        className: 'form-control',
                        placeholder: 'Username',
                        type: 'text'
                    }),
                    React.createElement('input', {
                        className: 'form-control',
                        placeholder: 'Password',
                        type: 'password'
                    }),
                    React.createElement('button', {
                        className: 'btn',
                        "data-toggle": 'button',
                        type: 'button'
                    }, 'Sign In')
                ])
            ])

        )
    }
});

React.render(
    React.createElement(Navbar, null),
    document.getElementById('NavbarContainer')
);

module.exports = Navbar;