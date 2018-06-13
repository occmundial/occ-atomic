'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    circle: {
        position: 'relative',
        width: function width(props) {
            return props.size ? props.size : 70;
        },
        height: function height(props) {
            return props.size ? props.size : 70;
        },
        borderRadius: '50%',
        overflow: 'hidden'
    }
};