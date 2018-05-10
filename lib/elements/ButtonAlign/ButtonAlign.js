import React from 'react';
import PropTypes from 'prop-types';

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
    size: PropTypes.string
};

export default ButtonAlign;