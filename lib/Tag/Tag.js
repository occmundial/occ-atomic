import React from 'react';
import PropTypes from 'prop-types';

/** Tag component with different themes. The tag cannot trigger some actions on click. */
class Tag extends React.Component {    
    render() {
        const { classes, children, className, style, theme, iconName } = this.props;
        return (
            <label className={`${classes.tag} ${theme ? classes[theme] : classes.default}${className ? ` ${className}` : ''}`} style={style}>
                {iconName && <span className={`${classes.icon} ${theme ? classes[`${theme}Icon`] : classes.defaultIcon}`} />}
                <span className={`${classes.tagText}`}>{children}</span>
            </label>
        );
    }
}

Tag.defaultProps= {
    theme: "default",
};

Tag.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    /** Select a theme for the Tag. */
    theme: PropTypes.string,
    /** Select an icon for the Tag. */
    iconName: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Tag;