'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icons = require('../subatomic/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    icon: {
        boxSizing: 'border-box',
        width: function width(props) {
            return props.width ? props.width + 'px' : _icons2.default[props.iconName] ? _icons2.default[props.iconName].width : '';
        },
        height: function height(props) {
            return props.height ? props.height + 'px' : _icons2.default[props.iconName] ? _icons2.default[props.iconName].height : '';
        },
        display: function display(props) {
            return props.display ? props.display : _icons2.default[props.iconName] ? _icons2.default[props.iconName].display : '';
        },
        border: '0',
        outline: '0',
        background: function background(props) {
            return props.iconName ? _icons2.default.base(_icons2.default[props.iconName].icon(props.colors ? props.colors : undefined)) : '';
        },
        transition: function transition(props) {
            return props.transition ? props.transition : '0.3s all';
        },
        '&:hover': {
            background: function background(props) {
                return props.hover && props.iconName ? _icons2.default.base(_icons2.default[props.iconName].icon(props.hover)) : undefined;
            }
        }
    },
    click: {
        cursor: 'pointer'
    }
};