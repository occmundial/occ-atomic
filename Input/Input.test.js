'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reduceClasses = function reduceClasses(prev, curr) {
    return Object.assign({}, prev, _defineProperty({}, curr, curr));
};

var classes = Object.keys(_styles2.default).reduce(reduceClasses, {});

describe("Input", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the right html tag', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes }));
        expect(wrapper.find('.input').type()).toBe('input');
        wrapper.setProps({ type: 'textarea' });
        expect(wrapper.find('.input').type()).toBe('textarea');
        wrapper.setProps({ type: 'select', options: [] });
        expect(wrapper.find('.input').type()).toBe('select');
    });

    it('renders the right type of input', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes }));
        expect(wrapper.find('.input').prop('type')).toBe('text');
        wrapper.setProps({ type: 'email' });
        expect(wrapper.find('.input').prop('type')).toBe('email');
        wrapper.setProps({ type: 'number' });
        expect(wrapper.find('.input').prop('type')).toBe('number');
    });

    it('sets the maxLength property', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, maxLength: 2 }));
        expect(wrapper.find('.input').prop('maxLength')).toBe(2);
    });

    it('shows a counter with the remaining characters', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, maxLength: 50, counter: true }));
        expect(wrapper.find('.counter').length).toBe(0);
        wrapper.setState({ status: 'focus' });
        expect(wrapper.find('.counter').length).toBe(1);
        expect(wrapper.find('.counter').text()).toBe('50');
        wrapper.setState({ value: '1234567890' });
        expect(wrapper.find('.counter').text()).toBe('40');
    });

    it('renders a label and a placeholder in the input', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, label: 'Label', placeholder: 'Placeholder' }));
        expect(wrapper.find('.label').length).toBe(1);
        expect(wrapper.find('.label').text()).toBe('Label');
        expect(wrapper.find('.input').prop('placeholder')).toBe('Placeholder');
    });

    it('renders a placeholder that works as a label on focus', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, placeholder: 'Placeholder' }));
        expect(wrapper.find('.placeholder').length).toBe(1);
        expect(wrapper.find('.placeholder').text()).toBe('Placeholder');
        expect(wrapper.find('.container').hasClass('push')).toBe(true);
    });

    it('renders a static field when disabled', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes }));
        expect(wrapper.find('.container').hasClass('disabled')).toBe(false);
        expect(wrapper.find('.input').type()).toBe('input');
        wrapper.setProps({ disabled: true });
        expect(wrapper.find('.container').hasClass('disabled')).toBe(true);
        expect(wrapper.find('.input').type()).toBe('label');
    });

    it('sets the autoFocus property', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, autoFocus: true }));
        expect(wrapper.find('.input').prop('autoFocus')).toBe(true);
    });

    it('shows an icon that clears the value on click', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, clear: true }));
        expect(wrapper.find('.clear').length).toBe(0);
        wrapper.setState({ value: 'Value' });
        expect(wrapper.find('.clear').length).toBe(1);
        wrapper.find('.clear').simulate('click');
        expect(wrapper.find('.clear').length).toBe(0);
        expect(wrapper.state('value')).toBe('');
    });

    it('shows an error message', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, error: 'This field has an error' }));
        expect(wrapper.find('.error').length).toBe(0);
        wrapper.setState({ touched: true });
        expect(wrapper.find('.error').length).toBe(2);
        expect(wrapper.find('.error').at(0).hasClass('container')).toBe(true);
        expect(wrapper.find('.error').at(1).text()).toBe('This field has an error');
    });

    it('shows the field as a valid value', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, valid: true }));
        expect(wrapper.find('.container').hasClass('correct')).toBe(false);
        wrapper.setState({ touched: true });
        expect(wrapper.find('.container').hasClass('correct')).toBe(true);
    });

    it('sets a default value', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, valueProp: 'Value' }));
        expect(wrapper.state('value')).toBe('Value');
    });

    it('calls the onFocus function', function () {
        var onFocus = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, onFocus: onFocus }));
        wrapper.find('.input').simulate('focus', { target: {} });
        expect(onFocus.mock.calls.length).toBe(1);
    });

    it('calls the onBlur function', function () {
        var onBlur = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, onBlur: onBlur }));
        wrapper.find('.input').simulate('blur', { target: { value: 'Value' } });
        expect(onBlur.mock.calls.length).toBe(1);
    });

    it('calls the onChange function', function () {
        var onChange = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, onChange: onChange }));
        wrapper.find('.input').simulate('change', { target: {} });
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('calls the onClear function', function () {
        var onClear = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, clear: true, onClear: onClear, valueProp: 'Value' }));
        wrapper.find('.clear').simulate('click');
        expect(onClear.mock.calls.length).toBe(1);
    });

    it('calls the onRef function', function () {
        var onRef = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, onRef: onRef }));
        expect(onRef.mock.calls.length).toBe(1);
    });

    it('renders the options of the select', function () {
        var options = [{
            value: 1,
            text: 'Option 1'
        }, {
            value: 2,
            text: 'Option 2'
        }];
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes, type: 'select', options: options }));
        expect(wrapper.find('option').length).toBe(2);
        expect(wrapper.find('option').at(0).text()).toBe('Option 1');
        expect(wrapper.find('option').at(0).prop('value')).toBe(1);
    });

    it('shows an icon', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { classes: classes }));
        expect(wrapper.find('.icon').length).toBe(0);
        wrapper.setProps({ iconName: 'search' });
        expect(wrapper.find('.icon').length).toBe(1);
    });
});

describe("InputJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Input styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});