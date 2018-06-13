'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

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

describe("Container", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Container2.default, { classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a regular container', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Container2.default, { classes: classes }));
        expect(wrapper.find('div').prop('className')).toEqual('con');
    });

    it('renders a fluid container', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Container2.default, { classes: classes, fluid: true }));
        expect(wrapper.find('div').prop('className')).toEqual('conFluid');
    });
});

describe("ContainerJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Container styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});