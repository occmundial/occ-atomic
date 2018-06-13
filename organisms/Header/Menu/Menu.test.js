'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

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

var buttons = [{ id: 'item1', href: '#', label: 'Item 1' }, { id: 'item2', href: '#', label: 'Item 2' }, { id: 'item3', href: '#', label: 'Item 3' }, "separator", { id: 'item4', href: '#', label: 'Item 4', type: 'signOut' }];

describe("Menu", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Menu2.default, { classes: classes, buttons: buttons }));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the label', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Menu2.default, { classes: classes, label: 'Menu', buttons: buttons }));
        expect(wrapper.find('.label').text()).toBe('Menu');
    });

    it('toggles the menu', function () {
        var propagation = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Menu2.default, { classes: classes, buttons: buttons }));
        expect(wrapper.find('.dropdownMenu').hasClass('dropdownMenuOpen')).toBe(false);
        wrapper.find('.btnMenu').simulate('click', { stopPropagation: propagation });
        expect(wrapper.find('.dropdownMenu').hasClass('dropdownMenuOpen')).toBe(true);
    });

    it('renders all the items', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Menu2.default, { classes: classes, buttons: buttons }));
        expect(wrapper.find('li').length).toBe(5);
    });

    it('renders a separator', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Menu2.default, { classes: classes, buttons: buttons }));
        expect(wrapper.find('li').at(3).hasClass('separator')).toBe(true);
    });

    it('renders a button to sign out', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Menu2.default, { classes: classes, buttons: buttons }));
        expect(wrapper.find('li').at(4).find('a').hasClass('signOut')).toBe(true);
    });
});

describe("MenuJSS", function () {

    it('matches the snapshot', function () {
        var buttons = [{
            id: 'item1',
            href: 'http://occ.com.mx',
            label: 'Item 1'
        }];
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { buttons: buttons }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Menu styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});