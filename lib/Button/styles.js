import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

export default {
    btn: {
        display:'inline-block',
        boxSizing:'border-box',
        position:'relative',
        maxWidth:'100%',
        height:32,
        marginBottom:0,
        padding:'0 16px',
        borderRadius:4,
        fontFamily:fonts.body,
        fontWeight:600,
        fontSize:12,
        lineHeight:24,
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
    main: {
        background:colors.sec,
        color:colors.white,
        border:`1px solid ${colors.sec}`,
        '&:hover, &:active': {
            background:colors.secDark,
            color:colors.white,
            borderColor:colors.secDark
        },
        '& i': {
            background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
        },
        '&$loading': {
            background:colors.sec,
            borderColor:colors.sec
        },
        '&$disabled': {
            background:`${colors.grey1} !important`,
            color:`${colors.white} !important`,
            border:`1px solid ${colors.grey1} !important`
        }
    },
    secondary: {
        background:'transparent',
        color:colors.pink,
        border:`1px solid ${colors.pink}`,
        '&:hover': {
            background:colors.pinkH,
            color:colors.white,
            borderColor:colors.pinkH,
            '& i': {
                background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
            }
        },
        '&:active': {
            background:colors.pinkA,
            color:colors.white,
            borderColor:colors.pinkA,
            '& i': {
                background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
            }
        },
        '& i': {
            background: props => props.icon ? icons.base(icons[props.icon].icon([colors.pink])) : ''
        },
        '&$loading': {
            background:colors.pinkA,
            borderColor:colors.pinkA
        },
        '&$disabled': {
            background:`${colors.grey1} !important`,
            color:`${colors.white} !important`,
            border:`1px solid ${colors.grey1} !important`
        }
    },
    white: {
        background:'transparent',
        color:colors.white,
        border:`1px solid ${colors.white}`,
        '&:hover': {
            background:'rgba(255,255,255,0.2)',
            color:colors.white,
            borderColor:colors.white,
            '& i': {
                background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
            }
        },
        '&:active': {
            background:'rgba(255,255,255,0.2)',
            color:colors.white,
            borderColor:colors.white,
            '& i': {
                background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
            }
        },
        '& i': {
            background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
        },
        '&$loading': {
            background:'rgba(255,255,255,0.2)',
            borderColor:colors.white
        },
        '&$disabled': {
            background:`transparent !important`,
            color:`rgba(255,255,255,0.6) !important`,
            border:`1px solid rgba(255,255,255,0.6) !important`,
            '& i': {
                background: props => props.icon ? icons.base(icons[props.icon].icon(['rgba(255,255,255,0.6)'])) : ''
            }
        }
    },
    flat: {
        background:'transparent',
        color:colors.pink,
        border:`1px solid transparent`,
        '&:hover': {
            background:colors.grey3,
            color:colors.pink,
            borderColor:colors.grey3,
        },
        '&:active': {
            background:colors.grey5,
            color:colors.pink,
            borderColor:colors.grey5,
        },
        '& i': {
            background: props => props.icon ? icons.base(icons[props.icon].icon([colors.pink])) : ''
        },
        '& $loadIcon': {
            background: icons.base(icons.loading.icon([colors.pink]))
        },
        '&$loading': {
            background:colors.white,
            borderColor:colors.white
        },
        '&$disabled': {
            background:'transparent !important',
            color:`${colors.grey1} !important`,
            border:`1px solid transparent !important`,
            '& i': {
                background: props => props.icon ? icons.base(icons[props.icon].icon([colors.grey1])) : ''
            },
            '& $loadIcon': {
                background: icons.base(icons.loading.icon([colors.grey1]))
            },
        }
    },
    blue: {
        background:colors.blue,
        color:colors.white,
        border:`1px solid ${colors.blue}`,
        '&:hover': {
            background:colors.blueH,
            color:colors.white,
            borderColor:colors.blueH,
        },
        '&:active': {
            background:colors.blueA,
            color:colors.white,
            borderColor:colors.blueA,
        },
        '& i': {
            background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
        },
        '&$loading': {
            background:colors.blueA,
            borderColor:colors.blueA
        },
        '&$disabled': {
            background:`${colors.grey1} !important`,
            color:`${colors.white} !important`,
            border:`1px solid ${colors.grey1} !important`
        }
    },
    loading: {
        pointerEvents:'none',
        '& $cont': {
            visibility:'hidden'
        }
    },
    disabled: {
        background:colors.grey1,
        color:colors.white,
        border:`1px solid ${colors.grey1}`,
        cursor:'default',
        pointerEvents:'none',
        '& i': {
            background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
        },
        '&:hover, &:active, &:focus': {
            background:colors.grey1,
            color:colors.white,
            border:`1px solid ${colors.grey1}`
        }
    },
    // Sizes
    md: {
        fontSize:14,
        height:40,
        lineHeight:24,
        '& i': {
            width:20,
            height:20
        }
    },
    lg: {
        fontSize:14,
        height:48,
        lineHeight:24,
        '& i': {
            width:20,
            height:20
        }
    },
    // Block
    block: {
        display:'block',
        width:'100%'
    },
    // Icon
    icon: {
        width:18,
        height:18,
        marginRight:4,
        display:'inline-block',
        transition:'0.3s all'
    },
    '@keyframes rotate': {
        from: {transform: 'rotate(0deg)'},
        to: {transform: 'rotate(360deg)'}
    },
    loadIcon: {
        width:24,
        height:24,
        display:'inline-block',
        transition:'0.3s all',
        animation:'rotate 1s infinite linear',
        background: icons.base(icons.loading.icon())
    }
};