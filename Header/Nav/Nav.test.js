'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

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

var buttons = [{ id: 'item1', icon: 'dashboard', label: 'Item 1' }, { id: 'item2', icon: 'publications', label: 'Item 2' }, { id: 'item3', icon: 'talent', label: 'Item 3' }];

describe("Nav", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Nav2.default, { classes: classes, buttons: buttons }));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders all the buttons', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Nav2.default, { classes: classes, buttons: buttons }));
        expect(wrapper.find('li').length).toBe(3);
    });

    it('calls the onClick function', function () {
        var onClick = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Nav2.default, { classes: classes, navigate: onClick, buttons: buttons }));
        wrapper.find('li').at(1).simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('sets an active button', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Nav2.default, { classes: classes, active: 'item1', buttons: buttons }));
        expect(wrapper.find('li').at(0).hasClass('activeItem')).toBe(true);
    });
});

describe("NavJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { buttons: buttons }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Nav styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});