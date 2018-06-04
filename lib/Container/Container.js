import React from 'react';
import PropTypes from 'prop-types';

/** The container should be used as the main content container. You can't use a container inside of another container, it will brake your grid. */
const Container = ({ classes, children, fluid, className, id, style }) => (
    <div className={`${fluid ? classes.conFluid : classes.con}${className ? ` ${className}` : ''}`} style={style} id={id}>{children}</div>
);

Container.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    /** By default, the Container component has a specified width for any screen size. The fluid property allows the Container to extend to a 100% width. */
    fluid: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Container;