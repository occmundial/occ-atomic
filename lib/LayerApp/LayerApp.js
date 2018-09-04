import React from 'react';
import PropTypes from 'prop-types';

import SubHeader from '../SubHeader';

/**
* The LayerApp component is a wrapper for the SubHeader component that also includes a content block.
* It is meant to be used as an overlay screen, in front of the main content.
* There are no examples included, since the LayerApp component occupies the whole screen in first plane.
*/
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
    /** The theme to use in the LayerApp. The options are blue and white. */
    theme: PropTypes.string,
    /** This property fixes the LayerApp's header to the top of the screen. */
    fixed: PropTypes.bool,
    /** Content to display on the left of the header. */
    left: PropTypes.node,
    /** Content to display on the right of the header. */
    right: PropTypes.node,
    /** Content to display on the center of the header. */
    center: PropTypes.node
};

export default LayerApp;