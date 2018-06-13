'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Hidden = require('./Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Hidden", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Hidden2.default,
            { xs: true },
            _react2.default.createElement(
                'div',
                null,
                'Text'
            )
        ));
        expect(wrapper).toMatchSnapshot();
    });

    it('hides content in xs', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Hidden2.default,
            { xs: true },
            _react2.default.createElement(
                'div',
                null,
                'Text'
            )
        ));
        wrapper.setState({ width: 1200 });
        expect(wrapper.find('div').text()).toEqual('Text');
        wrapper.setState({ width: 500 });
        expect(wrapper.find('div').length).toBe(0);
    });
});