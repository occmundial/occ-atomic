'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Visible = require('./Visible');

var _Visible2 = _interopRequireDefault(_Visible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Visible", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Visible2.default,
            { xs: true },
            _react2.default.createElement(
                'div',
                null,
                'Text'
            )
        ));
        expect(wrapper).toMatchSnapshot();
    });

    it('shows content in xs', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Visible2.default,
            { xs: true },
            _react2.default.createElement(
                'div',
                null,
                'Text'
            )
        ));
        wrapper.setState({ width: 1200 });
        expect(wrapper.find('div').length).toBe(0);
        wrapper.setState({ width: 500 });
        expect(wrapper.find('div').text()).toEqual('Text');
    });
});