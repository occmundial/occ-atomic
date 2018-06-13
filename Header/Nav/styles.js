'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _menu$listItem$icon$a;

var _colors = require('../../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _grid = require('../../subatomic/grid');

var _grid2 = _interopRequireDefault(_grid);

var _icons = require('../../subatomic/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_menu$listItem$icon$a = {
    menu: {
        background: _colors2.default.blue,
        margin: '0 10px',
        paddingLeft: '0',
        listStyle: 'none',
        textAlign: 'center'
    },
    listItem: {
        width: 'auto',
        margin: '7px 30px 0 0',
        textAlign: 'center',
        padding: '5px 0 0 0',
        display: 'inline-block',
        fontSize: '12px',
        cursor: 'pointer',
        position: 'relative',
        '&:hover $icon': {
            filter: 'brightness(0.8)'
        },
        '&:hover $listAnchor': {
            color: _colors2.default.darkBlueH
        }
    },
    icon: {},
    activeItem: {
        '& $icon, &:hover $icon': {
            filter: 'brightness(1)'
        },
        '& $listAnchor, &:hover $listAnchor': {
            color: _colors2.default.white
        }
    },
    listAnchor: {
        padding: '0',
        marginTop: '-4px',
        marginBottom: '2px',
        textAlign: 'center',
        lineHeight: '20px',
        color: _colors2.default.darkBlue,
        textDecoration: 'none !important',
        position: 'relative',
        display: 'block',
        transition: '0.3s all'
    }
}, _defineProperty(_menu$listItem$icon$a, '@media (min-width: ' + _grid2.default.sm + 'px)', {
    menu: {
        float: 'left'
    },
    listItem: {
        float: 'left'
    }
}), _defineProperty(_menu$listItem$icon$a, '@media (max-width: ' + (_grid2.default.sm - 1) + 'px)', {
    menu: {
        clear: 'both',
        textAlign: 'center',
        margin: '0'
    },
    listItem: {
        margin: '0 25px 0 0',
        '&:last-child': {
            marginRight: '0'
        }
    },
    activeItem: {
        '&:after': {
            content: '""',
            width: '4px',
            height: '4px',
            display: 'block',
            borderRadius: '50%',
            background: _colors2.default.cyan,
            position: 'absolute',
            bottom: '0',
            left: '50%',
            marginBottom: '8px',
            transform: 'translateX(-50%)'
        },
        '& $listAnchor': {
            display: 'none'
        },
        '& $icon': {
            marginBottom: '14px'
        }
    },
    listAnchor: {},
    icon: {}
}), _menu$listItem$icon$a);