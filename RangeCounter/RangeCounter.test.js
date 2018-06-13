'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _RangeCounter = require('./RangeCounter');

var _RangeCounter2 = _interopRequireDefault(_RangeCounter);

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

describe("RangeCounter", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RangeCounter2.default, { classes: classes, min: 1, max: 10, total: 100 }));
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the text correctly', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RangeCounter2.default, { classes: classes, min: 1, max: 10, total: 100, type: 'things' }));
        expect(wrapper.find('div').text()).toEqual('1 - 10 / 100 things');
    });
});

describe("RangeCounterJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { min: 1, max: 10, total: 100 }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("RangeCounter styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});