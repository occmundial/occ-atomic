import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import colors from '../../tokens/colors.json';

const getStylesByStatus = (selected, disabled) => {
  if (selected) {
    if (disabled) {
      return {
        iconColor: colors.icon.inverse.disabled,
        button: 'selectedDisabled',
        text: 'textSelectedDisabled',
      };
    }
    return {
      iconColor: colors.icon.inverse.default,
      button: 'selected',
      text: 'textSelected',
    };
  }
  if (disabled) {
    return {
      iconColor: colors.icon.brand.disabled,
      button: 'disabled',
      text: 'textDisabled'
    };
  }
  return {
    iconColor: colors.icon.brand.default,
    button: 'enabled',
    text: 'textEnabled'
  };
};

const Choice = (props) => {
  const {
    classes,
    children,
    selected,
    disabled,
    idPrefix,
    testId,
    leftIcon,
    rightIcon,
    onClick,
    id
  } = props;
  
  const handleOnClick = useCallback(() => onClick(id), [onClick, id]);
  const conditionedStyles = useMemo(() => getStylesByStatus(!!selected, !!disabled), [selected, disabled]);

  return (
    <button
      className={`${classes.pill} ${classes[conditionedStyles.button]}`}
      {...(onClick && { onClick: handleOnClick})}
      disabled={disabled}
      id={idPrefix ? `${idPrefix}${id}` : null}
      data-testid={testId ? `${testId}${id}` : null}
    >
      {leftIcon && (
        <Icon
          iconName={leftIcon}
          colors={[conditionedStyles.iconColor]}
          width={18}
          height={18}
        />
      )}
      {children && (
        <span
          className={`${classes.text} ${classes[conditionedStyles.text]}`}
        >
          {children}
        </span>
      )}
      {rightIcon && (
        <Icon
          iconName={rightIcon}
          colors={[conditionedStyles.iconColor]}
          width={18}
          height={18}
        />
      )}
    </button>
  );
};

Choice.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  idPrefix: PropTypes.string,
  testId: PropTypes.string
};

export default Choice;
