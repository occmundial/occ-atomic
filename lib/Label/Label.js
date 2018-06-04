import React from 'react';
import PropTypes from 'prop-types';

/** Label component with different themes. The label can trigger some actions on click. */
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
    /** Select a theme for the label (currently there's just the "default" theme). */
    theme: PropTypes.string,
    /** Function to call when the label is clicked. */
    onClick: PropTypes.func,
    /** If the label receives an onClose function it will display an 'x' icon on hover that will trigger this function when clicked. */
    onClose: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Label;