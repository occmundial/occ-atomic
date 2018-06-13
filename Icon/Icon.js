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

/** Component to display any of the icons on the library. */
var Icon = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                className = _props.className,
                style = _props.style,
                id = _props.id,
                onClick = _props.onClick,
                alt = _props.alt;

            var IconType = onClick ? 'button' : 'span';
            return _react2.default.createElement(IconType, { id: id, className: '' + classes.icon + (onClick ? ' ' + classes.click : '') + (className ? ' ' + className : ''), style: style, onClick: onClick, alt: alt });
        }
    }]);

    return Icon;
}(_react2.default.Component);

Icon.defaultProps = {
    transition: '0.3s all'
};

Icon.propTypes = {
    classes: _propTypes2.default.object,
    /** Name of the icon to render. It must match with any of the icons on the library. */
    iconName: _propTypes2.default.string.isRequired,
    /** Width of the icon. By default it will take the value defined on the library for the specified icon. */
    width: _propTypes2.default.number,
    /** Height of the icon. By default it will take the value defined on the library for the specified icon. */
    height: _propTypes2.default.number,
    /** Display property of the icon. By default it will take the value defined on the library for the specified icon. */
    display: _propTypes2.default.string,
    /** Transition for animations. */
    transition: _propTypes2.default.string,
    /** Array with the colors to use in the icon. Some icons use more than one color. By default it will take the value defined on the library for the specified icon. */
    colors: _propTypes2.default.array,
    /** Array with the colors to use on the icon when it's hovered. */
    hover: _propTypes2.default.array,
    /** Function to call when the icon is clicked. */
    onClick: _propTypes2.default.func,
    /** Alt property, in case you need to set it. */
    alt: _propTypes2.default.string,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Icon;