'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    row: {
        boxSizing: 'border-box',
        marginRight: '-15px',
        marginLeft: '-15px',
        '&:before, &:after': {
            display: 'table',
            content: '""'
        },
        '&:after': {
            clear: 'both'
        }
    }
};