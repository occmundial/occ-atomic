'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** A simple component to display the Sight logo. */
var SightLogo = function SightLogo(_ref) {
    var classes = _ref.classes,
        style = _ref.style,
        className = _ref.className,
        id = _ref.id;
    return _react2.default.createElement(
        'div',
        { className: '' + classes.container + (className ? ' ' + className : ''), id: id, style: style },
        _react2.default.createElement('i', { className: classes.logo })
    );
};

SightLogo.propTypes = {
    classes: _propTypes2.default.object,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = SightLogo;