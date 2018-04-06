import React from 'react';
import PropTypes from 'prop-types';
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
};

const SightLogo = ({ classes, style }) => (
    <div className={classes.container} style={style}>
        <i className={classes.logo} />
    </div>
);

SightLogo.propTypes = {
    classes: PropTypes.object,
    style: PropTypes.object
};

export default injectSheet(styles)(SightLogo);