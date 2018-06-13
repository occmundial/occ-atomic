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

var _Flexbox = require('../Flexbox');

var _Flexbox2 = _interopRequireDefault(_Flexbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Component to display a Header with content to the left, right and center. */
var SubHeader = function (_React$Component) {
    _inherits(SubHeader, _React$Component);

    function SubHeader() {
        _classCallCheck(this, SubHeader);

        return _possibleConstructorReturn(this, (SubHeader.__proto__ || Object.getPrototypeOf(SubHeader)).apply(this, arguments));
    }

    _createClass(SubHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                theme = _props.theme,
                fixed = _props.fixed,
                left = _props.left,
                right = _props.right,
                center = _props.center;

            return _react2.default.createElement(
                'div',
                { className: classes.wrapper },
                _react2.default.createElement(
                    'div',
                    { className: '' + classes.subHeader + (theme ? ' ' + classes[theme] : classes.blue) + (fixed ? ' ' + classes.fixed : '') },
                    left && _react2.default.createElement(
                        _Flexbox2.default,
                        { display: 'flex', alignItems: 'center', className: classes.left },
                        left
                    ),
                    right && _react2.default.createElement(
                        _Flexbox2.default,
                        { display: 'flex', alignItems: 'center', className: classes.right },
                        right
                    ),
                    center && _react2.default.createElement(
                        _Flexbox2.default,
                        { display: 'flex', alignItems: 'center', className: classes.center },
                        center
                    )
                )
            );
        }
    }]);

    return SubHeader;
}(_react2.default.Component);

SubHeader.defaultProps = {
    fixed: false,
    theme: "blue"
};

SubHeader.propTypes = {
    classes: _propTypes2.default.object,
    /** The theme to use in the SubHeader. The options are blue and white. */
    theme: _propTypes2.default.string,
    /** This property fixes the SubHeader to the top of the screen. */
    fixed: _propTypes2.default.bool,
    /** Content to display on the left. */
    left: _propTypes2.default.node,
    /** Content to display on the right. */
    right: _propTypes2.default.node,
    /** Content to display on the center. */
    center: _propTypes2.default.node
};

exports.default = SubHeader;