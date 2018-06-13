'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

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

var buttons = [{ id: 'item1', href: '#', label: 'Item 1' }, { id: 'item2', href: '#', label: 'Item 2' }, { id: 'item3', label: 'Item 3',
    sub: { id: 'item3sub',
        items: [{ id: 'subitem1', href: '#', label: 'Sub-item 1' }, { id: 'subitem2', href: '#', label: 'Sub-item 2' }]
    }
}, { id: 'item4', href: '#', label: 'Item 4' }];

describe("Footer", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Footer2.default, { buttons: buttons, classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders all the items', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Footer2.default, { buttons: buttons, classes: classes }));
        expect(wrapper.find('.listElement').length).toBe(4);
    });

    it('renders a sub-menu', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Footer2.default, { buttons: buttons, classes: classes }));
        expect(wrapper.find('#item3sub').length).toBe(1);
        expect(wrapper.find('#item3sub li').length).toBe(2);
    });

    it('shows and hides the sub-menu', function () {
        // Problemas para testear jquery
    });
});

describe("FooterJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { buttons: buttons }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Footer styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});