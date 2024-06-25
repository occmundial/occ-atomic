import React from 'react';
import PropTypes from 'prop-types';

import Flexbox from '../Flexbox';
import Icon from '../Icon';
import Button from '../Button';
import TipText from './TipText';
import colors from '../tokens/colors.json';

const icons = {
  info: 'info-circle',
  warning: 'alert',
  success: 'check-circle',
  error: 'x-circle',
  promote: null
};

const PROMOTE = 'promote';

const colorTextClasses = {
  info: 'textInfo',
  promote: 'textPromote',
  warning: 'textWarning',
  success: 'textSuccess',
  error: 'textError'
};
/** Tip component with different themes (info, warning, success & error). You can pass a string or a react element as the children prop, but the bold regex will only work with strings. */
const Tip = ({
  id,
  style,
  className,
  classes,
  icon,
  theme,
  banner,
  onClose,
  children,
  cta,
  size = 'large',
  testId
}) => {
  return (
    <div id={id} className={className} style={style}>
      <Flexbox
        justifyContent="start"
        display="flex"
        className={`${classes.container} ${classes[theme]}${
          banner ? ` ${classes.noBorderRadius}` : ''
        }`}
      >
        <Flexbox display="flex" flex="1" alignItems="stretch">
          {icon && theme !== PROMOTE && (
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
            direction={size === 'small' ? 'col' : 'row'}
            justifyContent={banner ? 'center' : 'start'}
            className={`${classes.textContainer}${
              banner ? ` ${classes.maxWidth}` : ''
            }`}
          >
            <TipText
              classes={`${classes.normalText} ${
                classes[colorTextClasses[theme]]
              }${!banner ? ` ${classes.growText}` : ''}`}
              text={children}
            />
            {cta && (
              <a
                className={`${classes.cta} ${classes[colorTextClasses[theme]]}${
                  size === 'large' && banner
                    ? ` ${classes.ctaBanner}`
                    : size === 'large'
                    ? ` ${classes.ctaAlert}`
                    : ''
                }`}
                href={cta.href}
                target={cta.target}
                onClick={cta.onClick}
                {...(testId && {
                  'data-testid': `${testId}__link`
                })}
              >
                {cta.text}
              </a>
            )}
          </Flexbox>
        </Flexbox>
        {onClose && (
          <Button
            onClick={onClose}
            size="md"
            className={
              size === 'small'
                ? classes.closeIconSmallMargin
                : classes.closeIconMargin
            }
            icon="x"
            theme={theme === PROMOTE ? 'ghostWhite' : 'ghostGrey'}
            {...(testId && {
              testId: `${testId}__close-icon`
            })}
          />
        )}
      </Flexbox>
    </div>
  );
};

Tip.defaultProps = {
  theme: 'info'
};

Tip.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Theme of the Tip. */
  theme: PropTypes.oneOf(['info', 'warning', 'success', 'error', 'promote']),
  /** Text of the tip. If you put text between two * characters that text will be displayed as bold. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  size: PropTypes.oneOf(['large', 'small']),
  /** Call to action. Appended after the children's text. */
  cta: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func
  }),
  /** Boolean to show an icon. */
  icon: PropTypes.bool,
  /** Sets content centered and remove border radius. */
  banner: PropTypes.bool,
  /** Function to call on click of the x icon. */
  onClose: PropTypes.func,
  /** Extra padding on the right of the x icon. */
  spacedClose: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string,
};

export default Tip;
