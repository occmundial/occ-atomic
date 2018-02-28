import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

const styles = {
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
        justifyContent:'center'
    },
    loadCont: {
        display:'flex',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:'0',
        left:'0'
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
        '& $icon': {
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
            '& $icon': {
                background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
            }
        },
        '&:active': {
            background:colors.pinkA,
            color:colors.white,
            borderColor:colors.pinkA,
            '& $icon': {
                background: props => props.icon ? icons.base(icons[props.icon].icon([colors.white])) : ''
            }
        },
        '& $icon': {
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
        '& $icon': {
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
            '& $icon': {
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
        '& $icon': {
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
        '& $icon': {
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
        '& $icon': {
            width:'28px',
            height:'28px'
        }
    },
    lg: {
        fontSize:'18px',
        height:'46px',
        lineHeight:'32px',
        '& $icon': {
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

class Button extends React.Component {
    render() {
        const { classes, className, children, id, href, target, onClick, theme, size, block, disabled, icon, customStyles, loading } = this.props;
        if (href) {
            return (
                <a
                    className={`${classes.btn} ${theme ? classes[theme] : ''} ${loading ? classes.loading : ''} ${disabled ? classes.disabled : ''} ${size == "md" || size == "lg" ? classes[size] : ''} ${block ? classes.block : ''} ${className ? className : ''}`}
                    href={href}
                    target={target ? target : ''}
                    onClick={onClick}
                    id={id}
                    style={customStyles}>
                    <span className={classes.cont}>
                        {icon ? <i className={classes.icon} /> : ''}
                        {children}
                    </span>
                    {loading && <span className={classes.loadCont}>
                        <i className={classes.loadIcon} />
                    </span>}
                </a>
            );
        } else {
            return (
                <button
                    className={`${classes.btn} ${theme ? classes[theme] : ''} ${loading ? classes.loading : ''} ${disabled ? classes.disabled : ''} ${size == "md" || size == "lg" ? classes[size] : ''} ${block ? classes.block : ''} ${className ? className : ''}`}
                    onClick={onClick}
                    id={id}
                    style={customStyles}>
                    <span className={classes.cont}>
                        {icon ? <i className={classes.icon} /> : ''}
                        {children}
                    </span>
                    {loading && <span className={classes.loadCont}>
                        <i className={classes.loadIcon} />
                    </span>}
                </button>
            );
        }
    }
}

Button.defaultProps = {
    theme: "main",
    block: false,
    disabled: false
};

Button.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.string,
    id: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    customStyles: PropTypes.object
};

export default injectSheet(styles)(Button);