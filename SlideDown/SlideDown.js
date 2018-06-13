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

var _Title = require('../Title');

var _Title2 = _interopRequireDefault(_Title);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Flexbox = require('../Flexbox');

var _Flexbox2 = _interopRequireDefault(_Flexbox);

var _colors = require('../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Component to create an accordion section. The content will be hidden by default, and shown after click. */
var SlideDown = function (_React$Component) {
    _inherits(SlideDown, _React$Component);

    function SlideDown(props) {
        _classCallCheck(this, SlideDown);

        var _this = _possibleConstructorReturn(this, (SlideDown.__proto__ || Object.getPrototypeOf(SlideDown)).call(this, props));

        _this.state = {
            expanded: _this.props.expanded,
            toggled: _this.props.expanded
        };
        _this.toggleContent = _this.toggleContent.bind(_this);
        return _this;
    }

    _createClass(SlideDown, [{
        key: 'toggleContent',
        value: function toggleContent() {
            var _this2 = this;

            if (!this.state.expanded) {
                this.setState({
                    expanded: true
                });
                setTimeout(function () {
                    _this2.setState({
                        toggled: true
                    });
                }, 0);
            } else {
                this.setState({
                    toggled: false
                });
                setTimeout(function () {
                    _this2.setState({
                        expanded: false
                    });
                }, 300);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                expanded = _state.expanded,
                toggled = _state.toggled;
            var _props = this.props,
                classes = _props.classes,
                title = _props.title,
                children = _props.children,
                active = _props.active;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: classes.button, onClick: this.toggleContent },
                    _react2.default.createElement(
                        _Flexbox2.default,
                        { display: 'flex', justifyContent: 'between', alignItems: 'center' },
                        _react2.default.createElement(
                            _Title2.default,
                            { h: 4, className: active ? classes.dot : '' },
                            title
                        ),
                        _react2.default.createElement(_Icon2.default, { iconName: 'arrowDown', colors: [_colors2.default.grey6], style: { transform: toggled ? 'rotate(180deg)' : '' } })
                    )
                ),
                expanded && _react2.default.createElement(
                    'div',
                    { className: classes.content + ' ' + (toggled ? classes.show : classes.hide) },
                    children
                )
            );
        }
    }]);

    return SlideDown;
}(_react2.default.Component);

SlideDown.defaultProps = {
    expanded: false
};

SlideDown.propTypes = {
    classes: _propTypes2.default.object,
    children: _propTypes2.default.node,
    /** Title of the tab. */
    title: _propTypes2.default.string,
    /** Set this as true to show the content by default. */
    expanded: _propTypes2.default.bool,
    /** This property will display a blue mark on the tab, in case you need to specify that something in the content is relevant to check. */
    active: _propTypes2.default.bool
};

exports.default = SlideDown;