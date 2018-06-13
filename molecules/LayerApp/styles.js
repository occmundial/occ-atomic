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
    layerApp: {
        boxSizing: 'border-box',
        position: 'fixed',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        top: '0',
        left: '0',
        fontFamily: _fonts2.default.body
    },
    content: {
        boxSizing: 'border-box',
        position: 'absolute',
        zIndex: '1',
        top: '60px',
        left: '0',
        width: '100%',
        height: 'calc(100% - 60px)',
        paddingTop: '30px',
        paddingBottom: '50px'
    },
    blue: {
        background: _colors2.default.white
    },
    white: {
        background: _colors2.default.white2
    }
};