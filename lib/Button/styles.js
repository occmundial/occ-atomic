import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';
import iconSizes from '../subatomic/iconSizes';
import spacing from '../subatomic/spacing';

const { large, medium, base, small, tiny, radius, xTiny } = spacing;
const { primLight, primLighter, sec, secDark, textLink, ink, inkLight, grey200, grey600, grey900, white, bgWhite } = colors;

const renderIcon = (props, color) => {
    if (props.icon) {
        return icons.base(icons[props.icon].icon(color));
    } else if (props.iconRight) {
        return icons.base(icons[props.iconRight].icon(color));
    }
    return '';
};

export default {
    btn: {
        display: 'inline-block',
        boxSizing: 'border-box',
        position: 'relative',
        maxWidth: '100%',
        height: medium,
        marginBottom: 0,
        padding: [0, small],
        borderRadius: radius,
        fontFamily: fonts.body,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: 0,
        textAlign: 'center',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: '0.3s all',
        cursor: 'pointer',
        userSelect: 'none',
        touchAction: 'manipulation',
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
        justifyContent: 'center',
        pointerEvents: 'none'
    },
    loadCont: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none'
    },
    // Themes
    primary: {
        background: sec,
        color: white,
        border: `1px solid ${sec}`,
        '&:hover, &:active': {
            background: secDark,
            color: white,
            borderColor: secDark
        },
        '& i': {
            background: props => renderIcon(props, [bgWhite])
        }
    },
    secondary: {
        background: primLighter,
        color: textLink,
        border: `1px solid ${primLighter}`,
        '&:hover, &:active': {
            background: primLight,
            color: textLink,
            '& i': {
                background: props => renderIcon(props, [textLink])
            }
        },
        '& i': {
            background: props => renderIcon(props, [textLink])
        },
        '&$disabled': {
            background:`${primLighter} !important`,
            color:`${textLink} !important`,
            border:`1px solid ${primLighter} !important`
        },
        '& $loadIcon': {
            background: icons.base(icons.loading.icon([textLink]))
        }
    },
    tertiary: {
        background: bgWhite,
        color: ink,
        border: `1px solid ${grey200}`,
        '&:hover, &:active': {
            color: inkLight,
            '& i': {
                background: props => renderIcon(props, [grey600])
            }
        },
        '& i': {
            background: props => renderIcon(props, [grey900])
        },
        '&$disabled': {
            background: `${bgWhite} !important`,
            color: `${ink} !important`,
            border: `1px solid ${grey200} !important`,
            '& i': {
                background: props => renderIcon(props, [grey900])
            }
        },
        '& $loadIcon': {
            background: icons.base(icons.loading.icon([grey600]))
        }
    },
    tertiaryWhite: {
        background: 'transparent',
        color: white,
        border: `1px solid ${grey200}`,
        '&:hover, &:active': {
            opacity: 0.6
        },
        '& i': {
            background: props => renderIcon(props, [bgWhite])
        },
        '&$disabled': {
            background: `transparent !important`,
            color: `${white} !important`,
            border: `1px solid ${grey200} !important`,
            '& i': {
                background: props => renderIcon(props, [bgWhite])
            }
        }
    },
    ghostPink: {
        background: 'transparent',
        color: sec,
        border: 'none',
        paddingLeft: 0,
        paddingRight: 0,
        '&:hover, &:active': {
            color: secDark,
            '& i': {
                background: props => renderIcon(props, [secDark])
            }
        },
        '& i': {
            background: props => renderIcon(props, [sec])
        },
        '&$disabled': {
            background: `transparent !important`,
            color: `${sec} !important`,
            border: `none !important`,
            '& i': {
                background: props => renderIcon(props, [grey900])
            }
        },
        '& $loadIcon': {
            background: icons.base(icons.loading.icon([sec]))
        }
    },
    ghostGrey: {
        background: 'transparent',
        color: ink,
        border: 'none',
        paddingLeft: 0,
        paddingRight: 0,
        '&:hover, &:active': {
            color: inkLight,
            '& i': {
                background: props => renderIcon(props, [grey600])
            }
        },
        '& i': {
            background: props => renderIcon(props, [grey900])
        },
        '&$disabled': {
            background: `transparent !important`,
            color: `${ink} !important`,
            border: `none !important`,
            '& i': {
                background: props => renderIcon(props, [grey900])
            }
        },
        '& $loadIcon': {
            background: icons.base(icons.loading.icon([grey600]))
        }
    },
    ghostWhite: {
        background: 'transparent',
        color: white,
        border: 'none',
        paddingLeft: 0,
        paddingRight: 0,
        '&:hover, &:active': {
            opacity:0.6
        },
        '& i': {
            background: props => renderIcon(props, [bgWhite])
        },
        '&$disabled': {
            background: `transparent !important`,
            color: `${white} !important`,
            border: `none !important`,
            '& i': {
                background: props => renderIcon(props, [bgWhite])
            }
        }
    },
    loading: {
        pointerEvents: 'none',
        '& $cont': {
            visibility: 'hidden'
        }
    },
    disabled: {
        background: sec,
        color: white,
        border: `1px solid ${sec}`,
        cursor: 'default',
        pointerEvents: 'none',
        opacity: 0.4,
        '& i': {
            background: props => renderIcon(props, [bgWhite])
        },
        '&:hover, &:active, &:focus': {
            background: sec,
            color: white,
            border: `1px solid ${sec}`
        }
    },
    // Sizes
    md: {
        fontSize: 16,
        height: 40,
        lineHeight: 1.5,
        '& i': {
            width: iconSizes.small,
            height: iconSizes.small
        },
        '&$iconOnly': {
            padding: [0, 10],
        }
    },
    lg: {
        fontSize: 16,
        height: large,
        lineHeight: 1.5,
        '& i': {
            width: iconSizes.small,
            height: iconSizes.small
        },
        '&$iconOnly': {
            padding: [0, 14]
        }
    },
    // Block
    block: {
        display: 'block',
        width: '100%'
    },
    // Icon
    icon: {
        width: iconSizes.tiny,
        height: iconSizes.tiny,
        marginRight: xTiny,
        display: 'inline-block',
        transition: '0.3s all'
    },
    iconRight: {
        width: iconSizes.tiny,
        height: iconSizes.tiny,
        marginLeft: xTiny,
        display: 'inline-block',
        transition: '0.3s all'
    },
    '@keyframes iconRotate': {
        from: {transform: 'rotate(0deg)'},
        to: {transform: 'rotate(360deg)'}
    },
    iconOnly: {
        padding: [0, tiny],
        '& i': {
            marginRight: 0
        }
    },
    loadIcon: {
        width: base,
        height: base,
        display: 'inline-block',
        transition: '0.3s all',
        animation: 'iconRotate 1s infinite linear',
        background: icons.base(icons.loading.icon())
    },
    round: {
        borderRadius: '50%'
    }
};
