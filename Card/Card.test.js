'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

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

describe("Card", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Card2.default, { classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('has no padding', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Card2.default, { classes: classes, noPadding: true }));
        expect(wrapper.hasClass('cardNoPadding')).toBe(true);
    });

    it('has the right level of shadow', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Card2.default, { classes: classes, shadow: 3 }));
        expect(wrapper.prop('className')).toEqual('card shadow3');
    });
});

describe("CardJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Card styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});