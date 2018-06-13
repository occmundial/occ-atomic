'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _AvatarContent = require('./AvatarContent');

var _AvatarContent2 = _interopRequireDefault(_AvatarContent);

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

describe("AvatarContent", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AvatarContent2.default, { name: 'John Doe', classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('returns the first two capital letters of the name', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AvatarContent2.default, { name: 'John Doe', classes: classes }));
        expect(wrapper.find('.capital span').text()).toEqual('JD');
    });

    it('shows the right gender icon', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AvatarContent2.default, { gender: 'm', classes: classes }));
        expect(wrapper.find('.m').length).toBe(1);
        expect(wrapper.find('.f').length).toBe(0);
        wrapper.setProps({ gender: 'f' });
        expect(wrapper.find('.m').length).toBe(0);
        expect(wrapper.find('.f').length).toBe(1);
    });

    it('renders the photo as a background', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AvatarContent2.default, { photo: 'http://placehold.it/70x70', classes: classes }));
        expect(wrapper.find('.cont').prop('style')).toHaveProperty('background', "url('http://placehold.it/70x70') no-repeat center center / cover");
    });

    it('changes the font size', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AvatarContent2.default, { name: 'John Doe', size: 50, classes: classes }));
        var styles = wrapper.find('.capital').prop('style');
        expect(styles).toHaveProperty('fontSize', '20px');
        expect(styles).toHaveProperty('lineHeight', '50px');
    });
});

describe("AvatarContentJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { name: 'John Doe' }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("AvatarContent styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});