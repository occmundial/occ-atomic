import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const Row = ({ classes, children, className, id, style }) => (
    <div className={`${classes.row}${className ? ` ${className}` : ''}`} style={style} id={id}>{children}</div>
);

Row.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object
};

export default Row;