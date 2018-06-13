'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _shadows = require('../subatomic/shadows');

var _shadows2 = _interopRequireDefault(_shadows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    card: {
        background: _colors2.default.white,
        borderRadius: '5px',
        padding: '30px 20px'
    },
    cardNoPadding: {
        extend: 'card',
        padding: '0'
    }
};

var pushShadows = function pushShadows() {
    for (var i = 0; i < 7; i++) {
        styles['shadow' + i] = {
            boxShadow: _shadows2.default['lvl' + i]
        };
    }
};

pushShadows();

exports.default = styles;