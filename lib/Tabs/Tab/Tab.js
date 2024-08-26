import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import { useTabsContext } from '../context';

function Tab(props) {
  const { currentValue, setCurrentValue } = useTabsContext();

  const { title, size, counter, icon, testId, value, disabled, classes } =
    props;
  const iconSize = size === 'small' ? 16 : 24;

  const onClickHandler = () => {
    if (!disabled) {
      setCurrentValue(value);
    }
  };

  return (
    <button
      role="tab"
      onClick={onClickHandler}
      disabled={disabled}
      className={`${classes.button} ${classes[size]}${
        value === currentValue && !disabled ? ` ${classes.selected}` : ''
      }${!disabled ? ` ${classes.enabled}` : ` ${classes.disabled}`}`}
      type="button"
      id={`tab-${value}`}
      tabIndex={value === currentValue ? 0 : -1}
      data-testid={testId}
      aria-controls={`tabpanel-${value}`}
    >
      {icon ? (
        <Icon
          width={iconSize}
          height={iconSize}
          iconName={icon}
          className={`${classes.icon}${
            value === currentValue && !disabled ? ` ${classes.iconSelected}` : ''
          }${disabled ? ` ${classes.iconDisabled}` : ''}`}
          transition="all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s"
        />
      ) : (
        ''
      )}
      {title}
      {counter ? <span>{counter}</span> : ''}
    </button>
  );
}

Tab.defaultProps = {
  size: 'large'
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  counter: PropTypes.string,
  disabled: PropTypes.bool,
  testId: PropTypes.string
};

export default Tab;
