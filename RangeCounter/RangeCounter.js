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

/** Use this component in lists with pagination. It will display information about the current page and its elements. */
var RangeCounter = function (_React$Component) {
    _inherits(RangeCounter, _React$Component);

    function RangeCounter() {
        _classCallCheck(this, RangeCounter);

        return _possibleConstructorReturn(this, (RangeCounter.__proto__ || Object.getPrototypeOf(RangeCounter)).apply(this, arguments));
    }

    _createClass(RangeCounter, [{
        key: 'numberWithCommas',
        value: function numberWithCommas(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                min = _props.min,
                max = _props.max,
                symbol = _props.symbol,
                total = _props.total,
                type = _props.type,
                of = _props.of,
                id = _props.id,
                className = _props.className,
                style = _props.style;

            return _react2.default.createElement(
                'div',
                { className: '' + classes.cont + (className ? ' ' + className : ''), id: id, style: style },
                _react2.default.createElement(
                    'span',
                    { className: classes.num },
                    this.numberWithCommas(min),
                    symbol,
                    this.numberWithCommas(max)
                ),
                ' ',
                of,
                ' ',
                this.numberWithCommas(total),
                ' ',
                type
            );
        }
    }]);

    return RangeCounter;
}(_react2.default.Component);

RangeCounter.propTypes = {
    classes: _propTypes2.default.object,
    /** The number of the first item. */
    min: _propTypes2.default.number,
    /** The number of the last item. */
    max: _propTypes2.default.number,
    /** A symbol to separate the min and max numbers. */
    symbol: _propTypes2.default.string,
    /** A semantic separator between the min and max, with the total. */
    of: _propTypes2.default.string,
    /** The total number of elements on the whole list. */
    total: _propTypes2.default.number,
    /** The type of items that the list is showing. */
    type: _propTypes2.default.string,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

RangeCounter.defaultProps = {
    symbol: ' - ',
    type: '',
    of: '/'
};

exports.default = RangeCounter;