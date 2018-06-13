'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icons = require('../subatomic/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    container: {
        marginRight: '15px',
        padding: '10px 0 0',
        float: 'left !important'
    },
    logo: {
        width: _icons2.default.sight.width,
        height: _icons2.default.sight.height,
        display: _icons2.default.sight.display,
        background: _icons2.default.base(_icons2.default.sight.icon(["#FFFFFF"])),
        marginTop: '6px'
    }
};