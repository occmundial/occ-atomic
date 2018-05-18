import React from 'react';
import PropTypes from 'prop-types';

const Break = ({ classes, label }) => (
    <li className={classes.li}>
        {label}
    </li>
);

Break.propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string
};

export default Break;