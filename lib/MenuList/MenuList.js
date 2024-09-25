import React from 'react';
import PropTypes from 'prop-types';
import MenuListProvider from '../Provider/MenuListProvider';

/** MenuList wrapper component. */
function MenuList({
  classes,
  children,
  className,
  component = 'menu',
  padding = 'size-2',
  dense,
  ...props
}, ref) {
  let containerClasses = classes.container;
  containerClasses += padding ? ` ${classes[padding]}` : '';
  containerClasses += className ? ` ${className}` : '';

  return (
    <MenuListProvider dense={dense}>
      {React.createElement(
        component,
        {
          className: containerClasses,
          ref,
          ...props
        },
        children
      )}
    </MenuListProvider>
  );
}

export default React.forwardRef(MenuList);

MenuList.propTypes = {
  classes: PropTypes.object,
  /** The content of the component. */
  children: PropTypes.node,
  /** Adds classes to the root container. */
  className: PropTypes.string,
  /** Adds or removes padding to the root container. */
  padding: PropTypes.oneOf([false, "size-4", "size-3", "size-0", "size-1", "size-2", "size-5", "size-6", "size-7", "size-8", "size-9", "size-10", "size-11", "size-12", "base-value"]),
  /** If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items. The prop is available to descendant components as the dense context. */
  dense: PropTypes.bool,
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component: PropTypes.elementType
};