'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../subatomic/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../subatomic/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _icons = require('../subatomic/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    btn: {
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        display: 'inline-block',
        marginBottom: '0',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        touchAction: 'manipulation',
        cursor: 'pointer',
        userSelect: 'none',
        padding: '0 30px',
        height: '30px',
        lineHeight: '24px',
        fontFamily: _fonts2.default.body,
        fontSize: '14px',
        fontWeight: '600',
        position: 'relative',
        transition: '0.3s all',
        maxWidth: '100%',
        borderRadius: '5px',
        textDecoration: 'none',
        '&:focus': {
            outline: 'none'
        },
        '&:hover': {
            textDecoration: 'none'
        }
    },
    cont: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadCont: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0',
        left: '0'
    },
    // Themes
    main: {
        background: _colors2.default.pink,
        color: _colors2.default.white,
        border: '1px solid ' + _colors2.default.pink,
        '&:hover': {
            background: _colors2.default.pinkH,
            color: _colors2.default.white,
            borderColor: _colors2.default.pinkH
        },
        '&:active': {
            background: _colors2.default.pinkA,
            color: _colors2.default.white,
            borderColor: _colors2.default.pinkA
        },
        '& $icon': {
            background: function background(props) {
                return props.icon ? _icons2.default.base(_icons2.default[props.icon].icon([_colors2.default.white])) : '';
            }
        },
        '&$loading': {
            background: _colors2.default.pinkA,
            borderColor: _colors2.default.pinkA
        },
        '&$disabled': {
            background: _colors2.default.grey1 + ' !important',
            color: _colors2.default.white + ' !important',
            border: '1px solid ' + _colors2.default.grey1 + ' !important'
        }
    },
    secondary: {
        background: 'transparent',
        color: _colors2.default.pink,
        border: '1px solid ' + _colors2.default.pink,
        '&:hover': {
            background: _colors2.default.pinkH,
            color: _colors2.default.white,
            borderColor: _colors2.default.pinkH,
            '& $icon': {
                background: function background(props) {
                    return props.icon ? _icons2.default.base(_icons2.default[props.icon].icon([_colors2.default.white])) : '';
                }
            }
        },
        '&:active': {
            background: _colors2.default.pinkA,
            color: _colors2.default.white,
            borderColor: _colors2.default.pinkA,
            '& $icon': {
                background: function background(props) {
                    return props.icon ? _icons2.default.base(_icons2.default[props.icon].icon([_colors2.default.white])) : '';
                }
            }
        },
        '& $icon': {
            background: function background(props) {
                return props.icon ? _icons2.default.base(_icons2.default[props.icon].icon([_colors2.default.pink])) : '';
            }
        },
        '&$loading': {
            background: _colors2.default.pinkA,
            borderColor: _colors2.default.pinkA
        },
        '&$disabled': {
            background: _colors2.default.grey1 + ' !important',
            color: _colors2.default.white + ' !important',
            border: '1px solid ' + _colors2.default.grey1 + ' !important'
        }
    },
    flat: {
        background: 'transparent',
        color: _colors2.default.pink,
        border: '1px solid transparent',
        '&:hover': {
            background: _colors2.default.grey3,
            color: _colors2.default.pink,
            borderColor: _colors2.default.grey3
        },
        '&:active': {
            background: _colors2.default.grey5,
            color: _colors2.default.pink,
            borderColor: _colors2.default.grey5
        },
        '& $icon': {
            background: function background(props) {
                return props.icon ? _icons2.default.base(_icons2.default[props.icon].icon([_colors2.default.pink])) : '';
            }
        },
        '& $loadIcon': {
            background: _icons2.default.base(_icons2.default.loading.icon([_colors2.default.pink]))
        },
        '&$loading': {
            background: _colors2.default.white,
            borderColor: _colors2.default.white
        },
        '&$disabled': {
            background: 'transparent !important',
            color: _colors2.default.grey1 + ' !important',
            border: '1px solid transparent !important',
            '& $icon': {
                background: function background(props) {
                    return props.icon ? _icons2.default.base(_icons2.default[props.icon].icon([_colors2.default.grey1])) : '';
                }
            },
            '& $loadIcon': {
                background: _icons2.default.base(_icons2.default.loading.icon([_colors2.default.grey1]))
            }
        }
    },
    blue: {
        background: _colors2.default.blue,
        color: _colors2.default.white,
        border: '1px solid ' + _colors2.default.blue,
        '&:hover': {
            background: _colors2.default.blueH,
            color: _colors2.default.white,
            borderColor: _colors2.default.blueH
        },
        '&:active': {
            background: _colors2.default.blueA,
            color: _colors2.default.white,
            borderColor: _colors2.default.blueA
        },
        '& $icon': {
            background: function background(props) {
                return props.icon ? _icons2.default.base(_icons2.default[props.icon].icon([_colors2.default.white])) : '';
            }
        },
        '&$loading': {
            background: _colors2.default.blueA,
            borderColor: _colors2.default.blueA
        },
        '&$disabled': {
            background: _colors2.default.grey1 + ' !important',
            color: _colors2.default.white + ' !important',
            border: '1px solid ' + _colors2.default.grey1 + ' !important'
        }
    },
    loading: {
        pointerEvents: 'none',
        '& $cont': {
            visibility: 'hidden'
        }
    },
    disabled: {
        background: _colors2.default.grey1,
        color: _colors2.default.white,
        border: '1px solid ' + _colors2.default.grey1,
        cursor: 'default',
        pointerEvents: 'none',
        '& $icon': {
            background: function background(props) {
                return props.icon ? _icons2.default.base(_icons2.default[props.icon].icon([_colors2.default.white])) : '';
            }
        },
        '&:hover, &:active, &:focus': {
            background: _colors2.default.grey1,
            color: _colors2.default.white,
            border: '1px solid ' + _colors2.default.grey1
        }
    },
    // Sizes
    md: {
        fontSize: '16px',
        height: '40px',
        lineHeight: '28px',
        '& $icon': {
            width: '28px',
            height: '28px'
        }
    },
    lg: {
        fontSize: '18px',
        height: '46px',
        lineHeight: '32px',
        '& $icon': {
            width: '32px',
            height: '32px'
        }
    },
    // Block
    block: {
        display: 'block',
        width: '100%'
    },
    // Icon
    icon: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        transition: '0.3s all'
    },
    '@keyframes rotate': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' }
    },
    loadIcon: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        transition: '0.3s all',
        animation: 'rotate 1s infinite linear',
        background: _icons2.default.base(_icons2.default.loading.icon())
    }
};