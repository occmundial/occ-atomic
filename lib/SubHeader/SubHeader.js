import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Flexbox from '../Flexbox';

/** Component to display a Header with content to the left, right and center. */
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
    /** The theme to use in the SubHeader. The options are blue and white. */
    theme: PropTypes.string,
    /** This property fixes the SubHeader to the top of the screen. */
    fixed: PropTypes.bool,
    /** Content to display on the left. */
    left: PropTypes.node,
    /** Content to display on the right. */
    right: PropTypes.node,
    /** Content to display on the center. */
    center: PropTypes.node
};

export default SubHeader;