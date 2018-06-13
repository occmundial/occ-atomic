'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

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

describe("Header", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, { classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the shadow at the right place', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, { classes: classes }));
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
        wrapper.update();
        expect(wrapper.find('.master').hasClass('shadow')).toBe(true);
        expect(wrapper.find('.separate .shadow').length).toBe(0);
        wrapper.setState({ shadow: false });
        expect(wrapper.find('.master').hasClass('shadow')).toBe(false);
        expect(wrapper.find('.separate .shadow').length).toBe(1);
    });

    it('shows and hides the logo', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, { classes: classes, logo: 'Logo' }));
        global.innerWidth = 1200;
        global.dispatchEvent(new Event('resize'));
        expect(wrapper.find('.content').text()).toBe('Logo');
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
        expect(wrapper.find('.content').text()).toBe('');
    });

    it('shows and hides the title', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, { classes: classes, title: 'Title' }));
        global.innerWidth = 1200;
        global.dispatchEvent(new Event('resize'));
        expect(wrapper.find('.content').text()).toBe('');
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
        expect(wrapper.find('.content').text()).toBe('Title');
    });

    it('renders the message icon', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, { classes: classes, messagesIcon: { active: true, id: 'messagesIcon', href: '#' } }));
        expect(wrapper.find('#messagesIcon').at(0).length).toBe(1);
        wrapper.setProps({ messagesIcon: {} });
        expect(wrapper.find('#messagesIcon').at(0).length).toBe(0);
    });

    it('renders the menu', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, { classes: classes, menu: 'Menu' }));
        expect(wrapper.find('.user').text()).toBe('Menu');
    });

    it('renders the nav menu', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, { classes: classes, nav: 'Nav' }));
        global.innerWidth = 1200;
        global.dispatchEvent(new Event('resize'));
        wrapper.update();
        expect(wrapper.find('.content').text()).toBe('Nav');
        expect(wrapper.find('.separate').length).toBe(0);
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
        wrapper.update();
        expect(wrapper.find('.content').text()).toBe('');
        expect(wrapper.find('.separate').length).toBe(1);
        expect(wrapper.find('.separate').text()).toBe('Nav');
    });
});

describe("HeaderJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Header styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});