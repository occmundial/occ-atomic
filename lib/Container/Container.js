import React from 'react';
import PropTypes from 'prop-types';

/** The container should be used as the main content container. You can't use a container inside of another container, it will brake your grid. */
const Container = ({ classes, children, fluid, onClick, className, id, style }) => {
    if (process.env.NODE_ENV === 'development') {
        console.warn('DEPRECATED: The Container component will be removed soon. Use the Grid component instead.');
    }
    return (
        <div className={`${fluid ? classes.conFluid : classes.con}${className ? ` ${className}` : ''}`} style={style} id={id} onClick={onClick}>{children}</div>
    );
};

Container.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    /** By default, the Container component has a specified width for any screen size. The fluid property allows the Container to extend to a 100% width. */
    fluid: PropTypes.bool,
    /** Function to call on click. This is not the best practice, but is an option if you need to use it. */
    onClick: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Container;
