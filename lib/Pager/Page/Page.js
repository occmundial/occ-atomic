import React from 'react';
import PropTypes from 'prop-types';

const Page = ({
    classes,
    onClick,
    selected,
    page,
    disabled
}) => (
    <button
        className={`${classes.page}${
            selected ? ` ${classes.active}` : ''}${
            disabled ? ` ${classes.disabled}` : ''}${
            !onClick ? ` ${classes.static}` : ''}`}
        disabled={disabled}
        tabIndex={onClick ? 0 : -1}
        onClick={onClick}
    >
        {page}
    </button>
);

Page.propTypes = {
    classes: PropTypes.object,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    disabled: PropTypes.bool
};

export default Page;