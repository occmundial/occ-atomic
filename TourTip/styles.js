'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _shadows = require('../subatomic/shadows');

var _shadows2 = _interopRequireDefault(_shadows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    tip: {
        boxSizing: 'border-box',
        background: _colors2.default.blue,
        color: _colors2.default.white,
        fontFamily: _fonts2.default.title,
        fontSize: '12px',
        padding: '0 15px',
        height: '40px',
        borderRadius: '3px',
        position: 'absolute',
        zIndex: '10',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        boxShadow: _shadows2.default.lvl4,
        top: '0',
        left: '0',
        transition: '0.3s all',
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute'
        }
    },
    right: {
        '&:after': {
            borderRight: '5px solid ' + _colors2.default.blue,
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            right: '100%',
            top: '50%',
            transform: 'translateY(-50%)'
        }
    },
    left: {
        '&:after': {
            borderLeft: '5px solid ' + _colors2.default.blue,
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            left: '100%',
            top: '50%',
            transform: 'translateY(-50%)'
        }
    },
    down: {
        '&:after': {
            borderBottom: '5px solid ' + _colors2.default.blue,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)'
        }
    },
    up: {
        '&:after': {
            borderTop: '5px solid ' + _colors2.default.blue,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)'
        }
    }
};