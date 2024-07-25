import legacyColors from '../subatomic/colors';
import legacyFont from '../subatomic/fonts';
import icons from '../subatomic/icons';

import colors from '../tokens/colors.json';
import spacing from '../tokens/spacing.json';
import borderRadius from '../tokens/borderRadius.json';
import fonts from '../tokens/fonts.json';
import shadows from '../tokens/shadows.json';
import { legacyIcons } from '../subatomic/mappedIcons';

const { sec, secDark, secLight } = legacyColors;

const sm = fonts['button-small'];
const md = fonts['button-medium'];
const lg = fonts['button-large'];

const renderIcon = (props, color) => {
    if (props.icon) {
        return legacyIcons[props.icon] ? icons.base(icons[props.icon].icon(color)) : '';
    } else if (props.iconRight) {
        return legacyIcons[props.iconRight] ? icons.base(icons[props.iconRight].icon(color)) : '';
    }
    return '';
};

export default {
    btn: {
        display: 'inline-block',
        boxSizing: 'border-box',
        position: 'relative',
        maxWidth: '100%',
        marginBottom: 0,
        border: 0,
        padding: [spacing['size-3'], spacing['size-4']],
        borderRadius: borderRadius['br-xs'],
        font: `${sm.fontWeight} ${sm.fontSize}/${sm.lineHeight} ${legacyFont.body}`,
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
        background: colors.button.primary.bg.default,
        color: colors.text.white.primary,
        outline: `2px solid ${colors.button.primary.border.default}`,
        outlineOffset: '-2px',
        '&:hover': {
            background: colors.button.primary.bg.hover
        },
        '&:active': {
            background: colors.button.primary.bg.active
        },
        '&:focus': {
            outline: `2px solid ${colors.button.primary.border.default}`
        },
        '&:focus-visible': {
            boxShadow: shadows['focus-pink']
        },
        '& $icon, & $iconRight': {
            fill: colors.icon.inverse.default
        },
        '&$disabled': {
            background: colors.button.primary.bg.disabled,
            color: colors.text.white.secondary,
            cursor: 'not-allowed',
            '& $icon, & $iconRight': {
                fill: colors.icon.inverse.disabled
            },
        }
    },
    secondary: {
        background: colors.button.secondary.bg.default,
        color: colors.text.indigo.primary,
        '&:hover': {
            background: colors.button.secondary.bg.hover
        },
        '&:active': {
            background: colors.button.secondary.bg.active
        },
        '&:focus-visible': {
            boxShadow: shadows['focus-indigo']
        },
        '& $icon, & $iconRight': {
            fill: colors.icon.brand.default
        },
        '&$disabled': {
            background: colors.button.secondary.bg.disabled,
            color: colors.text.indigo.secondary,
            '& $icon, & $iconRight': {
                fill: colors.icon.brand.disabled
            },
        },
        '& $loadIcon': {
            fill: colors.icon.brand.default
        }
    },
    tertiary: {
        background: 'transparent',
        color: colors.text.indigo.primary,
        outline: `2px solid ${colors.button.tertiary.border.default}`,
        outlineOffset: '-2px',
        '&:hover': {
            background: colors.button.tertiary.bg.hover
        },
        '&:active': {
            background: colors.button.tertiary.bg.active
        },
        '&:focus': {
            outline: `2px solid ${colors.button.tertiary.border.default}`
        },
        '&:focus-visible': {
            boxShadow: shadows['focus-indigo']
        },
        '& $icon, & $iconRight': {
            fill: colors.icon.brand.default
        },
        '&$disabled': {
            background: 'transparent',
            color: colors.text.indigo.secondary,
            outline: `2px solid ${colors.button.tertiary.border.disabled}`,
            '& $icon, & $iconRight': {
                fill: colors.icon.brand.disabled
            },
        },
        '& $loadIcon': {
            fill: colors.icon.brand.default
        }
    },
    tertiaryWhite: {
        background: 'transparent',
        color: colors.text.white.primary,
        outline: `2px solid ${colors.button.tertiary.border.inverse.default}`,
        outlineOffset: '-2px',
        '&:hover': {
            background: colors.button.tertiary.bg.inverse.hover
        },
        '&:active': {
            background: colors.button.tertiary.bg.inverse.active
        },
        '&:focus': {
            outline: `2px solid ${colors.button.tertiary.border.inverse.default}`
        },
        '&:focus-visible': {
            boxShadow: shadows['focus-white']
        },
        '& $icon, & $iconRight': {
            fill: colors.icon.inverse.default
        },
        '&$disabled': {
            background: 'transparent',
            color: colors.text.white.secondary,
            outlineColor: colors.button.tertiary.border.inverse.disabled,
            '& $icon, & $iconRight': {
                fill: colors.icon.inverse.disabled
            },
        },
    },
    ghostPink: {
        background: 'transparent',
        color: sec,
        border: 'none',
        paddingLeft: [0, '!important'],
        paddingRight: [0, '!important'],
        '&:hover, &:active': {
            color: secDark,
            '& span span': {
                background: props => renderIcon(props, [secDark])
            },
        },
        '&$disabled': {
            background: `transparent !important`,
            color: `${secLight} !important`,
            border: `none !important`,
        },
        '& $loadIcon': {
            fill: sec
        }
    },
    ghostGrey: {
        background: 'transparent',
        color: colors.text.corp.secondary,
        '&:hover': {
            background: colors.button.ghost.bg.hover
        },
        '&:active': {
            background: colors.button.ghost.bg.active
        },
        '&:focus-visible': {
            boxShadow: shadows['focus-corp']
        },
        '& $icon, & $iconRight': {
            fill: colors.icon.default.default
        },
        '&$disabled': {
            background: 'transparent',
            color: colors.text.corp.disabled,
            '& $icon, & $iconRight': {
                fill: colors.icon.default.disabled
            },
        },
        '& $loadIcon': {
            fill: colors.icon.default.default
        }
    },
    ghostWhite: {
        background: 'transparent',
        color: colors.text.white.primary,
        '&:hover': {
            background: colors.button.ghost.bg.inverse.hover
        },
        '&:active': {
            background: colors.button.ghost.bg.inverse.active
        },
        '&:focus-visible': {
            boxShadow: shadows['focus-white']
        },
        '& $icon, & $iconRight': {
            fill: colors.icon.inverse.default
        },
        '&$disabled': {
            background: 'transparent',
            color: colors.text.white.secondary,
            '& $icon, & $iconRight': {
                fill: colors.icon.inverse.disabled
            }
        },
    },
    loading: {
        pointerEvents: 'none',
        '& $cont': {
            visibility: 'hidden'
        }
    },
    disabled: {
        cursor: 'default',
        pointerEvents: 'none',
    },
    // Sizes
    md: {
        font: `${md.fontWeight} ${md.fontSize}/${md.lineHeight} ${legacyFont.body}`,
        padding: [spacing['size-3'], spacing['size-5']],
        '&$iconOnly': {
            padding: [spacing['size-2'], spacing['size-2']]
        }
    },
    lg: {
        font: `${lg.fontWeight} ${lg.fontSize}/${lg.lineHeight} ${legacyFont.body}`,
        padding: [spacing['size-3'], spacing['size-6']],
        '&$iconOnly': {
            padding: [spacing['size-3'], spacing['size-3']]
        }
    },
    // Block
    block: {
        display: 'block',
        width: '100%'
    },
    // Icon
    icon: {
        marginRight: spacing['size-2'],
        display: 'inline-block',
        transition: '0.3s all'
    },
    iconRight: {
        marginLeft: spacing['size-2'],
        display: 'inline-block',
        transition: '0.3s all'
    },
    iconOnly: {
        padding: [spacing['size-2'], spacing['size-2']],
        '& span span, & svg': {
            marginRight: 0,
            marginLeft: 0
        }
    },
    loadIcon: {
        width: 24,
        height: 24,
        fill: colors.icon.inverse.default
    },
    round: {
        borderRadius: '50%'
    }
};
