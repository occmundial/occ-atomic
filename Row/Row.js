'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Use the Row component inside a Container. To make your grid as complex as you need, you can nest a Column inside a Row and then nest a Row inside a Column to start a new grid. */
var Row = function Row(_ref) {
    var classes = _ref.classes,
        children = _ref.children,
        className = _ref.className,
        id = _ref.id,
        style = _ref.style;
    return _react2.default.createElement(
        'div',
        { className: '' + classes.row + (className ? ' ' + className : ''), style: style, id: id },
        children
    );
};

Row.propTypes = {
    classes: _propTypes2.default.object,
    children: _propTypes2.default.node,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Row;