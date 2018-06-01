import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import SubHeader from '../SubHeader';

class LayerApp extends React.Component {
    
    render() {
        const { classes, children, theme, fixed, left, right, center } = this.props;
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
    theme: PropTypes.string,
    fixed: PropTypes.bool,
    left: PropTypes.node,
    right: PropTypes.node,
    center: PropTypes.node
};

export default LayerApp;