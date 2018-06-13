'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _conFluid$con;

var _grid = require('../../../subatomic/grid');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_conFluid$con = {
    conFluid: {
        boxSizing: 'border-box',
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
        '&:before, &:after': {
            display: 'table',
            content: '""'
        },
        '&:after': {
            clear: 'both'
        }
    },
    con: {
        extend: 'conFluid',
        margin: '0 auto'
    }
}, _defineProperty(_conFluid$con, '@media (min-width: ' + _grid2.default.sm + 'px)', {
    con: {
        width: '750px'
    }
}), _defineProperty(_conFluid$con, '@media (min-width: ' + _grid2.default.md + 'px)', {
    con: {
        width: '970px'
    }
}), _defineProperty(_conFluid$con, '@media (min-width: ' + _grid2.default.lg + 'px)', {
    con: {
        width: '1170px'
    }
}), _conFluid$con);