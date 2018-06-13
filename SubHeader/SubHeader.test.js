'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SubHeader = require('./SubHeader');

var _SubHeader2 = _interopRequireDefault(_SubHeader);

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

describe("SubHeader", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SubHeader2.default, { classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the SubHeader with the right theme', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SubHeader2.default, { classes: classes }));
        expect(wrapper.find('.subHeader').hasClass('blue')).toEqual(true);
        wrapper.setProps({ theme: 'white' });
        expect(wrapper.find('.subHeader').hasClass('white')).toEqual(true);
    });

    it('renders the subHeader as fixed', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SubHeader2.default, { classes: classes }));
        expect(wrapper.find('.subHeader').hasClass('fixed')).toEqual(false);
        wrapper.setProps({ fixed: true });
        expect(wrapper.find('.subHeader').hasClass('fixed')).toEqual(true);
    });

    it('renders the Left content', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_SubHeader2.default, { classes: classes, left: 'Left content' }));
        expect(wrapper.find('.left').first().text()).toEqual('Left content');
    });

    it('renders the Right content', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_SubHeader2.default, { classes: classes, right: 'Right content' }));
        expect(wrapper.find('.right').first().text()).toEqual('Right content');
    });

    it('renders the Center content', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_SubHeader2.default, { classes: classes, center: 'Center content' }));
        expect(wrapper.find('.center').first().text()).toEqual('Center content');
    });
});

describe("SubHeaderJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("SubHeader styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});