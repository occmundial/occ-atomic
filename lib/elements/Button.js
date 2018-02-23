import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

const styles = {
    btn: {
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
    // Themes
    main: {
        background:colors.pink,
        color:colors.white,
        border:`1px solid ${colors.pink}`,
        '&:hover': {
            background:colors.pinkH,
            color:colors.white,
            borderColor:colors.pinkH,
        },
        '&:active': {
            background:colors.pinkA,
            color:colors.white,
            borderColor:colors.pinkA,
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
        },
        '&:active': {
            background:colors.pinkA,
            color:colors.white,
            borderColor:colors.pinkA,
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
        '&$disabled': {
            background:'transparent !important',
            color:`${colors.grey1} !important`,
            border:`1px solid transparent !important`,
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
        }
    },
    disabled: {
        background:colors.grey1,
        color:colors.white,
        border:`1px solid ${colors.grey1}`,
        cursor:'default',
        '&:hover, &:active, &:focus': {
            background:colors.grey1,
            color:colors.white,
            border:`1px solid ${colors.grey1}`
        }
    },
    // Sizes
    md: {
        fontSize:'16px',
        height:'40px'
    },
    lg: {
        fontSize:'18px',
        height:'46px'
    },
    // Block
    block: {
        display: 'block',
        width: '100%'
    },
    // Icon
    icon: {
        width: (props) => '150px',
        color: (props) => props.icon
    }
};

class Button extends React.Component {
    render() {
        const { classes, extraClasses, children, id, href, target, onClick, theme, size, block, disabled, icon, customStyles } = this.props;
        if (href) {
            return (
                <a
                    className={`${classes.btn} ${theme ? classes[theme] : ''} ${disabled ? classes.disabled : ''} ${size ? classes[size] : ''} ${block ? classes.block : ''} ${extraClasses ? extraClasses : ''}`}
                    href={href}
                    target={target ? target : ''}
                    onClick={onClick ? onClick : ''}
                    id={id}
                    style={customStyles}>
                    {children}
                </a>
            );
        } else {
            return (
                <button
                    className={`${classes.btn} ${theme ? classes[theme] : ''} ${disabled ? classes.disabled : ''} ${size ? classes[size] : ''} ${block ? classes.block : ''} ${extraClasses ? extraClasses : ''}`}
                    onClick={onClick}
                    id={id}
                    style={customStyles}>
                    {icon ? <i className={classes.icon} /> : ''}
                    {children}
                </button>
            );
        }
    }
}

Button.defaultProps = {
    theme: "main",
    size: "",
    block: false,
    disabled: false,
    icon: "apple"
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