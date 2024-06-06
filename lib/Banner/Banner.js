import React from 'react';
import PropTypes from 'prop-types';
import grid from '../subatomic/grid';
import Tip from '../Tip';

const Banner = ({
  id, style, className, children, onClose, winWidth, cta, theme = 'promote'
}) => {
  return (
    <Tip
      id={id}
      style={style}
      className={className}
      onClose={onClose}
      size={winWidth < grid.xs ? 'small' : 'large'}
      center
      type="banner"
      cta={cta}
      theme={theme}
      icon
    >{children}</Tip>
  );
};

Banner.propTypes = {
  winWidth: PropTypes.number,
  /** Text of the tip. If you put text between two * characters that text will be displayed as bold. */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
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
};

export default Banner;
