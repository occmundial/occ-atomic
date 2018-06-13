'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
    var classes = _ref.classes,
        onClick = _ref.onClick,
        selected = _ref.selected,
        page = _ref.page;
    return _react2.default.createElement(
        'li',
        { className: '' + classes.li + (selected ? ' ' + classes.active : ''), tabIndex: '0', onClick: onClick },
        page
    );
};

Page.propTypes = {
    classes: _propTypes2.default.object,
    onClick: _propTypes2.default.func,
    selected: _propTypes2.default.bool,
    page: _propTypes2.default.number
};

exports.default = Page;