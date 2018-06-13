'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grid = require('../subatomic/grid');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Shows the content on the specified window size. */
var Visible = function (_React$Component) {
    _inherits(Visible, _React$Component);

    function Visible(props) {
        _classCallCheck(this, Visible);

        var _this = _possibleConstructorReturn(this, (Visible.__proto__ || Object.getPrototypeOf(Visible)).call(this, props));

        _this.state = {
            width: 0
        };
        _this.getDimensions = _this.getDimensions.bind(_this);
        return _this;
    }

    _createClass(Visible, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getDimensions();
            window.addEventListener("resize", this.getDimensions);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.getDimensions();
            window.removeEventListener("resize", this.getDimensions);
        }
    }, {
        key: 'getDimensions',
        value: function getDimensions() {
            var width = window.innerWidth;
            this.setState({
                width: width
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var width = this.state.width;
            var _props = this.props,
                children = _props.children,
                xs = _props.xs,
                sm = _props.sm,
                md = _props.md,
                lg = _props.lg;

            if (width >= _grid2.default.xs && width < _grid2.default.sm && xs || width >= _grid2.default.sm && width < _grid2.default.md && sm || width >= _grid2.default.md && width < _grid2.default.lg && md || width >= _grid2.default.lg && lg) {
                return _react2.default.createElement(
                    'span',
                    null,
                    children
                );
            } else {
                return _react2.default.createElement('span', null);
            }
        }
    }]);

    return Visible;
}(_react2.default.Component);

Visible.propTypes = {
    children: _propTypes2.default.node,
    /** Apply in extra small window size. */
    xs: _propTypes2.default.bool,
    /** Apply in small window size. */
    sm: _propTypes2.default.bool,
    /** Apply in medium window size. */
    md: _propTypes2.default.bool,
    /** Apply in large window size. */
    lg: _propTypes2.default.bool
};

exports.default = Visible;