'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navbar$shadow$master;

var _colors = require('../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _grid = require('../subatomic/grid');

var _grid2 = _interopRequireDefault(_grid);

var _icons = require('../subatomic/icons');

var _icons2 = _interopRequireDefault(_icons);

var _shadows = require('../subatomic/shadows');

var _shadows2 = _interopRequireDefault(_shadows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_navbar$shadow$master = {
    navbar: {
        border: 'none',
        fontFamily: _fonts2.default.body,
        position: 'relative',
        zIndex: '9'
    },
    shadow: {
        boxShadow: _shadows2.default.lvl3 + ' !important'
    },
    master: {
        backgroundColor: _colors2.default.blue,
        padding: '0 15px 0 15px',
        minHeight: '60px',
        boxShadow: _shadows2.default.lvl3
    },
    content: {
        borderBottom: '1px solid transparent',
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.75)'
    },
    title: {
        width: 'calc(100% - 150px)',
        fontSize: '16px',
        color: _colors2.default.white,
        paddingTop: '17px',
        paddingBottom: '5px',
        float: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    user: {
        paddingTop: '9px',
        float: 'right !important'
    },
    messages: {
        cursor: 'pointer',
        outline: '0',
        display: 'inline-flex',
        transform: 'translateY(30%)'
    },
    bubble: {
        width: _icons2.default.bubble.width,
        height: _icons2.default.bubble.height,
        display: _icons2.default.bubble.display,
        background: _icons2.default.base(_icons2.default.bubble.icon())
    },
    separate: {
        marginTop: '60px',
        zIndex: '9',
        position: 'relative'
    }
}, _defineProperty(_navbar$shadow$master, '@media (max-width: ' + (_grid2.default.sm - 1) + 'px)', {
    master: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '10',
        boxShadow: 'none'
    },
    content: {
        borderTop: '1px solid transparent'
    }
}), _defineProperty(_navbar$shadow$master, '@media (min-width: ' + _grid2.default.lg + 'px)', {
    master: {
        padding: '0 45px 0 45px'
    }
}), _navbar$shadow$master);