'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Break = function Break(_ref) {
    var classes = _ref.classes,
        label = _ref.label;
    return _react2.default.createElement(
        'li',
        { className: classes.li },
        label
    );
};

Break.propTypes = {
    classes: _propTypes2.default.object,
    label: _propTypes2.default.string
};

exports.default = Break;