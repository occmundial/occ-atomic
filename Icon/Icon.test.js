'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

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

describe("Icon", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Icon2.default, { classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('calls the onClick function', function () {
        var onClick = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Icon2.default, { classes: classes, onClick: onClick }));
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });
});

describe("IconJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Icon styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });

    it('returns the right width, height and display', function () {
        var props = { iconName: "testing" };
        expect(_styles2.default.icon.width(props)).toBe('5px');
        expect(_styles2.default.icon.height(props)).toBe('5px');
        expect(_styles2.default.icon.display(props)).toBe('inline-block');
        props.width = 20;props.height = 20;props.display = "block";
        expect(_styles2.default.icon.width(props)).toBe('20px');
        expect(_styles2.default.icon.height(props)).toBe('20px');
        expect(_styles2.default.icon.display(props)).toBe('block');
    });

    it('returns the icon with a given color', function () {
        var props = { iconName: "testing" };
        expect(_styles2.default.icon.background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICMwMDA=) no-repeat center center');
        expect(_styles2.default.icon['&:hover'].background(props)).toBe(undefined);
        props.colors = ['#f00'];props.hover = ['#00f'];
        expect(_styles2.default.icon.background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmMDA=) no-repeat center center');
        expect(_styles2.default.icon['&:hover'].background(props)).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICMwMGY=) no-repeat center center');
    });
});