'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    title: {
        boxSizing: 'border-box',
        fontFamily: _fonts2.default.title,
        color: _colors2.default.title,
        fontWeight: '600',
        marginTop: '20px',
        marginBottom: '15px',
        lineHeight: '1.1'
    },
    h1: {
        fontSize: '22px'
    },
    h2: {
        fontSize: '20px'
    },
    h3: {
        fontSize: '18px'
    },
    h4: {
        fontSize: '15px'
    }
};