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
    button: {
        cursor: 'pointer'
    },
    content: {
        transition: '0.3s all'
    },
    hide: {
        opacity: '0',
        marginTop: '-35px',
        marginBottom: '35px',
        pointerEvents: 'none'
    },
    show: {
        opacity: '1',
        marginTop: '0',
        marginBottom: '0'
    },
    dot: {
        position: 'relative',
        '&:after': {
            content: '""',
            display: 'block',
            background: _colors2.default.blue,
            position: 'absolute',
            left: 'calc(100% + 5px)',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '5px',
            height: '5px',
            borderRadius: '3px'
        }
    }
};