import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import grid from '../../subatomic/grid';

const styles = {
    conFluid: {
        boxSizing:'border-box',
        paddingRight:'15px',
        paddingLeft:'15px',
        marginRight:'auto',
        marginLeft:'auto',
        '&:before, &:after': {
            display:'table',
            content:'""'
        },
        '&:after': {
            clear:'both'
        }
    },
    con: {
        extend: 'conFluid',
        margin:'0 auto'
    },
    [`@media (min-width: ${grid.sm}px)`]: {
        con: {
            width:'750px'
        }
    },
    [`@media (min-width: ${grid.md}px)`]: {
        con: {
            width:'970px'
        }
    },
    [`@media (min-width: ${grid.lg}px)`]: {
        con: {
            width:'1170px'
        }
    }
};

const Container = ({ classes, children, fluid, className, id, style }) => (
    <div className={`${fluid ? classes.conFluid : classes.con} ${className ? className : ''}`} style={style} id={id}>{children}</div>
);

Container.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    fluid: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object
};

export default injectSheet(styles)(Container);