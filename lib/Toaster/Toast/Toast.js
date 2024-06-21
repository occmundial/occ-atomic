import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import Flexbox from '../../Flexbox';
import colors from '../../tokens/colors.json';
import Button from '../../Button';

const icons = {
  info: 'info-circle',
  warning: 'alert',
  success: 'check-circle',
  error: 'x-circle',
  promote: null
};

const colorTextClasses = {
  info: 'textInfo',
  promote: 'textPromote',
  warning: 'textWarning',
  success: 'textSuccess',
  error: 'textError'
};

const Toast = ({
  classes,
  theme,
  title,
  description,
  action,
  closing,
  onClose,
  pauseTimer,
  resumeTimer,
  closeIcon,
  testId
}) => {
  const onActionClick = action => {
    action.onClick();
    onClose();
  };

  return (
    <div
      className={`${classes.toast} ${classes[theme]}${
        closing ? ` ${classes.closing}` : ''
      }`}
      {...(!closeIcon && { onMouseEnter: pauseTimer })}
      {...(!closeIcon && { onMouseLeave: resumeTimer })}
    >
      <Flexbox display="flex" justifyContent="between">
        <Flexbox display="flex" alignItems="center" alignSelf="center">
          {theme !== 'promote' && (
            <Icon
              iconName={icons[theme]}
              className={classes.icon}
              colors={[
                theme === 'info'
                  ? colors.icon.brand.default
                  : colors.icon[theme]
              ]}
            />
          )}
          <Flexbox
            display="flex"
            flex="1"
            className={classes.content}
            alignSelf="start"
          >
            <Flexbox display="flex" direction="col">
              <p
                className={`${classes.title} ${
                  classes[colorTextClasses[theme]]
                }`}
              >
                {title}
              </p>
              {description && (
                <p
                  className={`${classes.description} ${
                    classes[colorTextClasses[theme]]
                  }`}
                >
                  {description}
                </p>
              )}
            </Flexbox>
            {action ? (
              <a
                className={`${classes.actionText} ${
                  classes[colorTextClasses[theme]]
                }`}
                onClick={() => onActionClick(action)}
                {...(testId && {
                  'data-testid': `${testId}__link`
                })}
              >
                {action.label}
              </a>
            ) : null}
          </Flexbox>
        </Flexbox>
        {!action && closeIcon ? (
          <Button
            onClick={onClose}
            className={classes.closeIcon}
            icon="x"
            size="md"
            theme={theme === 'promote' ? 'ghostWhite' : 'ghostGrey'}
            {...(testId && {
              testId: `${testId}__close-icon`
            })}
          />
        ) : null}
      </Flexbox>
    </div>
  );
};

Toast.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  action: PropTypes.object,
  closing: PropTypes.bool,
  pauseTimer: PropTypes.func,
  resumeTimer: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  closeIcon: PropTypes.bool,
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string
};

export default Toast;
