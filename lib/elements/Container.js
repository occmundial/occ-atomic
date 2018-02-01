import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    containerFluid: {
        paddingRight:'15px',
        paddingLeft:'15px',
        marginRight:'auto',
        marginLeft:'auto'
    },
    container: {
        extend: 'containerFluid',
    },
    '@media (min-width: 768px)': {
        container: {
            width:'750px'
        }
    },
    '@media (min-width: 992px)': {
        container: {
            width:'970px'
        }
    },
}

const Container = ({ classes, children, fluid, extraClasses }) => (
    <div className={`${fluid ? classes.containerFluid : classes.container} ${extraClasses ? extraClasses : ''}`}>{children}</div>
);

export default injectSheet(styles)(Container);