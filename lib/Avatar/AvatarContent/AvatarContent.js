import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import colors from '../../tokens/colors.json';

const getInitials = (name) => {
    if (name && name.trim()) {
        const [firstName, lastName] = name
            .trim()
            .replace(/\s+/g, ' ')
            .toUpperCase()
            .split(' ');
        return `${firstName?.charAt(0)}${lastName?.charAt(0)}`;
    }
    return null;
  };

const AvatarContent = ({
    classes,
    photo,
    name,
    size,
    onEdit,
    onClick,
    disabled
}) => {
    const initials = getInitials(name);
    return (
        <div className={classes.wrap}>
            <div
                className={`${classes.cont} ${
                    onClick ? ` ${classes.clickable}` : ''}${
                    onEdit ? ` ${classes.editable}` : ''}${
                    disabled ? ` ${classes.disabled}` : ''}${
                    photo ? ` ${classes.photo}` : ''}${
                    photo && (onClick || onEdit) ? ` ${classes.hoverPhoto}` : ''}
                `}
                style={
                    photo
                        ? {
                            background: `url('${photo}') no-repeat center center / cover`
                        }
                        : null
                }
            >
            {!photo && !initials && (
                <Icon
                    iconName="person"
                    className={classes.person}
                    colors={[
                    disabled
                        ? colors.icon.default.disabled
                        : colors.icon.brand.default
                    ]}
                    size={24}
                    style={size ? { transform: `scale(${size / 40})` } : {}}
                />
            )}
            {initials && (
                <span
                    className={`${classes.initials} ${
                        disabled ? classes.disabledInitials : ''
                    }`}
                    style={size ? { transform: `scale(${size / 40})` } : {}}
                >
                    {initials}
                </span>
            )}
            <div className={classes.overlay}>
                {onEdit && !disabled && (
                    <Icon
                        iconName="camera"
                        className={classes.camera}
                        colors={[
                            disabled
                            ? colors.icon.default.disabled
                            : colors.icon.inverse.default
                        ]}
                        size={24}
                        style={size ? { transform: `scale(${size / 40})` } : {}}
                    />
                )}
            </div>
        </div>
    </div>
)};

AvatarContent.propTypes = {
    classes: PropTypes.object,
    photo: PropTypes.string,
    gender: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    onEdit: PropTypes.func,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

export default AvatarContent;