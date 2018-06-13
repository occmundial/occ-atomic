'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _WindowSize = require('./WindowSize');

var _WindowSize2 = _interopRequireDefault(_WindowSize);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("WindowSize", function () {

    it('matches the snapshot', function () {

        var Component = (0, _WindowSize2.default)(_react2.default.createElement(
            _Button2.default,
            null,
            'Button'
        ));

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(Component, null));
        expect(wrapper).toMatchSnapshot();
    });

    it('sets the size as medium', function () {

        var Component = (0, _WindowSize2.default)(_react2.default.createElement(
            _Button2.default,
            null,
            'Button'
        ));

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(Component, null));
        expect(wrapper.prop('size')).toEqual('md');
    });
});