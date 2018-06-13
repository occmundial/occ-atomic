'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

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

describe("Avatar", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Avatar2.default, { name: 'John Doe', classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("AvatarJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { name: 'John Doe' }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Avatar styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });

    it('returns the right width and height', function () {
        var props = {};
        expect(_styles2.default.circle.width(props)).toBe(70);
        expect(_styles2.default.circle.height(props)).toBe(70);
        props.size = 50;
        expect(_styles2.default.circle.width(props)).toBe(50);
        expect(_styles2.default.circle.height(props)).toBe(50);
    });
});