import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

class Button extends React.Component {
    
    render() {
        const { classes, className, children, id, href, target, onClick, theme, size, block, disabled, icon, style, loading } = this.props;
        let classNames=classes.btn;
        if (theme) classNames += ` ${classes[theme]}`;
        if (loading) classNames += ` ${classes.loading}`;
        if (disabled) classNames += ` ${classes.disabled}`;
        if (size == "md" || size == "lg") classNames += ` ${classes[size]}`;
        if (block) classNames += ` ${classes.block}`;
        if (className) classNames += ` ${className}`;
        if (href) {
            return (
                <a
                    className={classNames}
                    href={disabled ? href : ''}
                    target={target ? target : ''}
                    onClick={onClick}
                    id={id}
                    style={style}>
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
                    className={classNames}
                    onClick={!disabled && onClick}
                    id={id}
                    style={style}>
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
    className: PropTypes.string,
    id: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    style: PropTypes.object,
    loading: PropTypes.bool
};

export default Button;