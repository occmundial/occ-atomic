import React from 'react';
import injectSheet from 'react-jss';

import icons from '../subatomic/icons';

const styles = {
    container: {
        marginRight:'15px',
        padding:'10px 0 0',
        float:'left !important'
    },
    logo: {
        width:icons.sight.width,
        height:icons.sight.height,
        display:icons.sight.display,
        background:icons.base(icons.sight.icon(["#FFFFFF"])),
        marginTop:'6px'
    }
}

const SightLogo = ({ classes }) => (
    <div className={classes.container}>
        <i className={classes.logo} />
    </div>
);

export default injectSheet(styles)(SightLogo);