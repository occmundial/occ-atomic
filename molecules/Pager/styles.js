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
    pager: {
        listStyle: 'none',
        paddingLeft: '0',
        fontFamily: _fonts2.default.body,
        color: _colors2.default.grey7,
        fontSize: '13px'
    },
    btn: {
        display: 'inline-block',
        fontFamily: _fonts2.default.body,
        border: '1px solid ' + _colors2.default.grey1,
        borderRadius: '5px',
        padding: '3px 13px',
        transition: '0.3s all',
        cursor: 'pointer',
        outline: '0',
        '& span': {
            marginBottom: '-2px'
        },
        '&:hover': {
            background: '#ECECEE',
            borderColor: '#ECECEE'
        }
    },
    prev: {
        marginRight: '15px',
        '& span': {
            transform: 'rotate(90deg)'
        }
    },
    next: {
        marginLeft: '15px',
        '& span': {
            transform: 'rotate(-90deg)'
        }
    },
    disabled: {
        pointerEvents: 'none',
        opacity: '0.4'
    }
};