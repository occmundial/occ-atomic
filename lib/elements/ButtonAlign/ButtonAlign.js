import React from 'react';
import PropTypes from 'prop-types';

/** Use this component to align a Button correctly side to side with an Input */
class ButtonAlign extends React.Component {
    
    render() {
        
        const { classes, children, size } = this.props;
        return (
            <div className={size ? classes[size] : classes.sm}>
                {children}
            </div>
        );
    }
}

ButtonAlign.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.object,
    /** Use the same size used in the button. */
    size: PropTypes.string
};

export default ButtonAlign;