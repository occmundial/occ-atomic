'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

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

describe("Label", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Label2.default,
            { classes: classes },
            'Label'
        ));
        expect(wrapper).toMatchSnapshot();
    });

    it('shows the children content', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Label2.default,
            { classes: classes },
            'Label'
        ));
        expect(wrapper.text()).toEqual('Label');
    });

    it('calls onClick function', function () {
        var onClick = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Label2.default,
            { classes: classes, onClick: onClick },
            'Label'
        ));
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('calls onClose function', function () {
        var onClose = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Label2.default,
            { classes: classes, onClose: onClose },
            'Label'
        ));
        wrapper.find('span').simulate('click', {
            stopPropagation: function stopPropagation() {}
        });
        expect(onClose.mock.calls.length).toBe(1);
    });

    it('has the right theme', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Label2.default,
            { classes: classes, theme: 'default' },
            'Label'
        ));
        expect(wrapper.prop('className')).toEqual('label default');
    });
});

describe("LabelJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _index2.default,
            null,
            'Label'
        ));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Label styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});