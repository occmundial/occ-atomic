import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import useStyles from './styles';

const Page = ({ onClick, selected, page }) => {
    const classes = useStyles();
    return (
        <li className={classnames(classes.li, { [classes.active]: selected })} tabIndex="0" onClick={onClick}>
            {page}
        </li>
    );
};

Page.propTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    page: PropTypes.number
};

export default Page;
