'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _footer$footerList$li;

var _colors = require('../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _grid = require('../subatomic/grid');

var _grid2 = _interopRequireDefault(_grid);

var _icons = require('../subatomic/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_footer$footerList$li = {
    footer: {
        backgroundColor: _colors2.default.black,
        height: '25px',
        margin: '0',
        padding: '0 40px',
        fontSize: '12px',
        color: _colors2.default.grey2,
        fontFamily: _fonts2.default.title
    },
    footerList: {
        listStyle: 'none',
        width: 'auto',
        margin: '0',
        padding: '4px 0 0 0'
    },
    listElement: {
        listStyle: 'none',
        float: 'left',
        margin: '0 50px 0 0',
        padding: '0',
        position: 'relative'
    },
    link: {
        color: _colors2.default.grey2,
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover, &:active, &:focus': {
            color: _colors2.default.white,
            textDecoration: 'none'
        }
    }
}, _defineProperty(_footer$footerList$li, '@media (max-width: ' + (_grid2.default.md - 1) + 'px)', {
    footer: {
        display: 'none !important'
    }
}), _defineProperty(_footer$footerList$li, 'dropdownMenu', {
    display: 'none',
    background: _colors2.default.black,
    position: 'absolute',
    bottom: 'calc(100% + 10px)',
    left: '50%',
    transform: 'translateX(-50%)',
    minWidth: '160px',
    padding: '5px 0',
    fontSize: '12px',
    textAlign: 'left',
    listStyle: 'none',
    borderRadius: '4px',
    boxShadow: '0 6px 12px rgba(0,0,0,.175)',
    zIndex: '2'
}), _defineProperty(_footer$footerList$li, 'dropdownElement', {
    float: 'left',
    listStyle: 'none'
}), _defineProperty(_footer$footerList$li, 'dropdownLink', {
    color: _colors2.default.grey2,
    textDecoration: 'none',
    padding: '3px 18px',
    lineHeight: '1.42857143',
    display: 'block',
    '&:hover': {
        color: _colors2.default.white,
        textDecoration: 'none'
    }
}), _footer$footerList$li);