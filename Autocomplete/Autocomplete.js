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

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _Droplist = require('../Droplist');

var _Droplist2 = _interopRequireDefault(_Droplist);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* This component integrates the Input, Droplist and Label components.
* The value of Input filters the list in Droplist.
* The selected items of Droplist can be stacked into Labels.
*/
var Autocomplete = function (_React$Component) {
    _inherits(Autocomplete, _React$Component);

    function Autocomplete(props) {
        _classCallCheck(this, Autocomplete);

        var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

        _this.state = {
            value: props.inputProps.valueProp ? props.inputProps.valueProp : '',
            focus: false,
            labels: []
        };
        _this.onChange = _this.onChange.bind(_this);
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        _this.addLabel = _this.addLabel.bind(_this);
        _this.removeLabel = _this.removeLabel.bind(_this);
        _this.removeSelected = _this.removeSelected.bind(_this);
        _this.labels = [];
        return _this;
    }

    _createClass(Autocomplete, [{
        key: 'onChange',
        value: function onChange(value) {
            var onChange = this.props.onChange;

            this.setState({
                value: value, focus: true
            });
            if (onChange) onChange(value);
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            var onFocus = this.props.onFocus;

            this.setState({
                focus: true
            });
            if (onFocus) onFocus();
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            var _this2 = this;

            var onBlur = this.props.onBlur;

            setTimeout(function () {
                _this2.setState({
                    focus: false
                });
            }, 200);
            if (onBlur) onBlur();
        }
    }, {
        key: 'onClick',
        value: function onClick(item) {
            var _props = this.props,
                onClick = _props.onClick,
                onChange = _props.onChange,
                droplistProps = _props.droplistProps,
                stackLabels = _props.stackLabels;

            var child = this.child;
            if (stackLabels) {
                this.child.onClear();
                this.setState({
                    value: ''
                });
                this.child.child.focus();
                this.addLabel(item);
            } else {
                this.setState({
                    value: item[droplistProps.itemTextKey], focus: false
                });
                if (onChange) onChange(item[droplistProps.itemTextKey]);
            }
            if (onClick) onClick(stackLabels ? this.labels : item);
        }
    }, {
        key: 'addLabel',
        value: function addLabel(item) {
            this.labels.push(item);
            this.setState({ labels: this.labels });
        }
    }, {
        key: 'removeLabel',
        value: function removeLabel(item) {
            var _props2 = this.props,
                droplistProps = _props2.droplistProps,
                onClick = _props2.onClick;

            var pos = this.labels.map(function (label) {
                return label[droplistProps.itemIdKey];
            }).indexOf(item[droplistProps.itemIdKey]);
            this.labels.splice(pos, 1);
            this.setState({ labels: this.labels });
            if (onClick) onClick(this.labels);
        }
    }, {
        key: 'removeSelected',
        value: function removeSelected() {
            var labels = this.state.labels;
            var droplistProps = this.props.droplistProps;

            var cleanItems = [];
            if (droplistProps.groups) {
                droplistProps.items.map(function (group) {
                    var cleanGroup = group[droplistProps.groupItemsKey].filter(function (item) {
                        var inLabels = labels.filter(function (label) {
                            return label[droplistProps.itemIdKey] == item[droplistProps.itemIdKey];
                        });
                        return !inLabels.length;
                    });
                    var modifiedGroup = Object.assign({}, group);
                    modifiedGroup[droplistProps.groupItemsKey] = cleanGroup;
                    if (cleanGroup.length) cleanItems.push(modifiedGroup);
                });
            } else {
                cleanItems = droplistProps.items.filter(function (item) {
                    var inLabels = labels.filter(function (label) {
                        return label[droplistProps.itemIdKey] == item[droplistProps.itemIdKey];
                    });
                    return !inLabels.length;
                });
            }
            return cleanItems;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                value = _state.value,
                focus = _state.focus,
                labels = _state.labels;
            var _props3 = this.props,
                classes = _props3.classes,
                id = _props3.id,
                inputProps = _props3.inputProps,
                droplistProps = _props3.droplistProps,
                onClick = _props3.onClick,
                stackLabels = _props3.stackLabels,
                limit = _props3.limit,
                limitPlaceholder = _props3.limitPlaceholder,
                className = _props3.className,
                style = _props3.style;

            var cleanItems = this.removeSelected();
            return _react2.default.createElement(
                'div',
                { className: '' + classes.autoComplete + (className ? ' ' + className : ''), id: id, style: style },
                _react2.default.createElement(_Input2.default, {
                    onRef: function onRef(ref) {
                        _this3.child = ref;
                    },
                    id: inputProps.id,
                    type: inputProps.type,
                    name: inputProps.name,
                    label: inputProps.label,
                    placeholder: stackLabels && limit && this.labels.length >= limit ? limitPlaceholder : inputProps.placeholder,
                    onChange: this.onChange,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    selectOnFocus: inputProps.selectOnFocus,
                    clear: inputProps.clear,
                    disabled: stackLabels && limit && this.labels.length >= limit,
                    valueProp: value,
                    iconName: inputProps.iconName,
                    className: '' + classes.input + (inputProps.className ? ' ' + inputProps.className : '') }),
                value && focus && _react2.default.createElement(_Droplist2.default, {
                    items: cleanItems,
                    groups: droplistProps.groups,
                    groupNameKey: droplistProps.groupNameKey,
                    groupIdKey: droplistProps.groupIdKey,
                    groupItemsKey: droplistProps.groupItemsKey,
                    itemTextKey: droplistProps.itemTextKey,
                    itemTextRightKey: droplistProps.itemTextRightKey,
                    itemIdKey: droplistProps.itemIdKey,
                    term: value,
                    onClick: this.onClick,
                    className: '' + classes.droplist + (droplistProps.className ? ' ' + droplistProps.className : '') }),
                stackLabels && labels.length ? _react2.default.createElement(
                    'div',
                    { className: classes.labels },
                    labels.map(function (label) {
                        return _react2.default.createElement(
                            _Label2.default,
                            { key: label[droplistProps.itemIdKey], onClose: function onClose() {
                                    _this3.removeLabel(label);
                                } },
                            label[droplistProps.itemTextKey]
                        );
                    })
                ) : ''
            );
        }
    }]);

    return Autocomplete;
}(_react2.default.Component);

Autocomplete.propTypes = {
    classes: _propTypes2.default.object,
    /** Object with the props for the Input component. */
    inputProps: _propTypes2.default.object.isRequired,
    /** Object with the props for the Droplist component. */
    droplistProps: _propTypes2.default.object.isRequired,
    /** Function to call on change (Input). */
    onChange: _propTypes2.default.func,
    /** Function to call on focus (Input). */
    onFocus: _propTypes2.default.func,
    /** Function to call on blur (Input). */
    onBlur: _propTypes2.default.func,
    /** Function to call on click (Droplist item). */
    onClick: _propTypes2.default.func,
    /** Set this property to stack the selected items of Droplist into Labels. */
    stackLabels: _propTypes2.default.bool,
    /** Set the limit of stackable items into labels. */
    limit: _propTypes2.default.number,
    /** Change the placeholder when the limit of labels has been reached. */
    limitPlaceholder: _propTypes2.default.string,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

Autocomplete.defaultProps = {
    inputProps: {},
    droplistProps: {}
};

exports.default = Autocomplete;