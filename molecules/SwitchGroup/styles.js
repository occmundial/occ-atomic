'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    button: {
        boxSizing: 'border-box',
        flex: '1',
        position: 'relative',
        background: 'transparent',
        fontFamily: _fonts2.default.body,
        fontSize: '13px',
        color: _colors2.default.black,
        border: '1px solid ' + _colors2.default.grey1,
        height: '30px',
        zIndex: '0',
        padding: '0 10px',
        cursor: 'pointer',
        transition: '0.3s all',
        outline: '0',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '&:not(:first-child)': {
            marginLeft: '-1px'
        },
        '&:first-child': {
            borderRadius: '15px 0 0 15px'
        },
        '&:last-child': {
            borderRadius: '0 15px 15px 0'
        },
        '&:hover': {
            borderColor: _colors2.default.blue,
            zIndex: '1'
        }
    },
    active: {
        borderColor: _colors2.default.blue,
        zIndex: '1',
        background: _colors2.default.blue,
        color: _colors2.default.white
    },
    sec: {
        color: _colors2.default.grey1,
        marginLeft: '3px'
    }
};