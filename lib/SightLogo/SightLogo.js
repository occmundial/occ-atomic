import React from 'react';
import PropTypes from 'prop-types';

/** A simple component to display the Sight logo. */
const SightLogo = ({ classes, style, className, id }) => {
    if (process.env.NODE_ENV === 'development') {
        console.warn('DEPRECATED: The SightLogo component will be removed soon. Use the Icon component instead.');
    }
    return (
        <div className={`${classes.container}${className ? ` ${className}` : ''}`} id={id} style={style}>
            <i className={classes.logo} />
        </div>
    );
};

SightLogo.propTypes = {
    classes: PropTypes.object,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default SightLogo;
