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

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _colors = require('../../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                active = _props.active,
                navigate = _props.navigate,
                buttons = _props.buttons;

            return _react2.default.createElement(
                'ul',
                { className: classes.menu },
                buttons.map(function (button) {
                    return _react2.default.createElement(
                        'li',
                        { key: button.id, onClick: navigate, className: classes.listItem + ' ' + (active == button.id ? classes.activeItem : ''), id: button.id },
                        _react2.default.createElement(_Icon2.default, { iconName: button.icon, colors: active == button.id ? [_colors2.default.white] : undefined, className: classes.icon }),
                        _react2.default.createElement(
                            'a',
                            { className: classes.listAnchor },
                            button.label
                        )
                    );
                })
            );
        }
    }]);

    return Nav;
}(_react2.default.Component);

Nav.propTypes = {
    classes: _propTypes2.default.object,
    active: _propTypes2.default.string,
    navigate: _propTypes2.default.func,
    buttons: _propTypes2.default.array
};

exports.default = Nav;