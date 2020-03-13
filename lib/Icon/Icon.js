import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import useStyles from './styles';

/** Component to display any of the icons on the library. */
const Icon = (props) => {
    const { className, style, id, onClick, alt } = props;
    const classes = useStyles(props);
    const IconType = onClick ? 'button' : 'span';
    return (
        <IconType
            id={id}
            className={classnames(
                classes.icon,
                { [classes.click]: onClick },
                className
            )}
            style={style}
            onClick={onClick}
            alt={alt}
        />
    );
};

Icon.defaultProps = {
    transition: '0.3s all'
};

Icon.propTypes = {
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
