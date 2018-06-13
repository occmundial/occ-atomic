'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** The container should be used as the main content container. You can't use a container inside of another container, it will brake your grid. */
var Container = function Container(_ref) {
    var classes = _ref.classes,
        children = _ref.children,
        fluid = _ref.fluid,
        className = _ref.className,
        id = _ref.id,
        style = _ref.style;
    return _react2.default.createElement(
        'div',
        { className: '' + (fluid ? classes.conFluid : classes.con) + (className ? ' ' + className : ''), style: style, id: id },
        children
    );
};

Container.propTypes = {
    classes: _propTypes2.default.object,
    children: _propTypes2.default.node,
    /** By default, the Container component has a specified width for any screen size. The fluid property allows the Container to extend to a 100% width. */
    fluid: _propTypes2.default.bool,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Container;