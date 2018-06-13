'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _grid = require('../../subatomic/grid');

var _grid2 = _interopRequireDefault(_grid);

var _icons = require('../../subatomic/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({
    menu: {
        marginTop: '5px',
        display: 'inline-block',
        cursor: 'pointer !important'
    },
    btnContainer: {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'middle'
    },
    btnMenu: {
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: '5px 10px 2px 10px',
        marginLeft: '10px',
        color: _colors2.default.white,
        transition: '0.3s all',
        outline: 'none !important',
        borderRadius: '3px',
        '&:hover': {
            color: _colors2.default.blue,
            background: _colors2.default.white
        },
        '&:hover $menuIcon': {
            background: _icons2.default.base(_icons2.default.menu.icon(["#1476fb"]))
        }
    },
    btnMenuOpen: {
        color: _colors2.default.blue,
        background: _colors2.default.white,
        '& $menuIcon': {
            background: _icons2.default.base(_icons2.default.menu.icon(["#1476fb"]))
        }
    },
    label: {
        paddingRight: '5px',
        margin: '0',
        display: 'inline-block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '65px',
        whiteSpace: 'nowrap'
    },
    menuIcon: {
        width: _icons2.default.menu.width,
        height: _icons2.default.menu.height,
        display: _icons2.default.menu.display,
        transition: '0.3s all',
        background: _icons2.default.base(_icons2.default.menu.icon(["#FFFFFF"]))
    },
    dropdownMenu: {
        position: 'absolute',
        top: '100%',
        zIndex: '1000',
        display: 'none',
        float: 'left',
        minWidth: '160px',
        padding: '5px 0',
        fontSize: '14px',
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: _colors2.default.white,
        backgroundClip: 'padding-box',
        border: '1px solid rgba(0,0,0,.15)',
        boxShadow: '0 6px 12px rgba(0,0,0,.175)',
        margin: '13px 0 0 -187px',
        right: '0'
    },
    dropdownMenuOpen: {
        display: 'block'
    },
    listAnchor: {
        textDecoration: 'none',
        display: 'block',
        padding: '0 10px',
        margin: '5px 0 5px 0',
        clear: 'both',
        fontWeight: '400',
        lineHeight: '1.42857143',
        whiteSpace: 'nowrap',
        color: '#000',
        cursor: 'pointer',
        '&:hover, &:focus': {
            textDecoration: 'none',
            color: _colors2.default.blue
        }
    },
    signOut: {
        color: _colors2.default.pink + ' !important',
        margin: '10px 0 5px 0'
    },
    separator: {
        height: '1px',
        background: '#ebebeb'
    }
}, '@media (max-width: ' + (_grid2.default.sm - 1) + 'px)', {
    dropdownMenu: {
        width: '200px'
    }
});