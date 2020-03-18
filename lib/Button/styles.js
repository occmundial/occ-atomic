import { createUseStyles } from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';
import iconSizes from '../subatomic/iconSizes';
import spacing from '../subatomic/spacing';

const renderIcon = (props, color) => {
    if (props.icon) {
        return icons.base(icons[props.icon].icon(color));
    } else if (props.iconRight) {
        return icons.base(icons[props.iconRight].icon(color));
    }
    return '';
};

export default createUseStyles({
    btn: {
        display:'inline-block',
        boxSizing:'border-box',
        position:'relative',
        maxWidth:'100%',
        height:spacing.medium,
        marginBottom:0,
        padding: [0, spacing.small],
        borderRadius: spacing.radius,
        fontFamily:fonts.body,
        fontWeight:600,
        fontSize:12,
        lineHeight:`${spacing.base}px`,
        letterSpacing:1,
        textAlign:'center',
        textDecoration:'none',
        textTransform:'uppercase',
        whiteSpace:'nowrap',
        transition:'0.3s all',
        cursor:'pointer',
        userSelect:'none',
        touchAction:'manipulation',
        '&:focus': {
            outline:'none'
        },
        '&:hover': {
            textDecoration:'none'
        }
    },
    cont: {
        display:'flex',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        pointerEvents:'none'
    },
    loadCont: {
        display:'flex',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:0,
        left:0,
        pointerEvents:'none'
    },
    // Themes
    primary: {
        background:colors.sec,
        color:colors.white,
        border:`1px solid ${colors.sec}`,
        '&:hover, &:active': {
            background:colors.secDark,
            color:colors.white,
            borderColor:colors.secDark
        },
        '& i': {
            background: props => renderIcon(props, [colors.bgWhite])
        }
    },
    secondary: {
        background:colors.secLighter,
        color:colors.sec,
        border:`1px solid ${colors.secLighter}`,
        '&:hover, &:active': {
            color:colors.secDark,
            '& i': {
                background: props => renderIcon(props, [colors.secDark])
            }
        },
        '& i': {
            background: props => renderIcon(props, [colors.sec])
        },
        '&$disabled': {
            background:`${colors.secLighter} !important`,
            color:`${colors.sec} !important`,
            border:`1px solid ${colors.secLighter} !important`
        },
        '& $loadIcon': {
            background: icons.base(icons.loading.icon([colors.sec]))
        }
    },
    tertiary: {
        background:colors.bgWhite,
        color:colors.ink,
        border:`1px solid ${colors.grey200}`,
        '&:hover, &:active': {
            color:colors.inkLight,
            '& i': {
                background: props => renderIcon(props, [colors.grey600])
            }
        },
        '& i': {
            background: props => renderIcon(props, [colors.grey900])
        },
        '&$disabled': {
            background:`${colors.bgWhite} !important`,
            color:`${colors.ink} !important`,
            border:`1px solid ${colors.grey200} !important`,
            '& i': {
                background: props => renderIcon(props, [colors.grey900])
            }
        },
        '& $loadIcon': {
            background: icons.base(icons.loading.icon([colors.grey600]))
        }
    },
    tertiaryWhite: {
        background:'transparent',
        color:colors.white,
        border:`1px solid ${colors.grey200}`,
        '&:hover, &:active': {
            opacity:0.6
        },
        '& i': {
            background: props => renderIcon(props, [colors.bgWhite])
        },
        '&$disabled': {
            background:`transparent !important`,
            color:`${colors.white} !important`,
            border:`1px solid ${colors.grey200} !important`,
            '& i': {
                background: props => renderIcon(props, [colors.bgWhite])
            }
        }
    },
    ghostPink: {
        background:'transparent',
        color:colors.sec,
        border:'none',
        paddingLeft:0,
        paddingRight:0,
        '&:hover, &:active': {
            color: colors.secDark,
            '& i': {
                background: props => renderIcon(props, [colors.secDark])
            }
        },
        '& i': {
            background: props => renderIcon(props, [colors.sec])
        },
        '&$disabled': {
            background:`transparent !important`,
            color:`${colors.sec} !important`,
            border:`none !important`,
            '& i': {
                background: props => renderIcon(props, [colors.grey900])
            }
        },
        '& $loadIcon': {
            background: icons.base(icons.loading.icon([colors.sec]))
        }
    },
    ghostGrey: {
        background:'transparent',
        color:colors.ink,
        border:'none',
        paddingLeft:0,
        paddingRight:0,
        '&:hover, &:active': {
            color: colors.inkLight,
            '& i': {
                background: props => renderIcon(props, [colors.grey600])
            }
        },
        '& i': {
            background: props => renderIcon(props, [colors.grey900])
        },
        '&$disabled': {
            background:`transparent !important`,
            color:`${colors.ink} !important`,
            border:`none !important`,
            '& i': {
                background: props => renderIcon(props, [colors.grey900])
            }
        },
        '& $loadIcon': {
            background: icons.base(icons.loading.icon([colors.grey600]))
        }
    },
    ghostWhite: {
        background:'transparent',
        color:colors.white,
        border:'none',
        paddingLeft:0,
        paddingRight:0,
        '&:hover, &:active': {
            opacity:0.6
        },
        '& i': {
            background: props => renderIcon(props, [colors.bgWhite])
        },
        '&$disabled': {
            background:`transparent !important`,
            color:`${colors.white} !important`,
            border:`none !important`,
            '& i': {
                background: props => renderIcon(props, [colors.bgWhite])
            }
        }
    },
    loading: {
        pointerEvents:'none',
        '& $cont': {
            visibility:'hidden'
        }
    },
    disabled: {
        background:colors.sec,
        color:colors.white,
        border:`1px solid ${colors.sec}`,
        cursor:'default',
        pointerEvents:'none',
        opacity:0.4,
        '& i': {
            background: props => renderIcon(props, [colors.bgWhite])
        },
        '&:hover, &:active, &:focus': {
            background:colors.sec,
            color:colors.white,
            border:`1px solid ${colors.sec}`
        }
    },
    // Sizes
    md: {
        fontSize:14,
        height:40,
        lineHeight:`${spacing.base}px`,
        '& i': {
            width: iconSizes.small,
            height: iconSizes.small
        },
        '&$iconOnly': {
            padding:`0 ${spacing.gutter}px`,
        }
    },
    lg: {
        fontSize:14,
        height:spacing.large,
        lineHeight:`${spacing.base}px`,
        '& i': {
            width: iconSizes.small,
            height: iconSizes.small
        },
        '&$iconOnly': {
            padding:`0 ${spacing.small}px`
        }
    },
    // Block
    block: {
        display:'block',
        width:'100%'
    },
    // Icon
    icon: {
        width: iconSizes.tiny,
        height: iconSizes.tiny,
        marginRight:4,
        display:'inline-block',
        transition:'0.3s all'
    },
    iconRight: {
        width: iconSizes.tiny,
        height: iconSizes.tiny,
        marginLeft:4,
        display:'inline-block',
        transition:'0.3s all'
    },
    '@keyframes iconRotate': {
        from: {transform: 'rotate(0deg)'},
        to: {transform: 'rotate(360deg)'}
    },
    iconOnly: {
        padding:`0 ${spacing.tiny}px`,
        '& i': {
            marginRight:0
        }
    },
    loadIcon: {
        width:spacing.base,
        height:spacing.base,
        display:'inline-block',
        transition:'0.3s all',
        animation:'$iconRotate 1s infinite linear',
        background: icons.base(icons.loading.icon())
    }
});
