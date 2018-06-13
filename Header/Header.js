'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _reactWaypoint = require('react-waypoint');

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Hidden = require('../Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Visible = require('../Visible');

var _Visible2 = _interopRequireDefault(_Visible);

var _SightLogo = require('../SightLogo');

var _SightLogo2 = _interopRequireDefault(_SightLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = {
            shadow: true
        };
        _this.removeShadow = _this.removeShadow.bind(_this);
        _this.addShadow = _this.addShadow.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'removeShadow',
        value: function removeShadow() {
            this.setState({
                shadow: false
            });
        }
    }, {
        key: 'addShadow',
        value: function addShadow() {
            this.setState({
                shadow: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var shadow = this.state.shadow;
            var _props = this.props,
                classes = _props.classes,
                logo = _props.logo,
                nav = _props.nav,
                menu = _props.menu,
                title = _props.title,
                active = _props.active,
                messagesIcon = _props.messagesIcon;

            return _react2.default.createElement(
                'div',
                { id: 'mainNav', className: classes.navbar },
                _react2.default.createElement(
                    'div',
                    { className: classes.master + ' ' + (shadow ? classes.shadow : '') },
                    _react2.default.createElement(
                        'div',
                        { className: classes.content },
                        _react2.default.createElement(
                            _Hidden2.default,
                            { xs: true },
                            logo
                        ),
                        _react2.default.createElement(
                            _Visible2.default,
                            { xs: true },
                            _react2.default.createElement(
                                'div',
                                { className: classes.title },
                                title
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: classes.user },
                            messagesIcon.hasOwnProperty('active') && messagesIcon.active && _react2.default.createElement(
                                'a',
                                { id: messagesIcon.id, href: messagesIcon.href, className: classes.messages },
                                _react2.default.createElement('i', { className: classes.bubble })
                            ),
                            menu
                        ),
                        _react2.default.createElement(
                            _Hidden2.default,
                            { xs: true },
                            nav
                        )
                    )
                ),
                _react2.default.createElement(
                    _Visible2.default,
                    { xs: true },
                    _react2.default.createElement(
                        'div',
                        { className: classes.separate },
                        _react2.default.createElement(
                            _reactWaypoint2.default,
                            { topOffset: 60, onEnter: this.removeShadow, onLeave: this.addShadow },
                            _react2.default.createElement(
                                'div',
                                { className: !shadow ? classes.shadow : '' },
                                nav
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

Header.propTypes = {
    classes: _propTypes2.default.object,
    logo: _propTypes2.default.node,
    title: _propTypes2.default.string,
    active: _propTypes2.default.string,
    nav: _propTypes2.default.node,
    menu: _propTypes2.default.node,
    messagesIcon: _propTypes2.default.object
};

Header.defaultProps = {
    messagesIcon: {}
};

exports.default = Header;