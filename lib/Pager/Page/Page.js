import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ classes, onClick, selected, page }) => (
    <li className={`${classes.li}${selected ? ` ${classes.active}` : ''}`} tabIndex="0" onClick={onClick}>
        {page}
    </li>
);

Page.propTypes = {
    classes: PropTypes.object,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    page: PropTypes.number
};

export default Page;