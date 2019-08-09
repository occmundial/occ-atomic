import React from 'react';
import PropTypes from 'prop-types';

const getClasses = function(size, data, classes) {
    let string = '';
    if (data.col) string+=' '+classes[`${size}${data.col}`];
    if (data.offset) string+=' '+classes[`offset-${size}${data.offset}`];
    if (data.push) string+=' '+classes[`push-${size}${data.push}`];
    if (data.pull) string+=' '+classes[`pull-${size}${data.pull}`];
    return string;
};

/** The Container component can receive different specifications for any of the breakpoint sizes. It needs to receive an object for the required size, and this object can specify a value for col (column), offset, push and pull. */
const Column = ({ classes, children, xs, sm, md, lg, id, className, style }) => {
    if (process.env.NODE_ENV === 'development') {
        console.warn('DEPRECATED: The Column component will be removed soon. Use the Grid.Col subcomponent instead.');
    }
    return (
        <div
            className={`${classes.col}${xs ? getClasses('xs', xs, classes) : ''}${sm ? getClasses('sm', sm, classes) : ''}${md ? getClasses('md', md, classes) : ''}${lg ? getClasses('lg', lg, classes) : ''}${className ? ` ${className}` : ''}`}
            id={id}
            style={style}>
            {children}
        </div>
    );
};

Column.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    /** Specifications for a extra small window size. */
    xs: PropTypes.object,
    /** Specifications for a small window size. */
    sm: PropTypes.object,
    /** Specifications for a medium window size. */
    md: PropTypes.object,
    /** Specifications for a large window size. */
    lg: PropTypes.object,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Column;
