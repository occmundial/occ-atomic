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
    wrap: {
        display: 'flex'
    },
    text: {
        fontFamily: _fonts2.default.body,
        fontSize: '14px',
        color: _colors2.default.grey7
    },
    select: {
        appearance: 'none',
        background: _icons2.default.base(_icons2.default.arrowDownFilled.icon()),
        backgroundSize: '12px 12px',
        backgroundPosition: 'calc(100% - 2px) 5px',
        paddingRight: '25px',
        marginLeft: '5px',
        border: '0',
        fontFamily: _fonts2.default.body,
        fontSize: '14px',
        color: _colors2.default.grey7,
        outline: '0',
        textAlign: 'right',
        cursor: 'pointer'
    }
};