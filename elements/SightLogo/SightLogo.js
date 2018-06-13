'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SightLogo = function SightLogo(_ref) {
    var classes = _ref.classes,
        style = _ref.style;
    return _react2.default.createElement(
        'div',
        { className: classes.container, style: style },
        _react2.default.createElement('i', { className: classes.logo })
    );
};

SightLogo.propTypes = {
    classes: _propTypes2.default.object,
    style: _propTypes2.default.object
};

exports.default = SightLogo;