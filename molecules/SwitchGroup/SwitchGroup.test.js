'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SwitchGroup = require('./SwitchGroup');

var _SwitchGroup2 = _interopRequireDefault(_SwitchGroup);

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

var buttons = [{
    text: 'Option 1',
    sec: '(10)'
}, {
    text: 'Option 2',
    sec: '(5)'
}];

describe("SwitchGroup", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SwitchGroup2.default, { buttons: buttons, classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('calls the onClick function', function () {
        var onClick = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SwitchGroup2.default, { buttons: buttons, onClick: onClick, classes: classes }));
        wrapper.find('button').first().simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('changes the state with the selected button', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SwitchGroup2.default, { buttons: buttons, classes: classes }));
        wrapper.setState({ selected: 0 });
        expect(wrapper.state('selected')).toBe(0);
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.state('selected')).toBe(1);
    });

    it('sets a default button as active', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SwitchGroup2.default, { buttons: buttons, classes: classes }));
        wrapper.setState({ selected: 1 });
        expect(wrapper.find('button').at(1).prop('className')).toEqual('button active');
        expect(wrapper.find('button').at(0).prop('className')).toEqual('button');
    });

    it('shows the button text and secondary text', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SwitchGroup2.default, { buttons: buttons, classes: classes }));
        expect(wrapper.find('button').at(0).text()).toEqual('Option 1(10)');
        expect(wrapper.find('button').at(1).text()).toEqual('Option 2(5)');
    });
});

describe("SwitchGroupJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { buttons: buttons }));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("SwitchGroup styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});