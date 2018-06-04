import React from 'react';
import PropTypes from 'prop-types';

/** A simple component to display the Sight logo. */
const SightLogo = ({ classes, style, className, id }) => (
    <div className={`${classes.container}${className ? ` ${className}` : ''}`} id={id} style={style}>
        <i className={classes.logo} />
    </div>
);

SightLogo.propTypes = {
    classes: PropTypes.object,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default SightLogo;