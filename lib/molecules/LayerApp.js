import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

import SubHeader from './SubHeader';

const styles = {
    layerApp: {
        boxSizing:'border-box',
        position:'fixed',
        width:'100%',
        height:'100%',
        overflow:'auto',
        top:'0',
        left:'0',
        fontFamily:fonts.body
    },
    content: {
        boxSizing:'border-box',
        position:'absolute',
        zIndex:'1',
        top:'60px',
        left:'0',
        width:'100%',
        height:'calc(100% - 60px)',
        paddingTop:'30px',
        paddingBottom:'50px'
    },
    blue: {
        background:colors.white
    },
    white: {
        background:colors.white2
    }
};

class LayerApp extends React.Component {
    
    render() {
        const { classes, children, content, theme, fixed, left, right, center } = this.props;
        return (
            <div className={`${classes.layerApp} ${classes[theme]}`}>
                <SubHeader theme={theme} left={left} right={right} center={center} fixed={fixed} />
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        );
    }
}

LayerApp.defaultProps = {
    fixed: false,
    theme: "blue"
};

LayerApp.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    content: PropTypes.node,
    theme: PropTypes.string,
    fixed: PropTypes.bool,
    left: PropTypes.node,
    right: PropTypes.node,
    center: PropTypes.node
};

export default injectSheet(styles)(LayerApp);