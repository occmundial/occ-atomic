'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AvatarContent = require('./AvatarContent');

var _AvatarContent2 = _interopRequireDefault(_AvatarContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** The Avatar component shows a rounded avatar with a profile picture, a gender icon or the first two capital letters of a name. */
var Avatar = function (_React$Component) {
    _inherits(Avatar, _React$Component);

    function Avatar() {
        _classCallCheck(this, Avatar);

        return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
    }

    _createClass(Avatar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                photo = _props.photo,
                gender = _props.gender,
                name = _props.name,
                size = _props.size,
                id = _props.id,
                className = _props.className,
                style = _props.style;

            return _react2.default.createElement(
                'div',
                { id: id, className: '' + classes.circle + (className ? ' ' + className : ''), style: style },
                _react2.default.createElement(_AvatarContent2.default, { photo: photo, gender: gender, name: name, size: size })
            );
        }
    }]);

    return Avatar;
}(_react2.default.Component);

Avatar.defaultProps = {
    size: 70
};

Avatar.propTypes = {
    classes: _propTypes2.default.object,
    /** A url to show a photo as the avatar. */
    photo: _propTypes2.default.string,
    /** Use the values 'm' or 'f' to show a default avatar with an icon representing the gender. */
    gender: _propTypes2.default.string,
    /** Pass a name to show two initials. */
    name: _propTypes2.default.string,
    /** The size of the avatar. */
    size: _propTypes2.default.number,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Avatar;