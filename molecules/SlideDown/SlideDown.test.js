'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SlideDown = require('./SlideDown');

var _SlideDown2 = _interopRequireDefault(_SlideDown);

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

describe("SlideDown", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SlideDown2.default, { classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the title', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_SlideDown2.default, { title: 'Title', classes: classes }));
        expect(wrapper.find('h4').text()).toEqual('Title');
    });

    it('rotates the arrow icon', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_SlideDown2.default, { expanded: true, classes: classes }));
        expect(wrapper.find('.button span').prop('style')).toEqual({ "transform": "rotate(180deg)" });
        wrapper.setState({ toggled: false });
        expect(wrapper.find('.button span').prop('style')).toEqual({ "transform": "" });
    });

    it('shows an indicator on the title', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_SlideDown2.default, { classes: classes }));
        expect(wrapper.find('h4').hasClass('dot')).toEqual(false);
        wrapper.setProps({ active: true });
        expect(wrapper.find('h4').hasClass('dot')).toEqual(true);
    });

    it('renders the child content', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _SlideDown2.default,
            { classes: classes },
            'Children content'
        ));
        expect(wrapper.find('.content').length).toBe(0);
        wrapper.setState({ expanded: true });
        expect(wrapper.find('.content').length).toBe(1);
        expect(wrapper.find('.content').text()).toEqual('Children content');
    });
});

describe("SlideDownJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("SlideDown styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});