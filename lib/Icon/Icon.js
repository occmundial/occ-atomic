import React from 'react';
import PropTypes from 'prop-types';

/** Component to display any of the icons on the library. */
class Icon extends React.Component {
    
    render() {
        const { classes, className, style, id, onClick, alt } = this.props;
        const IconType = onClick ? 'button' : 'span';
        return (
            <IconType id={id} className={`${classes.icon}${onClick ? ` ${classes.click}` : ''}${className ? ` ${className}` : ''}`} style={style} onClick={onClick} alt={alt} />
        );
    }
}

Icon.defaultProps = {
    transition: '0.3s all'
};

Icon.propTypes = {
    classes: PropTypes.object,
    /** Name of the icon to render. It must match with any of the icons on the library. */
    iconName: PropTypes.string.isRequired,
    /** Width of the icon. By default it will take the value defined on the library for the specified icon. */
    width: PropTypes.number,
    /** Height of the icon. By default it will take the value defined on the library for the specified icon. */
    height: PropTypes.number,
    /** Display property of the icon. By default it will take the value defined on the library for the specified icon. */
    display: PropTypes.string,
    /** Transition for animations. */
    transition: PropTypes.string,
    /** Array with the colors to use in the icon. Some icons use more than one color. By default it will take the value defined on the library for the specified icon. */
    colors: PropTypes.array,
    /** Array with the colors to use on the icon when it's hovered. */
    hover: PropTypes.array,
    /** Function to call when the icon is clicked. */
    onClick: PropTypes.func,
    /** Alt property, in case you need to set it. */
    alt: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Icon;