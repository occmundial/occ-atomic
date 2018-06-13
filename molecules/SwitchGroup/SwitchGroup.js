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

var _Flexbox = require('../../elements/layout/Flexbox');

var _Flexbox2 = _interopRequireDefault(_Flexbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchGroup = function (_React$Component) {
    _inherits(SwitchGroup, _React$Component);

    function SwitchGroup(props) {
        _classCallCheck(this, SwitchGroup);

        var _this = _possibleConstructorReturn(this, (SwitchGroup.__proto__ || Object.getPrototypeOf(SwitchGroup)).call(this, props));

        _this.state = {
            selected: props.selected ? props.selected : 0
        };
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(SwitchGroup, [{
        key: 'onClick',
        value: function onClick(button, index) {
            var onClick = this.props.onClick;

            this.setState({
                selected: index
            });
            if (onClick) onClick(button, index);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var selected = this.state.selected;
            var _props = this.props,
                classes = _props.classes,
                buttons = _props.buttons;

            return _react2.default.createElement(
                _Flexbox2.default,
                { display: 'flex' },
                buttons.map(function (button, index) {
                    return _react2.default.createElement(
                        'button',
                        {
                            key: button.text,
                            className: '' + classes.button + (selected == index ? ' ' + classes.active : ''),
                            onClick: function onClick() {
                                _this2.onClick(button, index);
                            } },
                        button.text,
                        button.sec ? _react2.default.createElement(
                            'span',
                            { className: classes.sec },
                            button.sec
                        ) : ''
                    );
                })
            );
        }
    }]);

    return SwitchGroup;
}(_react2.default.Component);

SwitchGroup.propTypes = {
    classes: _propTypes2.default.object,
    buttons: _propTypes2.default.array,
    onClick: _propTypes2.default.func,
    selected: _propTypes2.default.number
};

exports.default = SwitchGroup;