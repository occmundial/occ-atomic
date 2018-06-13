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

var Check = function (_React$Component) {
    _inherits(Check, _React$Component);

    function Check(props) {
        _classCallCheck(this, Check);

        var _this = _possibleConstructorReturn(this, (Check.__proto__ || Object.getPrototypeOf(Check)).call(this, props));

        _this.state = {
            value: props.input ? props.input.value : props.value
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Check, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var input = props.input,
                value = props.value;

            if (input && input.value != this.state.value) this.setState({ value: input.value });else if (value && this.state.value != value) this.setState({ value: value });else if (value != this.state.value) this.setState({ value: value });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            var _props = this.props,
                input = _props.input,
                onChange = _props.onChange,
                id = _props.id,
                disabled = _props.disabled;

            if (!disabled) {
                var value = !this.state.value;
                this.setState({ value: value });
                if (input) input.onBlur(value);
                if (onChange) onChange(value, id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.state.value;
            var _props2 = this.props,
                classes = _props2.classes,
                input = _props2.input,
                label = _props2.label,
                right = _props2.right,
                disabled = _props2.disabled,
                id = _props2.id,
                className = _props2.className,
                style = _props2.style;

            var state = input && input.value ? input.value : value;
            return _react2.default.createElement(
                'div',
                {
                    id: id,
                    className: '' + classes.cont + (state ? ' ' + classes.active : '') + (disabled ? ' ' + classes.disabled : '') + (className ? ' ' + className : ''),
                    tabIndex: 0,
                    onClick: this.toggle,
                    style: style },
                _react2.default.createElement('div', { className: classes.check }),
                label && _react2.default.createElement(
                    'span',
                    { className: classes.label },
                    label
                ),
                right && _react2.default.createElement(
                    'span',
                    { className: classes.right },
                    right
                )
            );
        }
    }]);

    return Check;
}(_react2.default.Component);

Check.propTypes = {
    classes: _propTypes2.default.object,
    input: _propTypes2.default.object,
    value: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    id: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    right: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Check;