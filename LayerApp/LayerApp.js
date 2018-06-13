'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _SubHeader = require('../SubHeader');

var _SubHeader2 = _interopRequireDefault(_SubHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* The LayerApp component is a wrapper for the SubHeader component that also includes a content block.
* It is meant to be used as an overlay screen, in front of the main content.
* There are no examples included, since the LayerApp component occupies the whole screen in first plane.
*/
var LayerApp = function (_React$Component) {
    _inherits(LayerApp, _React$Component);

    function LayerApp() {
        _classCallCheck(this, LayerApp);

        return _possibleConstructorReturn(this, (LayerApp.__proto__ || Object.getPrototypeOf(LayerApp)).apply(this, arguments));
    }

    _createClass(LayerApp, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                children = _props.children,
                theme = _props.theme,
                fixed = _props.fixed,
                left = _props.left,
                right = _props.right,
                center = _props.center;

            return _react2.default.createElement(
                'div',
                { className: classes.layerApp + ' ' + classes[theme] },
                _react2.default.createElement(_SubHeader2.default, { theme: theme, left: left, right: right, center: center, fixed: fixed }),
                _react2.default.createElement(
                    'div',
                    { className: classes.content },
                    children
                )
            );
        }
    }]);

    return LayerApp;
}(_react2.default.Component);

LayerApp.defaultProps = {
    fixed: false,
    theme: "blue"
};

LayerApp.propTypes = {
    classes: _propTypes2.default.object,
    children: _propTypes2.default.node,
    /** The theme to use in the LayerApp. The options are blue and white. */
    theme: _propTypes2.default.string,
    /** This property fixes the LayerApp's header to the top of the screen. */
    fixed: _propTypes2.default.bool,
    /** Content to display on the left of the header. */
    left: _propTypes2.default.node,
    /** Content to display on the right of the header. */
    right: _propTypes2.default.node,
    /** Content to display on the center of the header. */
    center: _propTypes2.default.node
};

exports.default = LayerApp;