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

/** The OrderBy component shows a label and a dropdown with the values to order a set of items. You have to do that ordering by receiving the OrderBy value with an onChange function. */
var OrderBy = function (_React$Component) {
    _inherits(OrderBy, _React$Component);

    function OrderBy(props) {
        _classCallCheck(this, OrderBy);

        var _this = _possibleConstructorReturn(this, (OrderBy.__proto__ || Object.getPrototypeOf(OrderBy)).call(this, props));

        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(OrderBy, [{
        key: 'onChange',
        value: function onChange(_ref) {
            var value = _ref.target.value;
            var onChange = this.props.onChange;

            if (onChange) onChange(value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                text = _props.text,
                options = _props.options,
                value = _props.value,
                id = _props.id,
                className = _props.className,
                style = _props.style;

            return _react2.default.createElement(
                'div',
                { className: '' + classes.wrap + (className ? ' ' + className : ''), id: id, style: style },
                _react2.default.createElement(
                    'span',
                    { className: classes.text },
                    text
                ),
                _react2.default.createElement(
                    'select',
                    { className: classes.select, value: value, onChange: this.onChange },
                    options.map(function (option) {
                        return _react2.default.createElement(
                            'option',
                            { key: option.value, value: option.value },
                            option.text
                        );
                    })
                )
            );
        }
    }]);

    return OrderBy;
}(_react2.default.Component);

OrderBy.propTypes = {
    classes: _propTypes2.default.object,
    /** Text to be displayed on the left. */
    text: _propTypes2.default.string,
    /** Array with all the options to show in the dropdown. */
    options: _propTypes2.default.array.isRequired,
    /** Set a default value. */
    value: _propTypes2.default.node,
    /** Function to call when the value of the dropdown changes. */
    onChange: _propTypes2.default.func,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = OrderBy;