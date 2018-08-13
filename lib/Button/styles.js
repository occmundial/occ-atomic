import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

export default {
    btn: {
        alignItems:'flex-start',
        boxSizing:'border-box',
        display:'inline-block',
        marginBottom:'0',
        textAlign:'center',
        whiteSpace:'nowrap',
        verticalAlign:'middle',
        touchAction:'manipulation',
        cursor:'pointer',
        userSelect:'none',
        padding:'0 30px',
        height:'30px',
        lineHeight:'24px',
        fontFamily:fonts.body,
        fontSize:'14px',
        fontWeight:'600',
        position:'relative',
        transition:'0.3s all',
        maxWidth:'100%',
        borderRadius:'5px',
        textDecoration:'none',
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
        top:'0',
        left:'0',
        pointerEvents:'none'
    },
    // Themes
    main: {
        background:colors.pink,
        color:colors.white,
        border:`1px solid ${colors.pink}`,
        '&:hover': {
            background:colors.pinkH,
            color:colors.white,
            borderColor:colors.pinkH
        },
        '&:active': {
            background:colors.pinkA,
            color:colors.white,
            borderColor:colors.pinkA
        },
        '& i': {
            background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
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
        fontSize:'16px',
        height:'40px',
        lineHeight:'28px',
        '& i': {
            width:'28px',
            height:'28px'
        }
    },
    lg: {
        fontSize:'18px',
        height:'46px',
        lineHeight:'32px',
        '& i': {
            width:'32px',
            height:'32px'
        }
    },
    // Block
    block: {
        display:'block',
        width:'100%'
    },
    // Icon
    icon: {
        width:'24px',
        height:'24px',
        display:'inline-block',
        transition:'0.3s all'
    },
    '@keyframes rotate': {
        from: {transform: 'rotate(0deg)'},
        to: {transform: 'rotate(360deg)'}
    },
    loadIcon: {
        width:'24px',
        height:'24px',
        display:'inline-block',
        transition:'0.3s all',
        animation:'rotate 1s infinite linear',
        background: icons.base(icons.loading.icon())
    }
};