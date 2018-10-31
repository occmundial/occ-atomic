import React from 'react';
import PropTypes from 'prop-types';

/** Use the Row component inside a Grid. To make your grid as complex as you need, you can nest a Column inside a Row and then nest a Row inside a Column to start a new grid. */
const Row = ({ classes, children, className, id, style }) => (
    <div className={`${classes.row}${className ? ` ${className}` : ''}`} style={style} id={id}>{children}</div>
);

Row.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Row;