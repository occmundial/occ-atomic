import React from 'react';
import PropTypes from 'prop-types';

/** A simple wrapper for applying list styles to the ht tag. */
class MenuDivider extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    const {
      classes,
      className,
      style,
      ...props
    } = this.props;

    return <hr ref={this.ref} className={`${classes.root} ${className}`} style={style} {...props} />; 
  }
}

export default MenuDivider;

MenuDivider.propTypes = {
  classes: PropTypes.object,
  /** Adds classes to the root container. */
  className: PropTypes.string,
  /** Adds styles to the root container. */
  style: PropTypes.object
};