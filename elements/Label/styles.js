'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _icons = require('../../subatomic/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    label: {
        boxSizing: 'border-box',
        fontFamily: _fonts2.default.body,
        fontSize: '11px',
        fontWeight: 'normal',
        display: 'inline-block',
        height: '22px',
        lineHeight: '20px',
        textAlign: 'center',
        borderRadius: '11px',
        padding: '0 15px',
        border: '1px solid',
        position: 'relative',
        overflow: 'hidden',
        marginRight: '5px'
    },
    cursor: {
        cursor: 'pointer'
    },
    default: {
        color: _colors2.default.grey8,
        background: _colors2.default.white,
        borderColor: _colors2.default.grey8
    },
    close: {
        width: '18px',
        height: '18px',
        display: 'block',
        position: 'absolute',
        top: '1px',
        right: '4px',
        transition: '0.3s all',
        borderRadius: '50%',
        opacity: '0',
        cursor: 'pointer',
        '&:hover': {
            opacity: '1'
        },
        '&:before': {
            content: '""',
            width: '50px',
            height: '50px',
            background: _colors2.default.white,
            filter: 'blur(10px)',
            position: 'absolute',
            borderRadius: '50%',
            top: '-16px',
            left: '-16px'
        },
        '&:after': {
            content: '""',
            width: '18px',
            height: '18px',
            background: _icons2.default.base(_icons2.default.close.icon(['#abb6bd'])),
            position: 'absolute',
            top: '0',
            left: '0'
        }
    }
};