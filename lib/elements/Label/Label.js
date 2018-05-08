import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

class Label extends React.Component {
    
    render() {
        const { classes, children, className, id, style, onClose, onClick, theme } = this.props;
        return (
            <label className={`${classes.label} ${theme ? classes[theme] : classes.default}${onClick ? ` ${classes.cursor}` : ''}${className ? ` ${className}` : ''}`} id={id} style={style} onClick={onClick}>
                {children}
                {onClose && <span className={classes.close} onClick={e => {e.stopPropagation(); onClose();}} />}
            </label>
        );
    }
}

Label.defaultProps= {
    theme: "default"
};

Label.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    onClose: PropTypes.func,
    onClick: PropTypes.func,
    theme: PropTypes.string
};

export default Label;