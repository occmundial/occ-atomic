import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    sm: {
        marginTop:'19px'
    },
    md: {
        marginTop:'9px'
    },
    lg: {
        marginTop:'3px'
    }
};

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

export default injectSheet(styles)(ButtonAlign);