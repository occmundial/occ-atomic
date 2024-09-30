import React from 'react';
import PropTypes from 'prop-types';
import MenuItemBase from '../MenuItemBase';
import Icon from '../Icon';
import Text from '../Text';
import idx from 'idx';
import colors from '../tokens/colors.json';
import { useMenuListContext } from '../Provider/MenuListProvider';

/** MenuItem component with left and right icons. */
function MenuItem({
  classes,
  disableText = false,
  className,
  textProps,
  iconRightProps,
  iconLeftProps,
  dense,
  children,
  style,
  component = 'div',
  ...menuItemprops
}, ref) {
  const listContext = useMenuListContext();
  const isDense = typeof dense === 'undefined' ? listContext.dense : dense;
  let leftIconContainerClasses = classes.iconContainer;
  leftIconContainerClasses += idx(className, _ => _.iconLeftContainer)
    ? ` ${className.iconLeftContainer}` : '';
  leftIconContainerClasses += isDense
    ? ` ${classes.iconContainerSizeDense}` : ` ${classes.iconContainerSize}`;

  let textContainerClasses = classes.textContainer;
  textContainerClasses += idx(className, _ => _.textContainer) ? ` ${className.textContainer}` : '';

  let rightIconContainerClasses = classes.iconContainer;
  leftIconContainerClasses += idx(className, _ => _.iconRightContainer)
    ? ` ${className.iconRightContainer}` : '';
  rightIconContainerClasses += ` ${classes.iconRight}`;
  rightIconContainerClasses += isDense
    ? ` ${classes.iconContainerSizeDense}` : ` ${classes.iconContainerSize}`;

  return (
    <MenuItemBase
      className={idx(className, _ => _.root)}
      dense={isDense}
      component={component}
      ref={ref}
      style={style && style.root}
      {...menuItemprops}
    >
      {idx(iconLeftProps, _ => _.iconName) && (
        <div
          className={leftIconContainerClasses}
          style={style && style.iconLeftContainer}
        >
          <Icon
            width={16}
            height={16}
            colors={[colors.icon.default.bold]}
            {...iconLeftProps}
          />
        </div>
      )}
      {
        <div
          className={textContainerClasses}
          style={style && style.textContainer}
        >
          {disableText ? (
            children
          ) : (
            <Text
              bodyRegularStrong={!isDense}
              bodySmallStrong={isDense}
              tag="span"
              {...textProps}
            >
              {children}
            </Text>
          )}
        </div>
      }
      {idx(iconRightProps, _ => _.iconName) && (
        <div
          className={rightIconContainerClasses}
          style={style && style.iconLeftContainer}
        >
          <Icon
            width={16}
            height={16}
            colors={[colors.icon.default.default]}
            {...iconRightProps}
          />
        </div>
      )}
    </MenuItemBase>
  );
}

export default React.forwardRef(MenuItem);

MenuItem.propTypes = {
  classes: PropTypes.object,
  /** Defines the align-items style property.  */
  alignItems: PropTypes.oneOf(['center', 'start']),
  /** Adds classes to the root, text, iconRight, iconLeft containers.  */
  className: PropTypes.exact({
    root: PropTypes.string,
    textContainer: PropTypes.string,
    iconRightContainer: PropTypes.string,
    iconLeftContainer: PropTypes.string
  }),
  /** Adds styles to the root, text, iconRight, iconLeft containers.  */
  style: PropTypes.exact({
    root: PropTypes.object,
    textContainer: PropTypes.object,
    iconRightContainer: PropTypes.object,
    iconLeftContainer: PropTypes.object
  }),
  /** Use to remove hover, focus and active stylings. */
  nonActivatable: PropTypes.bool,
  /** If true, compact vertical padding designed for keyboard and mouse input is used. The prop defaults to the value inherited from the parent List component.  */
  dense: PropTypes.bool,
  /** If true, compact vertical padding designed for keyboard and mouse input is used. The prop defaults to the value inherited from the parent List component. */
  disablePadding: PropTypes.bool,
  /** If true, the left and right padding is removed. */
  disableGutters: PropTypes.bool,
  /** The content of the component. */
  children: PropTypes.node,
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  selected: PropTypes.bool,
  /** If true, the children won't be wrapped by a Text component. This can be useful to render an alternative Text variant by wrapping the children text. */
  component: PropTypes.elementType,
  /** If true, the children won't be wrapped by a Text component. This can be useful to render an alternative Text variant by wrapping the children text. */
  disableText: PropTypes.bool,
  /**These props will be forwarded to the primary typography component (as long as disableText is not true). */
  textProps: PropTypes.object,
  /** These props will be forwarded to the Icon component. */
  iconRightProps: PropTypes.object,
  /** These props will be forwarded to the Icon component. */
  iconLeftProps: PropTypes.object
};
