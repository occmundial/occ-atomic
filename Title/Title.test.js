'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

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

describe("Title", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Title2.default, { h: 1, classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the right heading', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Title2.default, { h: 3, classes: classes }));
        expect(wrapper.find('h3').length).toBe(1);
    });
});

describe("TitleJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { h: 1 }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Title styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});