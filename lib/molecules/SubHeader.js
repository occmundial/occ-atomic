import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import shadows from '../subatomic/shadows';
import Flexbox from '../elements/layout/Flexbox';

const styles = {
    wrapper: {
        height:'60px'
    },
    subHeader: {
        fontFamily:fonts.body,
        fontSize:'16px',
        position:'relative',
        height:'60px',
        boxShadow:shadows.lvl3,
        padding:'0 15px'
    },
    fixed: {
        position:'fixed',
        zIndex:'10',
        top:'0',
        left:'0',
        width:'100%'
    },
    // Themes
    blue: {
        background:colors.blue,
        color:colors.white
    },
    white: {
        background:colors.white,
        color:colors.black
    },
    left: {
        float:'left',
        height:'100%'
    },
    right: {
        float:'right',
        height:'100%'
    },
    center: {
        position:'absolute',
        left:'50%',
        height:'100%',
        transform:'translateX(-50%)'
    }
};

class SubHeader extends React.Component {
    
    render() {
        const { classes, theme, fixed, left, right, center } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={`${classes.subHeader}${theme ? ` ${classes[theme]}` : classes.blue}${fixed ? ` ${classes.fixed}` : ''}`}>
                    {left && <Flexbox display="flex" alignItems="center" className={classes.left}>{left}</Flexbox>}
                    {right && <Flexbox display="flex" alignItems="center" className={classes.right}>{right}</Flexbox>}
                    {center && <Flexbox display="flex" alignItems="center" className={classes.center}>{center}</Flexbox>}
                </div>
            </div>
        );
    }
}

SubHeader.defaultProps = {
    fixed: false,
    theme: "blue"
};

SubHeader.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.string,
    fixed: PropTypes.bool,
    left: PropTypes.node,
    right: PropTypes.node,
    center: PropTypes.node
};

export default injectSheet(styles)(SubHeader);