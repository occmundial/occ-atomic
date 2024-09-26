import React from 'react';
import PropTypes from 'prop-types';

/** A simple wrapper for applying list styles to the ht tag. */
function MenuDivider({
  classes,
  className,
  style,
  ...props
}, ref) {
  return <hr ref={ref} className={`${classes.root} ${className}`} style={style} {...props} />;
}

export default React.forwardRef(MenuDivider);

MenuDivider.propTypes = {
  classes: PropTypes.object,
  /** Adds classes to the root container. */
  className: PropTypes.string,
  /** Adds styles to the root container. */
  style: PropTypes.object
};