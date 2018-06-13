'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _OrderBy = require('./OrderBy');

var _OrderBy2 = _interopRequireDefault(_OrderBy);

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

var options = [{
    value: 1,
    text: 'Option 1'
}, {
    value: 2,
    text: 'Option 2,'
}];

describe("OrderBy", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_OrderBy2.default, { classes: classes, options: options }));
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the text', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_OrderBy2.default, { classes: classes, options: options, text: 'Text' }));
        expect(wrapper.find('span').text()).toEqual('Text');
    });

    it('renders all the options', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_OrderBy2.default, { classes: classes, options: options }));
        expect(wrapper.find('option').length).toBe(2);
    });

    it('sets a value', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_OrderBy2.default, { classes: classes, options: options, value: 2 }));
        expect(wrapper.find('select').props().value).toBe(2);
    });

    it('calls onChange function', function () {
        var onChange = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_OrderBy2.default, { classes: classes, options: options, onChange: onChange }));
        wrapper.find('select').simulate('change');
        expect(onChange.mock.calls.length).toBe(1);
    });
});

describe("OrderByJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { options: options }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("OrderBy styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});