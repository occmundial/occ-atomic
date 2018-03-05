import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    row: {
        boxSizing:'border-box',
        marginRight:'-15px',
        marginLeft:'-15px',
        '&:before, &:after': {
            display:'table',
            content:'""'
        },
        '&:after': {
            clear:'both'
        }
    }
};

const Row = ({ classes, children, className, style }) => (
    <div className={`${classes.row} ${className ? className : ''}`} style={style}>{children}</div>
);

Row.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object
};

export default injectSheet(styles)(Row);