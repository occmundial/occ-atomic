import React from 'react';
import PropTypes from 'prop-types';
import Tip from '../Tip';

const Banner = ({
  id,
  style,
  className,
  children,
  onClose,
  cta,
  theme = 'promote',
  size = 'large',
  testId
}) => {
  return (
    <Tip
      id={id}
      style={style}
      className={className}
      onClose={onClose}
      banner
      cta={cta}
      theme={theme}
      icon
      size={size}
      testId={testId}
    >
      {children}
    </Tip>
  );
};

Banner.propTypes = {
  winWidth: PropTypes.number,
  /** Text of the tip. If you put text between two * characters that text will be displayed as bold. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Icon name to show on the left. */
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
  cta: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func
  }),
  theme: PropTypes.oneOf(['info', 'warning', 'success', 'error', 'promote']),
  size: PropTypes.oneOf(['large', 'small']),
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string,
};

export default Banner;
