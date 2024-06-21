import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import colors from '../../tokens/colors.json';

function handleOnClick(id, onClick) {
  if (onClick) onClick(id);
}

function handleOnClose(e, id, onClose) {
  e.stopPropagation();
  if (onClose) onClose(id);
}

const Stack = ({
  classes,
  children,
  id,
  disabled,
  onClick,
  onClose,
  idPrefix,
  testId
}) => (
  <button
    className={`${classes.pill}${disabled ? ` ${classes.disabled}` : ''}`}
    disabled={disabled}
    onClick={() => {
      handleOnClick(id, onClick);
    }}
    id={idPrefix ? `${idPrefix}${id}` : null}
    data-testid={testId ? `${testId}${id}` : null}
  >
    {children && (
      <span className={`${classes.text}${disabled ? ` ${classes.textDisabled}` : ''}`}>
        {children}
      </span>
    )}
    {onClose && (
      <span
        className={classes.closeCont}
        onClick={e => handleOnClose(e, id, onClose)}
      >
        <Icon
          className={classes.close}
          iconName="cross"
          colors={[disabled ? colors.icon.brand.disabled : colors.icon.brand.default]}
          width={16}
          height={16}
        />
      </span>
    )}
  </button>
);

Stack.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  idPrefix: PropTypes.string,
  testId: PropTypes.string
};

export default Stack;
