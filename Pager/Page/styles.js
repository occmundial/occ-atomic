'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _li;

var _colors = require('../../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
    li: (_li = {
        display: 'inline-block',
        cursor: 'pointer',
        padding: '2px 11px',
        marginLeft: '4px',
        marginRight: '4px',
        borderRadius: '13px'
    }, _defineProperty(_li, 'cursor', 'pointer'), _defineProperty(_li, 'transition', '0.3s all'), _defineProperty(_li, 'outline', '0'), _defineProperty(_li, '&:hover', {
        background: '#ECECEE'
    }), _li),
    active: {
        background: _colors2.default.blue + ' !important',
        color: _colors2.default.white
    }
};