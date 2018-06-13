'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (ComposedComponent) {
    var WindowSize = function (_Component) {
        _inherits(WindowSize, _Component);

        function WindowSize(props) {
            _classCallCheck(this, WindowSize);

            var _this = _possibleConstructorReturn(this, (WindowSize.__proto__ || Object.getPrototypeOf(WindowSize)).call(this, props));

            _this.state = { size: 'sm' };
            _this.getDimensions = _this.getDimensions.bind(_this);
            return _this;
        }

        _createClass(WindowSize, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                window.addEventListener("resize", this.getDimensions);
                this.getDimensions();
            }
        }, {
            key: 'getDimensions',
            value: function getDimensions() {
                var winWidth = window.innerWidth;
                this.setState({
                    size: winWidth < _grid2.default.sm ? 'xs' : winWidth < _grid2.default.md ? 'sm' : winWidth < _grid2.default.lg ? 'md' : 'lg'
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var size = this.state.size;

                return _react2.default.createElement(ComposedComponent, _extends({}, this.props, { size: size }));
            }
        }]);

        return WindowSize;
    }(_react.Component);

    return WindowSize;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _grid = require('../../subatomic/grid');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }