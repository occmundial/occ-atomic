'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Pager = require('./Pager');

var _Pager2 = _interopRequireDefault(_Pager);

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

describe("Pager", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pager2.default, { classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the prev and next buttons', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pager2.default, { classes: classes }));
        expect(wrapper.find('.prev').length).toBe(1);
        expect(wrapper.find('.prev').text()).toEqual('<Jss(Icon) /> Previous');
        expect(wrapper.find('.next').length).toBe(1);
        expect(wrapper.find('.next').text()).toEqual('Next <Jss(Icon) />');
    });

    it('changes to previous page', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pager2.default, { initialPage: 3, classes: classes }));
        expect(wrapper.state('selected')).toEqual(3);
        wrapper.find('.prev').simulate('click', { target: {} });
        expect(wrapper.state('selected')).toEqual(2);
    });

    it('changes to next page', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pager2.default, { initialPage: 3, classes: classes }));
        expect(wrapper.state('selected')).toEqual(3);
        wrapper.find('.next').simulate('click', { target: {} });
        expect(wrapper.state('selected')).toEqual(4);
    });

    it('renders the pagination', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Pager2.default, { pageCount: 3, pageRangeDisplayed: 1, marginPagesDisplayed: 1, classes: classes }));
        expect(wrapper.find('li').length).toBe(5);
    });

    it('changes to a specific page', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Pager2.default, { pageCount: 5, pageRangeDisplayed: 1, marginPagesDisplayed: 1, classes: classes }));
        expect(wrapper.state('selected')).toEqual(0);
        wrapper.find('li').at(4).simulate('click', { target: {} });
        expect(wrapper.state('selected')).toEqual(4);
    });

    it('disables the previous page button', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pager2.default, { initialPage: 0, classes: classes }));
        expect(wrapper.find('.prev').hasClass('disabled')).toEqual(true);
        wrapper.setProps({ forcePage: 5 });
        expect(wrapper.find('.prev').hasClass('disabled')).toEqual(false);
    });

    it('disables the next page button', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pager2.default, { pageCount: 5, initialPage: 4, classes: classes }));
        expect(wrapper.find('.next').hasClass('disabled')).toEqual(true);
        wrapper.setProps({ forcePage: 0 });
        expect(wrapper.find('.next').hasClass('disabled')).toEqual(false);
    });

    it('calls the onPageChange function', function () {
        var onPageChange = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pager2.default, { onPageChange: onPageChange, classes: classes }));
        wrapper.find('.next').simulate('click', { target: {} });
        expect(onPageChange.mock.calls.length).toBe(1);
    });
});

describe("PagerJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Pager styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});