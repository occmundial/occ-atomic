'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TourTip = function (_React$Component) {
    _inherits(TourTip, _React$Component);

    function TourTip(props) {
        _classCallCheck(this, TourTip);

        var _this = _possibleConstructorReturn(this, (TourTip.__proto__ || Object.getPrototypeOf(TourTip)).call(this, props));

        _this.state = {
            position: {}
        };
        _this.attachToTarget = _this.attachToTarget.bind(_this);
        return _this;
    }

    _createClass(TourTip, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var setPosition = function setPosition() {
                _this2.setState({
                    position: _this2.attachToTarget()
                });
            };
            (0, _jquery2.default)(document).ready(setPosition);
            window.addEventListener("resize", setPosition);
        }
    }, {
        key: 'attachToTarget',
        value: function attachToTarget() {
            var _props = this.props,
                target = _props.target,
                direction = _props.direction,
                align = _props.align;

            var item = document.getElementById(target);
            var itemRect = item.getBoundingClientRect();
            var offsetLeft = item.offsetLeft;
            var offsetTop = item.offsetTop;
            var tip = _reactDom2.default.findDOMNode(this);
            var tipRect = tip.getBoundingClientRect();
            var position = {};
            if (direction == "left") {
                position.left = offsetLeft - tipRect.width - 5;
                if (align == "top") position.top = offsetTop;else if (align == "bottom") position.top = offsetTop + itemRect.height - tipRect.height;else position.top = offsetTop + itemRect.height / 2 - tipRect.height / 2;
            } else if (direction == "right") {
                position.left = offsetLeft + itemRect.width + 5;
                if (align == "top") position.top = offsetTop;else if (align == "bottom") position.top = offsetTop + itemRect.height - tipRect.height;else position.top = offsetTop + itemRect.height / 2 - tipRect.height / 2;
            } else if (direction == "up") {
                if (align == "left") position.left = offsetLeft;else if (align == "right") position.left = offsetLeft + itemRect.width - tipRect.width;else position.left = offsetLeft + itemRect.width / 2 - tipRect.width / 2;
                position.top = offsetTop - tipRect.height - 5;
            } else if (direction == "down") {
                if (align == "left") position.left = offsetLeft;else if (align == "right") position.left = offsetLeft + itemRect.width - tipRect.width;else position.left = offsetLeft + itemRect.width / 2 - tipRect.width / 2;
                position.top = offsetTop + itemRect.height + 5;
            }
            return position;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var position = this.state.position;
            var _props2 = this.props,
                classes = _props2.classes,
                children = _props2.children,
                direction = _props2.direction,
                align = _props2.align;

            return _react2.default.createElement(
                'div',
                { ref: function ref(_ref) {
                        _this3.self = _ref;
                    }, className: classes.tip + ' ' + classes[direction], style: position },
                children
            );
        }
    }]);

    return TourTip;
}(_react2.default.Component);

TourTip.defaultProps = {
    direction: "left",
    align: "center"
};

TourTip.propTypes = {
    classes: _propTypes2.default.object,
    children: _propTypes2.default.node,
    direction: _propTypes2.default.string,
    align: _propTypes2.default.string,
    target: _propTypes2.default.string
};

exports.default = TourTip;