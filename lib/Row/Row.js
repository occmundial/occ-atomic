import React from 'react';
import PropTypes from 'prop-types';

/** Use the Row component inside a Container. To make your grid as complex as you need, you can nest a Column inside a Row and then nest a Row inside a Column to start a new grid. */
const Row = ({ classes, children, className, id, style }) => {
    if (process.env.NODE_ENV === 'development') {
        console.warn('DEPRECATED: The Row component will be removed soon. Use the Grid.Row subcomponent instead.');
    }
    return (
        <div className={`${classes.row}${className ? ` ${className}` : ''}`} style={style} id={id}>{children}</div>
    );
};

Row.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Row;
