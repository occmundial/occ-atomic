import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import Text from '../../Text';
import colors from '../../subatomic/colors';
import iconSizes from '../../subatomic/iconSizes';

class Choice extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        const { id, onClick } = this.props;
        if (onClick) onClick(id);
    }

    render() {
        const { classes, children, selected, disabled, idPrefix, leftIcon, rightIcon, id } = this.props;
        const iconColor = disabled ? colors.grey200 : selected ? colors.prim : colors.grey900;
        return (
            <button
                className={`${classes.pill}${selected ? ` ${classes.selected}` : disabled ? ` ${classes.disabled}` : ''}`}
                onClick={this.handleOnClick}
                id={idPrefix ? `${idPrefix}${id}` : null}>
                {leftIcon && <Icon className={classes.icon} iconName={leftIcon} colors={[iconColor]} width={iconSizes.small} height={iconSizes.small} />}
                {children && <Text tag="span" className={classes.text} primary={selected} disabled={disabled}>{children}</Text>}
                {rightIcon && <Icon className={classes.icon} iconName={rightIcon} colors={[iconColor]} width={iconSizes.small} height={iconSizes.small} />}
            </button>
        );
    }
}

Choice.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onClick: PropTypes.func,
    children: PropTypes.node,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    idPrefix: PropTypes.string
};

export default Choice;
