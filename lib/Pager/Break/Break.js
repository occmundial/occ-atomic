import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const Break = ({ label }) => {
    const classes = useStyles();
    return (
        <li className={classes.li}>
            {label}
        </li>
    );
};

Break.propTypes = {
    label: PropTypes.string
};

export default Break;
