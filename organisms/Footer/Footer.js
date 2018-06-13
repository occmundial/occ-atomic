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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Container = require('../../elements/layout/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'showSub',
        value: function showSub(button) {
            (0, _jquery2.default)('#' + button.sub.id).fadeIn('fast').click(function (e) {
                e.stopPropagation();
            });
            (0, _jquery2.default)('#' + button.sub.id + ' a').click(function () {
                (0, _jquery2.default)('#' + button.sub.id).fadeOut('fast');
            });
            (0, _jquery2.default)('body').click(function () {
                (0, _jquery2.default)('#' + button.sub.id).fadeOut('fast');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                buttons = _props.buttons;

            return _react2.default.createElement(
                _Container2.default,
                { fluid: true, className: classes.footer },
                _react2.default.createElement(
                    'ul',
                    { className: classes.footerList },
                    buttons.map(function (button) {
                        return _react2.default.createElement(
                            'li',
                            { key: button.id, className: classes.listElement },
                            _react2.default.createElement(
                                'a',
                                { className: classes.link, id: button.id, href: button.href, target: button.target, onClick: 'sub' in button ? function () {
                                        _this2.showSub(button);
                                    } : button.onClick ? button.onClick : undefined },
                                button.label
                            ),
                            button.sub && _react2.default.createElement(
                                'ul',
                                { className: classes.dropdownMenu, id: button.sub.id, style: button.sub.style },
                                button.sub.items.map(function (item) {
                                    return _react2.default.createElement(
                                        'li',
                                        { key: item.id, className: classes.dropdownElement },
                                        _react2.default.createElement(
                                            'a',
                                            { className: classes.dropdownLink, id: item.id, href: item.href, target: item.target },
                                            item.label
                                        )
                                    );
                                })
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component);

Footer.propTypes = {
    classes: _propTypes2.default.object,
    buttons: _propTypes2.default.array
};

exports.default = Footer;