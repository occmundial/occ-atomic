'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _grid = require('../subatomic/grid');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    col: {
        boxSizing: 'border-box',
        position: 'relative',
        minHeight: '1px',
        paddingRight: '15px',
        paddingLeft: '15px'
    }
};

var pushGrid = function pushGrid() {
    var sm = '@media (min-width: ' + _grid2.default.sm + 'px)';
    var md = '@media (min-width: ' + _grid2.default.md + 'px)';
    var lg = '@media (min-width: ' + _grid2.default.lg + 'px)';
    for (var i = 1; i <= 12; i++) {
        styles['xs' + i] = {
            float: 'left',
            width: 100 / 12 * i + '%'
        };
        styles['offset-xs' + i] = {
            marginLeft: 100 / 12 * i + '%'
        };
        styles['push-xs' + i] = {
            left: 100 / 12 * i + '%'
        };
        styles['pull-xs' + i] = {
            right: 100 / 12 * i + '%'
        };
    };
    styles[sm] = {};
    styles[md] = {};
    styles[lg] = {};
    for (var _i = 1; _i <= 12; _i++) {
        styles[sm]['sm' + _i] = {
            float: 'left',
            width: 100 / 12 * _i + '%'
        };
        styles[sm]['offset-sm' + _i] = {
            marginLeft: 100 / 12 * _i + '%'
        };
        styles[sm]['push-sm' + _i] = {
            left: 100 / 12 * _i + '%'
        };
        styles[sm]['pull-sm' + _i] = {
            right: 100 / 12 * _i + '%'
        };
        styles[md]['md' + _i] = {
            float: 'left',
            width: 100 / 12 * _i + '%'
        };
        styles[md]['offset-md' + _i] = {
            marginLeft: 100 / 12 * _i + '%'
        };
        styles[md]['push-md' + _i] = {
            left: 100 / 12 * _i + '%'
        };
        styles[md]['pull-md' + _i] = {
            right: 100 / 12 * _i + '%'
        };
        styles[lg]['lg' + _i] = {
            float: 'left',
            width: 100 / 12 * _i + '%'
        };
        styles[lg]['offset-lg' + _i] = {
            marginLeft: 100 / 12 * _i + '%'
        };
        styles[lg]['push-lg' + _i] = {
            left: 100 / 12 * _i + '%'
        };
        styles[lg]['pull-lg' + _i] = {
            right: 100 / 12 * _i + '%'
        };
    }
};

pushGrid();

exports.default = styles;