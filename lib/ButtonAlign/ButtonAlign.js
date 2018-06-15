import React from 'react';
import PropTypes from 'prop-types';

/**
* The Input component and the Button component have different sizes. That's why they wouldn't be aligned with each other when putting them side to side. Use this component to align the Button correctly with the Input.
* To align it correctly, use the same size value used on the Button.
* Right below there are two examples, one aligned and one that is not.
*/
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

ButtonAlign.defaultProps = {
    size: 'sm'
};

ButtonAlign.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.object,
    /** Use the same size used in the button. */
    size: PropTypes.string
};

export default ButtonAlign;