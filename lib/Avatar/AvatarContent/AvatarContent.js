import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import colors from '../../tokens/colors.json';

const capitalLetter = (name) => {
    if (name) {
        let capitals = name.toUpperCase().split(" ");
        capitals = capitals.filter(Boolean);
        return `${capitals[0] ? capitals[0].charAt(0) : 'N'}${
            capitals[1] ? capitals[1].charAt(0) : 'O'
        }`;
    }
    return "";
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
            {!photo && !name && (
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
            {name && (
                <span
                    className={`${classes.capital} ${
                        disabled ? classes.disabledCapital : ''
                    }`}
                    style={size ? { transform: `scale(${size / 40})` } : {}}
                >
                    {capitalLetter(name)}
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