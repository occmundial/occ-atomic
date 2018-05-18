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

const Column = ({ classes, children, xs, sm, md, lg, id, className, style }) => (
    <div
        className={`${classes.col}${xs ? getClasses('xs', xs, classes) : ''}${sm ? getClasses('sm', sm, classes) : ''}${md ? getClasses('md', md, classes) : ''}${lg ? getClasses('lg', lg, classes) : ''}${className ? ` ${className}` : ''}`}
        id={id}
        style={style}>
        {children}
    </div>
);

Column.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    xs: PropTypes.object,
    sm: PropTypes.object,
    md: PropTypes.object,
    lg: PropTypes.object,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Column;