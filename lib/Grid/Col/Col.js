import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import useStyles from './styles';

/** The Container component can receive different specifications for any of the breakpoint sizes. It needs to receive an object for the required size, and this object can specify a value for col (Col), offset, push and pull. */
const Col = ({ children, xxs, xs, sm, md, lg, xl, id, className, style }) => {
    const classes = useStyles();

    const getClasses = useCallback((size, data) => {
        const classNames = [
            data.col && classes[`${size}${data.col}`],
            data.offset && classes[`offset-${size}${data.offset}`],
            data.push && classes[`push-${size}${data.push}`],
            data.pull && classes[`pull-${size}${data.pull}`]
        ].filter(Boolean);
        return classnames(...classNames);
    }, [classes]);

    return (
        <div
            className={classnames(
                classes.col,
                xxs && getClasses('xxs', xxs),
                xs && getClasses('xs', xs),
                sm && getClasses('sm', sm),
                md && getClasses('md', md),
                lg && getClasses('lg', lg),
                xl && getClasses('xl', xl),
                className
            )}
            id={id}
            style={style}>
            {children}
        </div>
    );
};

Col.propTypes = {
    children: PropTypes.node,
    /** Specifications for a base window size (from 0px). */
    xxs: PropTypes.object,
    /** Specifications for an extra small window size. */
    xs: PropTypes.object,
    /** Specifications for a small window size. */
    sm: PropTypes.object,
    /** Specifications for a medium window size. */
    md: PropTypes.object,
    /** Specifications for a large window size. */
    lg: PropTypes.object,
    /** Specifications for an extra large window size. */
    xl: PropTypes.object,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Col;
