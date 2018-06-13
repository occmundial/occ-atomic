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

var Flexbox = function (_React$Component) {
    _inherits(Flexbox, _React$Component);

    function Flexbox() {
        _classCallCheck(this, Flexbox);

        return _possibleConstructorReturn(this, (Flexbox.__proto__ || Object.getPrototypeOf(Flexbox)).apply(this, arguments));
    }

    _createClass(Flexbox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                children = _props.children,
                display = _props.display,
                direction = _props.direction,
                wrap = _props.wrap,
                justifyContent = _props.justifyContent,
                alignItems = _props.alignItems,
                alignContent = _props.alignContent,
                order = _props.order,
                flex = _props.flex,
                alignSelf = _props.alignSelf,
                id = _props.id,
                className = _props.className;
            var style = this.props.style;

            var displayClass = display ? display == 'inline-flex' ? classes.iFlex : classes.flex : '';
            if (!style) style = {};
            if (order) style.order = order;
            if (flex) style.flex = flex;
            return _react2.default.createElement(
                'div',
                {
                    className: '' + displayClass + (display && direction ? ' ' + classes[direction] : '') + (display && wrap ? ' ' + classes[wrap] : '') + (display && justifyContent ? ' ' + classes['j' + justifyContent] : '') + (display && alignItems ? ' ' + classes['a' + alignItems] : '') + (display && alignContent ? ' ' + classes['c' + alignContent] : '') + (alignSelf ? ' ' + classes['s' + alignSelf] : '') + (className ? ' ' + className : ''),
                    id: id,
                    style: style },
                children
            );
        }
    }]);

    return Flexbox;
}(_react2.default.Component);

Flexbox.propTypes = {
    classes: _propTypes2.default.object,
    children: _propTypes2.default.node,
    display: _propTypes2.default.string,
    direction: _propTypes2.default.string,
    wrap: _propTypes2.default.string,
    justifyContent: _propTypes2.default.string,
    alignItems: _propTypes2.default.string,
    alignContent: _propTypes2.default.string,
    order: _propTypes2.default.number,
    flex: _propTypes2.default.string,
    alignSelf: _propTypes2.default.string,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Flexbox;