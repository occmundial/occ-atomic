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
    wrapper: {
        height: '60px'
    },
    subHeader: {
        fontFamily: _fonts2.default.body,
        fontSize: '16px',
        position: 'relative',
        height: '60px',
        boxShadow: _shadows2.default.lvl3,
        padding: '0 15px'
    },
    fixed: {
        position: 'fixed',
        zIndex: '10',
        top: '0',
        left: '0',
        width: '100%'
    },
    // Themes
    blue: {
        background: _colors2.default.blue,
        color: _colors2.default.white
    },
    white: {
        background: _colors2.default.white,
        color: _colors2.default.black
    },
    left: {
        float: 'left',
        height: '100%'
    },
    right: {
        float: 'right',
        height: '100%'
    },
    center: {
        position: 'absolute',
        left: '50%',
        height: '100%',
        transform: 'translateX(-50%)'
    }
};