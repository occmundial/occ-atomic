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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _colors = require('../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Input component that includes all the markup, functions and behaviors to implement any type of input field. */
var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.state = {
            status: 'default',
            value: props.valueProp ? props.valueProp : '',
            touched: false,
            initialValue: props.valueProp ? props.valueProp : ''
        };
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.onClear = _this.onClear.bind(_this);
        _this.setAsComplete = _this.setAsComplete.bind(_this);
        return _this;
    }

    _createClass(Input, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                input = _props.input,
                onRef = _props.onRef;
            var value = this.state.value;

            if (input && input.value) this.setState({ value: input.value });
            if (onRef) onRef(this);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var value = this.state.value;

            if (value) {
                this.setAsComplete();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var input = props.input,
                valueProp = props.valueProp;
            var _state = this.state,
                value = _state.value,
                initialValue = _state.initialValue;

            if (input && input.value) this.setState({ value: input.value });else if (valueProp && valueProp != initialValue) this.setState({ value: valueProp });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var onRef = this.props.onRef;

            if (onRef) onRef(undefined);
        }
    }, {
        key: 'setAsComplete',
        value: function setAsComplete() {
            this.setState({ status: 'complete' });
        }
    }, {
        key: 'onFocus',
        value: function onFocus(_ref) {
            var target = _ref.target;
            var _props2 = this.props,
                onFocus = _props2.onFocus,
                selectOnFocus = _props2.selectOnFocus;

            if (selectOnFocus) target.select();
            this.setState({ status: 'focus', touched: true });
            if (onFocus) onFocus();
        }
    }, {
        key: 'onBlur',
        value: function onBlur(_ref2) {
            var value = _ref2.target.value;
            var _props3 = this.props,
                input = _props3.input,
                onBlur = _props3.onBlur;

            this.setState({ value: value, status: value.length ? 'complete' : 'default' });
            if (onBlur) onBlur(value);
            if (input) input.onBlur(value);
        }
    }, {
        key: 'onChange',
        value: function onChange(_ref3) {
            var value = _ref3.target.value;
            var _props4 = this.props,
                maxLength = _props4.maxLength,
                input = _props4.input,
                onChange = _props4.onChange;

            this.setState({ value: value });
            if (onChange) onChange(value);
            if (input) input.onBlur(value);
        }
    }, {
        key: 'onClear',
        value: function onClear() {
            var _props5 = this.props,
                input = _props5.input,
                onClear = _props5.onClear;

            this.setState({ value: '', status: 'default' });
            if (onClear) onClear();
            if (input) input.onBlur(value);
        }
    }, {
        key: 'setIconColor',
        value: function setIconColor(status) {
            var iconColors = {
                default: _colors2.default.black,
                focus: _colors2.default.blue,
                complete: _colors2.default.black,
                correct: _colors2.default.green,
                error: _colors2.default.red,
                disabled: _colors2.default.grey1
            };
            return iconColors[status];
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                status = _state2.status,
                value = _state2.value,
                touched = _state2.touched;
            var _props6 = this.props,
                input = _props6.input,
                classes = _props6.classes,
                className = _props6.className,
                label = _props6.label,
                placeholder = _props6.placeholder,
                counter = _props6.counter,
                maxLength = _props6.maxLength,
                type = _props6.type,
                options = _props6.options,
                name = _props6.name,
                id = _props6.id,
                style = _props6.style,
                disabled = _props6.disabled,
                meta = _props6.meta,
                autoFocus = _props6.autoFocus,
                error = _props6.error,
                valid = _props6.valid,
                clear = _props6.clear,
                selectOnFocus = _props6.selectOnFocus,
                iconName = _props6.iconName;

            var realStatus = status;
            var InputType = type == "textarea" ? "textarea" : type == "select" ? "select" : "input";
            if (status != 'focus') {
                if (disabled) realStatus = 'disabled';else if (meta && meta.error && meta.touched || touched && error) realStatus = 'error';else if (meta && meta.valid || touched && valid) realStatus = 'correct';else if (input && input.value) realStatus = 'complete';
            }
            var iconColor = void 0;
            if (iconName) iconColor = this.setIconColor(realStatus);
            if (disabled) {
                return _react2.default.createElement(
                    'div',
                    { className: classes.container + ' ' + classes.disabled + ' ' + (!label && placeholder && classes.push) + (className ? ' ' + className : ''), style: style },
                    label && _react2.default.createElement(
                        'label',
                        { className: classes.label + ' ' + classes.left },
                        label
                    ),
                    _react2.default.createElement(
                        'label',
                        { className: '' + classes.input + (iconName ? ' ' + classes.hasIcon : '') },
                        input && input.value ? input.value : value ? value : placeholder
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { className: classes.container + ' ' + classes[realStatus] + (!label && placeholder ? ' ' + classes.push : '') + (className ? ' ' + className : ''), style: style },
                label && _react2.default.createElement(
                    'label',
                    {
                        className: classes.label + ' ' + classes.left },
                    label
                ),
                !label && placeholder && _react2.default.createElement(
                    'label',
                    {
                        className: classes.label + ' ' + classes.left + ' ' + classes.placeholder + (iconName ? ' ' + classes.pushHolder : '') },
                    placeholder
                ),
                iconName && _react2.default.createElement(_Icon2.default, { iconName: iconName, width: 24, height: 24, display: 'inline-block', className: classes.icon, colors: [iconColor] }),
                counter && status == 'focus' && _react2.default.createElement(
                    'label',
                    {
                        className: classes.label + ' ' + classes.right + ' ' + classes.counter },
                    maxLength - value.length
                ),
                _react2.default.createElement(
                    'div',
                    { className: classes.inputWrap },
                    type == "select" ? _react2.default.createElement(
                        InputType,
                        {
                            type: type,
                            name: name,
                            id: id,
                            className: classes.input + ' ' + classes.select + (iconName ? ' ' + classes.hasIcon : '') + (clear ? ' ' + classes.hasClear : '') + (type == "textarea" ? ' ' + classes.textarea : '') + (value && type == "textarea" ? ' ' + classes.expanded : ''),
                            placeholder: label && placeholder ? placeholder : '',
                            value: input && input.value ? input.value : value,
                            autoFocus: autoFocus,
                            maxLength: maxLength,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur,
                            onChange: this.onChange,
                            ref: function ref(_ref4) {
                                _this2.child = _ref4;
                            }
                        },
                        options.map(function (option) {
                            return _react2.default.createElement(
                                'option',
                                { key: option.value, value: option.value },
                                option.text
                            );
                        })
                    ) : _react2.default.createElement(InputType, {
                        type: type,
                        name: name,
                        id: id,
                        className: '' + classes.input + (iconName ? ' ' + classes.hasIcon : '') + (clear ? ' ' + classes.hasClear : '') + (type == "textarea" ? ' ' + classes.textarea : '') + (value && type == "textarea" ? ' ' + classes.expanded : ''),
                        placeholder: label && placeholder ? placeholder : '',
                        value: input && input.value ? input.value : value,
                        autoFocus: autoFocus,
                        maxLength: maxLength,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                        onChange: this.onChange,
                        ref: function ref(_ref5) {
                            _this2.child = _ref5;
                        }
                    })
                ),
                value && clear && _react2.default.createElement(
                    'button',
                    { onClick: this.onClear, className: classes.clear },
                    _react2.default.createElement(_Icon2.default, { iconName: 'close' })
                ),
                (meta && meta.error && meta.touched || error && touched && status != 'focus') && _react2.default.createElement(
                    'label',
                    { className: classes.label + ' ' + classes.error },
                    meta ? meta.error : error
                )
            );
        }
    }]);

    return Input;
}(_react2.default.Component);

Input.defaultProps = {
    type: 'text',
    counter: false,
    maxLength: 100,
    disabled: false,
    autoFocus: false,
    clear: false,
    valueProp: '',
    selectOnFocus: false
};

Input.propTypes = {
    classes: _propTypes2.default.object,
    /** Type of the input. Use any of the following types: text, email, password, textarea, select, date, number, search, file. */
    type: _propTypes2.default.string,
    /** Maximum number of characters to accept in the input. */
    maxLength: _propTypes2.default.number,
    /** Label to show right above the input field. */
    label: _propTypes2.default.string,
    /** Text to display as the placeholder for the input. If you set a value for placeholder but not for label, the placeholder will behave as a label on focus. */
    placeholder: _propTypes2.default.string,
    /** Name of the input field. */
    name: _propTypes2.default.string,
    /** Disable the input. It shows a static markup with the styles of an input. */
    disabled: _propTypes2.default.bool,
    /** It displays a counter floating to the right, indicating the number of the remaining characters available. It is related to the maxLength value. */
    counter: _propTypes2.default.bool,
    /** Focus automatically on the field with this property. You can just use one of these per form. */
    autoFocus: _propTypes2.default.bool,
    /** Setting this property will show an 'x' icon on the right side of the input. Clicking it will remove the value of the input field.*/
    clear: _propTypes2.default.bool,
    /** After doing your validations outside of this component, you cand send an error string. */
    error: _propTypes2.default.string,
    /** If the input value is valid after your validations, you can use this property to highlight the input in green. */
    valid: _propTypes2.default.bool,
    /** Use as a default value. */
    valueProp: _propTypes2.default.node,
    /** With this property set to true, the value of the input will be selected on focus. */
    selectOnFocus: _propTypes2.default.bool,
    /** Metadata sended by react-form. */
    meta: _propTypes2.default.object,
    /** Object sended by react-form. */
    input: _propTypes2.default.object,
    /** Function to call on focus. */
    onFocus: _propTypes2.default.func,
    /** Function to call on blur. */
    onBlur: _propTypes2.default.func,
    /** Function to call on change. */
    onChange: _propTypes2.default.func,
    /** Function to call after clicking the 'x' icon shown by the 'clear' property. */
    onClear: _propTypes2.default.func,
    /** Function to call when you need to call the input by a reference. */
    onRef: _propTypes2.default.func,
    /** Array of objects with options in case you set the 'type' property as 'select'. Each option must have a value and a text. */
    options: _propTypes2.default.array,
    /** If you want to display an icon on the left side, use any icon's name available in the library. */
    iconName: _propTypes2.default.string,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Input;