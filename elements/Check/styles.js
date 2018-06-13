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
    cont: {
        boxSizing: 'border-box',
        outline: '0',
        marginBottom: '15px',
        display: 'flex',
        cursor: 'pointer',
        '&:after': {
            content: '""',
            display: 'table',
            clear: 'both'
        },
        '&:hover $check': {
            borderColor: _colors2.default.green
        },
        '&:hover $label': {
            color: _colors2.default.black
        }
    },
    check: {
        boxSizing: 'border-box',
        flex: '0 0 16px',
        width: '16px',
        height: '16px',
        margin: '4px',
        borderRadius: '1px',
        border: '1px solid ' + _colors2.default.grey1,
        position: 'relative',
        float: 'left',
        transition: '0.3s all',
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '14px',
            height: '14px'
        }
    },
    active: {
        '& $check': {
            background: _colors2.default.green,
            borderColor: _colors2.default.green,
            '&:after': {
                background: _icons2.default.base(_icons2.default.check.icon([_colors2.default.white]))
            }
        },
        '& $label': {
            color: _colors2.default.black
        }
    },
    disabled: {
        pointerEvents: 'none',
        '& $check': {
            borderColor: _colors2.default.grey5
        },
        '&$active $check': {
            background: _colors2.default.grey5
        },
        '& $label': {
            color: _colors2.default.grey1
        }
    },
    label: {
        fontFamily: _fonts2.default.body,
        fontSize: '14px',
        color: _colors2.default.grey7,
        paddingTop: '3px',
        paddingLeft: '5px',
        paddingRight: '10px',
        float: 'left',
        flex: '1',
        transition: '0.3s all'
    },
    right: {
        extend: 'label',
        flex: 'none',
        fontSize: '13px',
        color: _colors2.default.grey1,
        paddingRight: '0',
        float: 'right'
    }
};