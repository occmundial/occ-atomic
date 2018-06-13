'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../../../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _icons = require('../../../subatomic/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    wrap: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    cont: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        overflow: 'hidden'
    },
    m: {
        background: _icons2.default.base(_icons2.default.male.icon())
    },
    f: {
        background: _icons2.default.base(_icons2.default.female.icon())
    },
    capital: {
        fontFamily: _fonts2.default.body,
        fontSize: 70 * 0.4,
        lineHeight: '70px',
        fontWeight: '600',
        background: '#dae1e5',
        color: '#afb8c0',
        textAlign: 'center'
    }
};