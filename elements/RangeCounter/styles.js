'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    cont: {
        boxSizing: 'border-box',
        fontFamily: _fonts2.default.body,
        fontSize: '14px',
        lineHeight: '18px',
        color: _colors2.default.grey7
    },
    num: {
        color: _colors2.default.black
    }
};