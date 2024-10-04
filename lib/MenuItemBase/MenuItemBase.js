import PropTypes from 'prop-types';
import React from 'react';

function MenuItemBase({
  classes,
  alignItems = 'center',
  className,
  nonActivatable,
  dense,
  disablePadding = false,
  disableGutters = false,
  children,
  selected = false,
  component = 'div',
  ...props
}, ref) {
  let classNames = classes.root;
  classNames += className ? ` ${className}` : '';
  classNames += !disablePadding
    ? dense
      ? ` ${classes.paddingVerticalDense}`
      : ` ${classes.paddingVertical}`
    : '';
  classNames += !disablePadding && !disableGutters
    ? ` ${classes.paddingHorizontal}` : '';
  classNames += alignItems === 'center'
    ? ` ${classes.alignItemsCenter}`
    : ` ${classes.alignItemsStart}`;
  classNames += component === 'a'
    ? ` ${classes.containerAnchor}` : '';
  classNames += selected ? ` ${classes.selected}` : '';
  classNames += !nonActivatable ? ` ${classes.activatable}` : '';

  return React.createElement(
    component,
    {
      ref,
      className: classNames,
      tabIndex: '0',
      ...props
    },
    children
  );
}

export default React.forwardRef(MenuItemBase);

MenuItemBase.propTypes = {
  classes: PropTypes.object,
  /** Defines the align-items style property.  */
  alignItems: PropTypes.oneOf(['center', 'start']),
  /** Adds classes to the root container. */
  className: PropTypes.string,
  /** Adds styles to the root container. */
  style: PropTypes.object,
  /** Use to remove hover, focus and active stylings. */
  nonActivatable: PropTypes.bool,
  /** If true, compact vertical padding designed for keyboard and mouse input is used. The prop defaults to the value inherited from the parent List component.  */
  dense: PropTypes.bool,
  /** If true, compact vertical padding designed for keyboard and mouse input is used. The prop defaults to the value inherited from the parent List component. */
  disablePadding: PropTypes.bool,
  /** If true, the left and right padding is removed. */
  disableGutters: PropTypes.bool,
  /** The content of the component.   */
  children: PropTypes.node,
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  selected: PropTypes.bool,
  /** If true, the children won't be wrapped by a Text component. This can be useful to render an alternative Text variant by wrapping the children text. */
  component: PropTypes.elementType
};
