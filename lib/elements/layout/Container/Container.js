import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const Container = ({ classes, children, fluid, className, id, style }) => (
    <div className={`${fluid ? classes.conFluid : classes.con}${className ? ` ${className}` : ''}`} style={style} id={id}>{children}</div>
);

Container.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    fluid: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object
};

export default Container;