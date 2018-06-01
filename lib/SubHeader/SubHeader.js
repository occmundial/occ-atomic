import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Flexbox from '../Flexbox';

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

export default SubHeader;