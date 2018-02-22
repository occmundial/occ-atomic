import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

const styles = {
    btn: {
        // Bootstrap
        display:'inline-block',
        marginBottom:'0',
        textAlign:'center',
        whiteSpace:'nowrap',
        verticalAlign:'middle',
        touchAction:'manipulation',
        cursor:'pointer',
        userSelect:'none',
        // R12
        padding:'5px 20px',
        fontFamily:fonts.body,
        fontSize:'16px',
        fontWeight:'600',
        position:'relative',
        transition:'0.3s all',
        maxWidth:'100%',
        borderRadius:'2px',
        textDecoration:'none',
        '&:focus': {
            outline:'3px'
        },
        '&:hover': {
            textDecoration:'none'
        }
    },
    // Themes
    pink: {
        background:colors.pink,
        color:colors.white,
        border:`1px solid ${colors.pink}`,
        '&:hover': {
            background:colors.pinkH,
            color:colors.white,
            borderColor:colors.pinkH,
        }
    },
    blue: {
        background:colors.blue,
        color:colors.white,
        border:`1px solid ${colors.blue}`,
        '&:hover': {
            background:colors.blue,
            color:colors.white,
            borderColor:colors.blue,
        }
    },
    disabled: {
        background:colors.grey1,
        color:[colors.white, '!important'],
        border:`1px solid ${colors.grey1}`,
        cursor:'default',
        '&:hover, &:active, &:focus': {
            background:colors.grey1,
            color:[colors.white, '!important'],
            border:`1px solid ${colors.grey1}`
        }
    },
    // Sizes
    sm: {
        fontSize:'14px',
        padding:'6px 12px'
    },
    md: {
        width:'300px',
        padding:'11px 15px'
    },
    // Block
    block: {
        display: 'block',
        width: '100%'
    }
};

class Button extends React.Component {
    render() {
        const { classes, extraClasses, children, id, href, target, onClick, theme, size, block, disabled, customStyles } = this.props;
        if (href) {
            return (
                <a
                    className={`${classes.btn} ${!disabled ? theme ? classes[theme] : '' : classes.disabled} ${size ? classes[size] : ''} ${block ? classes.block : ''} ${extraClasses ? extraClasses : ''}`}
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
                    className={`${classes.btn} ${!disabled ? theme ? classes[theme] : '' : classes.disabled} ${size ? classes[size] : ''} ${block ? classes.block : ''} ${extraClasses ? extraClasses : ''}`}
                    onClick={onClick}
                    id={id}
                    style={customStyles}>
                    {children}
                </button>
            );
        }
    }
}

Button.defaultProps = {
    theme: "pink",
    size: "",
    block: false,
    disabled: false
};

Button.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.array,
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