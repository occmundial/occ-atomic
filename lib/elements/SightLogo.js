import React from 'react';
import injectSheet from 'react-jss';
import v from '../elements/globals';

const styles = {
    container: {
        marginRight:'15px',
        padding:'10px 0 0',
        float:'left !important'
    },
    logo: {
        width:v.icons.sight.width,
        height:v.icons.sight.height,
        display:v.icons.sight.display,
        background:v.icons.base(v.icons.sight.icon),
        marginTop:'6px'
    }
}

const SightLogo = ({ classes }) => (
    <div className={classes.container}>
        <i className={classes.logo} />
    </div>
);

export default injectSheet(styles)(SightLogo);