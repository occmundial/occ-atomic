'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Check = require('./Check');

var _Check2 = _interopRequireDefault(_Check);

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

describe("Check", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Check2.default, { classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('has the right state', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Check2.default, { classes: classes }));
        expect(wrapper.prop('className')).toEqual('cont');
        wrapper.setState({ value: true });
        expect(wrapper.prop('className')).toEqual('cont active');
    });

    it('is disabled', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Check2.default, { classes: classes, disabled: true }));
        expect(wrapper.prop('className')).toEqual('cont disabled');
    });

    it('toggles the value on click', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Check2.default, { classes: classes }));
        expect(wrapper.prop('className')).toEqual('cont');
        wrapper.simulate('click');
        expect(wrapper.prop('className')).toEqual('cont active');
    });

    it('calls onChange function', function () {
        var onChange = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Check2.default, { classes: classes, onChange: onChange }));
        wrapper.simulate('click');
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('shows the label and right-label', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Check2.default, { classes: classes, label: 'Label content', right: 'Right' }));
        expect(wrapper.find('.label').length).toBe(1);
        expect(wrapper.find('.label').text()).toEqual('Label content');
        expect(wrapper.find('.right').length).toBe(1);
        expect(wrapper.find('.right').text()).toEqual('Right');
    });
});

describe("CheckJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Check styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});