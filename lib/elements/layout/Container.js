import React from 'react';
import injectSheet from 'react-jss';

import grid from '../../subatomic/grid';

const styles = {
    containerFluid: {
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
    container: {
        extend: 'containerFluid',
        margin:'0 auto'
    },
    [`@media (min-width: ${grid.sm}px)`]: {
        container: {
            width:'750px'
        }
    },
    [`@media (min-width: ${grid.md}px)`]: {
        container: {
            width:'970px'
        }
    },
    [`@media (min-width: ${grid.lg}px)`]: {
        container: {
            width:'1170px'
        }
    }
}

const Container = ({ classes, children, fluid, extraClasses, styles }) => (
    <div className={`${fluid ? classes.containerFluid : classes.container} ${extraClasses ? extraClasses : ''}`} style={styles}>{children}</div>
);

export default injectSheet(styles)(Container);