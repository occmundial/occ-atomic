'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.state = {
            open: false
        };
        _this.toggleMenu = _this.toggleMenu.bind(_this);
        _this.closeMenu = _this.closeMenu.bind(_this);
        return _this;
    }

    _createClass(Menu, [{
        key: 'toggleMenu',
        value: function toggleMenu(e) {
            e.stopPropagation();
            this.setState({
                open: !this.state.open
            });
            if (!this.state.open) {
                window.addEventListener("click", this.closeMenu);
            }
        }
    }, {
        key: 'closeMenu',
        value: function closeMenu() {
            this.setState({
                open: false
            });
            window.removeEventListener("click", this.closeMenu);
        }
    }, {
        key: 'render',
        value: function render() {
            var open = this.state.open;
            var _props = this.props,
                classes = _props.classes,
                id = _props.id,
                label = _props.label,
                buttons = _props.buttons;

            return _react2.default.createElement(
                'div',
                { id: id, className: classes.menu },
                _react2.default.createElement(
                    'div',
                    { className: classes.btnContainer },
                    _react2.default.createElement(
                        'button',
                        { className: classes.btnMenu + ' ' + (open ? classes.btnMenuOpen : ''), onClick: this.toggleMenu },
                        _react2.default.createElement(
                            'p',
                            { className: classes.label },
                            label
                        ),
                        _react2.default.createElement('i', { className: classes.menuIcon })
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: classes.dropdownMenu + ' ' + (open ? classes.dropdownMenuOpen : '') },
                        buttons.map(function (button, index) {
                            if (button == 'separator') {
                                return _react2.default.createElement('li', { key: index, className: classes.separator });
                            } else {
                                return _react2.default.createElement(
                                    'li',
                                    { key: button.id },
                                    _react2.default.createElement(
                                        'a',
                                        _extends({ className: '' + classes.listAnchor + (button.type == "signOut" ? ' ' + classes.signOut : '') }, button),
                                        button.label
                                    )
                                );
                            }
                        })
                    )
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

Menu.propTypes = {
    classes: _propTypes2.default.object,
    config: _propTypes2.default.object,
    label: _propTypes2.default.string,
    buttons: _propTypes2.default.array,
    id: _propTypes2.default.string
};

exports.default = Menu;