'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

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

describe("Column", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Column2.default, { xs: { col: 12 }, classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('matches the classes', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Column2.default, { xs: { col: 6, offset: 3, push: 1, pull: 1 }, classes: classes }));
        expect(wrapper.find('div').prop('className')).toEqual('col xs6 offset-xs3 push-xs1 pull-xs1');
    });
});

describe("ColumnJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { xs: { col: 12 } }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Column styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});