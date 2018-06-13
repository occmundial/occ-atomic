'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** A flexible button component, with four pre-stablished themes. */
var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                className = _props.className,
                children = _props.children,
                id = _props.id,
                href = _props.href,
                target = _props.target,
                onClick = _props.onClick,
                theme = _props.theme,
                size = _props.size,
                block = _props.block,
                disabled = _props.disabled,
                icon = _props.icon,
                style = _props.style,
                loading = _props.loading;

            var classNames = classes.btn;
            if (theme) classNames += ' ' + classes[theme];
            if (loading) classNames += ' ' + classes.loading;
            if (disabled) classNames += ' ' + classes.disabled;
            if (size == "md" || size == "lg") classNames += ' ' + classes[size];
            if (block) classNames += ' ' + classes.block;
            if (className) classNames += ' ' + className;
            if (href) {
                return _react2.default.createElement(
                    'a',
                    {
                        className: classNames,
                        href: disabled ? href : '',
                        target: target ? target : '',
                        onClick: !disabled && onClick,
                        id: id,
                        style: style },
                    _react2.default.createElement(
                        'span',
                        { className: classes.cont },
                        icon ? _react2.default.createElement('i', { className: classes.icon }) : '',
                        children
                    ),
                    loading && _react2.default.createElement(
                        'span',
                        { className: classes.loadCont },
                        _react2.default.createElement('i', { className: classes.loadIcon })
                    )
                );
            } else {
                return _react2.default.createElement(
                    'button',
                    {
                        className: classNames,
                        onClick: !disabled && onClick,
                        id: id,
                        style: style },
                    _react2.default.createElement(
                        'span',
                        { className: classes.cont },
                        icon ? _react2.default.createElement('i', { className: classes.icon }) : '',
                        children
                    ),
                    loading && _react2.default.createElement(
                        'span',
                        { className: classes.loadCont },
                        _react2.default.createElement('i', { className: classes.loadIcon })
                    )
                );
            }
        }
    }]);

    return Button;
}(_react2.default.Component);

Button.defaultProps = {
    theme: 'main',
    size: 'sm',
    block: false,
    disabled: false
};

Button.propTypes = {
    classes: _propTypes2.default.object,
    children: _propTypes2.default.string,
    /** There are four themes available: main, secondary, blue, flat. */
    theme: _propTypes2.default.string,
    /** The button has three different sizes: sm, md, lg. */
    size: _propTypes2.default.string,
    /** The block property lets the button expand to ocupy the whole width of its parent. */
    block: _propTypes2.default.bool,
    /** It disables the button and shows it with the proper theme. */
    disabled: _propTypes2.default.bool,
    /** Use the name of any of the icons available in the library. */
    icon: _propTypes2.default.string,
    /** The loading property disables the button and shows a loading icon spinning. */
    loading: _propTypes2.default.bool,
    /** The function to call when the button is clicked. */
    onClick: _propTypes2.default.func,
    /** Optionally, you can set the href property and use it like a link. */
    href: _propTypes2.default.string,
    /** If you use the href property, you can also define the target. */
    target: _propTypes2.default.string,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Button;