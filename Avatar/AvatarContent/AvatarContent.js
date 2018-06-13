'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var capitalLetter = function capitalLetter(name) {
    if (name) {
        var capitals = name.toUpperCase().split(" ");
        capitals = capitals.filter(Boolean);
        return _react2.default.createElement(
            'span',
            null,
            capitals[0] ? capitals[0].charAt(0) : 'N',
            capitals[1] ? capitals[1].charAt(0) : 'O'
        );
    }
    return "";
};

var AvatarContent = function AvatarContent(_ref) {
    var classes = _ref.classes,
        photo = _ref.photo,
        gender = _ref.gender,
        name = _ref.name,
        size = _ref.size;
    return _react2.default.createElement(
        'div',
        { className: classes.wrap },
        gender && _react2.default.createElement('div', { className: classes.cont + ' ' + classes[gender] }),
        !gender && name && _react2.default.createElement(
            'div',
            { className: classes.cont + ' ' + classes.capital, style: size ? { fontSize: size * 0.4 + 'px', lineHeight: size + 'px' } : {} },
            capitalLetter(name)
        ),
        photo && _react2.default.createElement('div', { className: classes.cont, style: { background: 'url(\'' + photo + '\') no-repeat center center / cover' } })
    );
};

AvatarContent.propTypes = {
    classes: _propTypes2.default.object,
    photo: _propTypes2.default.string,
    gender: _propTypes2.default.string,
    name: _propTypes2.default.string,
    size: _propTypes2.default.number
};

exports.default = AvatarContent;