import React from 'react';
import PropTypes from 'prop-types';

const SightLogo = ({ classes, style }) => (
    <div className={classes.container} style={style}>
        <i className={classes.logo} />
    </div>
);

SightLogo.propTypes = {
    classes: PropTypes.object,
    style: PropTypes.object
};

export default SightLogo;