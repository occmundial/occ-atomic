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

/** Container component with a card style */
var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                children = _props.children,
                noPadding = _props.noPadding,
                shadow = _props.shadow,
                className = _props.className,
                style = _props.style,
                id = _props.id;

            return _react2.default.createElement(
                'div',
                { id: id, className: '' + (!noPadding ? classes.card : classes.cardNoPadding) + (shadow ? ' ' + classes['shadow' + shadow] : '') + (className ? ' ' + className : ''), style: style },
                children
            );
        }
    }]);

    return Card;
}(_react2.default.Component);

Card.defaultProps = {
    shadow: 3
};

Card.propTypes = {
    classes: _propTypes2.default.object,
    children: _propTypes2.default.node,
    /** Set the level of shadow of the card. Choose one between 1 and 6. */
    shadow: _propTypes2.default.number,
    /** The card has by default a padding. Use this property if you need to remove it. */
    noPadding: _propTypes2.default.bool,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Card;