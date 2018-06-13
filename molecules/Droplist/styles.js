'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _shadows = require('../../subatomic/shadows');

var _shadows2 = _interopRequireDefault(_shadows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    block: {
        background: _colors2.default.white,
        boxShadow: _shadows2.default.lvl4,
        padding: '5px 0',
        borderRadius: '0 0 5px 5px'
    },
    groupCon: {
        borderBottom: _colors2.default.grey3
    },
    group: {
        fontFamily: _fonts2.default.body,
        fontSize: '11px',
        lineHeight: '28px',
        color: _colors2.default.grey7,
        padding: '0 8px'
    },
    item: {
        fontFamily: _fonts2.default.body,
        fontSize: '15px',
        lineHeight: '28px',
        color: _colors2.default.grey7,
        padding: '0 8px',
        transition: '0.1s all',
        cursor: 'pointer',
        '&:hover': {
            background: _colors2.default.blue,
            color: _colors2.default.white,
            '& $right': {
                color: _colors2.default.white
            }
        }
    },
    right: {
        float: 'right',
        color: _colors2.default.grey1,
        transition: '0.1s all'
    },
    bold: {
        fontWeight: '700'
    }
};