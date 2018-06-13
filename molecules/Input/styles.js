'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _icons = require('../../subatomic/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    container: {
        marginBottom: '16px',
        paddingBottom: '11px',
        position: 'relative'
    },
    default: {
        color: _colors2.default.grey4,
        '& $input': {
            borderColor: _colors2.default.grey1
        },
        '& $placeholder': {
            top: '20px',
            fontSize: '16px',
            color: _colors2.default.grey6
        }
    },
    disabled: {
        color: _colors2.default.grey1,
        '& $input': {
            borderColor: _colors2.default.grey1,
            color: _colors2.default.grey1
        },
        '& $placeholder': {
            top: '20px',
            fontSize: '16px',
            color: _colors2.default.grey2
        },
        '& $pushHolder': {
            left: '0'
        }
    },
    focus: {
        color: _colors2.default.blue,
        '& $inputWrap:after': {
            width: '100%',
            left: '0'
        },
        '& $placeholder': {
            color: _colors2.default.blue
        },
        '& $pushHolder': {
            left: '0'
        }
    },
    complete: {
        color: _colors2.default.black2,
        '& $input': {
            borderColor: _colors2.default.black2
        },
        '& $placeholder': {
            color: _colors2.default.black2
        },
        '& $pushHolder': {
            left: '0'
        }
    },
    correct: {
        color: _colors2.default.green,
        '& $input': {
            borderColor: _colors2.default.green
        },
        '& $placeholder': {
            color: _colors2.default.green
        },
        '& $pushHolder': {
            left: '0'
        }
    },
    error: {
        color: _colors2.default.red,
        '& $input': {
            borderColor: _colors2.default.red
        },
        '& $placeholder': {
            color: _colors2.default.red
        },
        '& $pushHolder': {
            left: '0'
        }
    },
    label: {
        boxSizing: 'border-box',
        float: 'left',
        display: 'inline-block',
        maxWidth: '100%',
        fontFamily: _fonts2.default.body,
        fontSize: '11px',
        fontWeight: 'normal',
        marginBottom: '0',
        transition: '0.3s all'
    },
    left: {
        float: 'left'
    },
    push: {
        paddingTop: '15px'
    },
    counter: {
        position: 'absolute',
        top: '0',
        right: '0'
    },
    placeholder: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: '11px',
        top: '0'
    },
    pushHolder: {
        left: '24px'
    },
    inputWrap: {
        boxSizing: 'border-box',
        position: 'relative',
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: _colors2.default.blue,
            transition: '0.3s all',
            bottom: '0',
            left: '50%',
            width: '0',
            height: '1px'
        }
    },
    input: {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '34px',
        color: _colors2.default.black,
        fontFamily: _fonts2.default.body,
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '16px',
        background: 'transparent',
        border: '0',
        borderBottom: '1px solid ' + _colors2.default.grey1,
        padding: '10px 0',
        marginBottom: '4px',
        outline: 'none',
        transition: '0.3s all',
        '&::placeholder': {
            color: _colors2.default.grey6
        }
    },
    textarea: {
        padding: '5px 0',
        lineHeight: '22px'
    },
    select: {
        padding: '0',
        appearance: 'none',
        background: _icons2.default.base(_icons2.default.arrowDown.icon(['#4E6273'])),
        backgroundSize: '24px 24px',
        backgroundPosition: 'calc(100% - 5px) 5px'
    },
    expanded: {
        height: '80px'
    },
    hasIcon: {
        paddingLeft: '24px'
    },
    icon: {
        position: 'absolute',
        left: '0',
        top: '19px'
    },
    hasClear: {
        paddingRight: '24px'
    },
    clear: {
        background: 'none',
        border: '0',
        padding: '0',
        margin: '0',
        position: 'absolute',
        right: '0',
        top: '20px',
        outline: '0',
        cursor: 'pointer'
    }
};