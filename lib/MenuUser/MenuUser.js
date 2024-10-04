import React from 'react';
import PropTypes from 'prop-types';
import MenuItemBase from '../MenuItemBase';
import Text from '../Text';
import Avatar from '../Avatar';
import idx from 'idx';
import { useMenuListContext } from '../Provider/MenuListProvider';

/** MenuItem component with Avatar and subtitle. */
function MenuUser({
  classes,
  disableText = false,
  className,
  title,
  subtitle,
  titleTextProps,
  subtitleTextProps,
  avatarProps,
  dense,
  children,
  style,
  component = 'div',
  ...menuItemprops
}, ref) {
  const listContext = useMenuListContext();
  const isDense = typeof dense === 'undefined' ? listContext.dense : dense;
  const primary = title || children;
  const titleText = !primary ? null : disableText ? (
    primary
  ) : (
    <Text
      className={classes.title + (idx(className, _ => _.title) ? ` ${className.title}` : '')}
      tag="span"
      bodyLargeStrong={!isDense}
      bodyRegularStrong={isDense}
      {...titleTextProps}
    >
      {primary}
    </Text>
  );

  const subtitleText = !subtitle ? null : disableText ? (
    subtitle
  ) : (
    <Text
      className={classes.subtitle + (idx(className, _ => _.subtitle) ? ` ${className.subtitle}` : '')}
      tag="span"
      small
      corpSecondary
      {...subtitleTextProps}
    >
      {subtitle}
    </Text>
  );

  return (
    <MenuItemBase
      className={className && className.root}
      component={component}
      ref={ref}
      style={style && style.root}
      {...menuItemprops}
    >
      {avatarProps && (
        <div
          className={
            classes.avatarContainer + (idx(className, _ => _.avatarContainer)
              ? ` ${className.avatarContainer}` : '')
          }
          style={style && style.avatarContainer}
        >
          <Avatar size={isDense ? 40 : 56} {...avatarProps} />
        </div>
      )}
      <div
        className={
          classes.textContainer + (idx(className, _ => _.textContainer)
            ? ` ${className.textContainer}` : '')
        }
        style={style && style.textContainer}
      >
        {titleText}
        {subtitleText}
      </div>
    </MenuItemBase>
  );
}

export default React.forwardRef(MenuUser);

MenuUser.propTypes = {
  classes: PropTypes.object,
  /** Defines the align-items style property.  */
  alignItems: PropTypes.oneOf(['center', 'start']),
  /** Adds classes to the root, text, iconRight, iconLeft containers.  */
  className: PropTypes.exact({
    root: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    avatarContainer: PropTypes.string,
    textContainer: PropTypes.string
  }),
  /** Adds styles to the root, text, iconRight, iconLeft containers.  */
  style: PropTypes.exact({
    root: PropTypes.object,
    textContainer: PropTypes.object,
    avatarContainer: PropTypes.objects
  }),
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
  component: PropTypes.elementType,
  /** If true, the children won't be wrapped by a Text component. This can be useful to render an alternative Text variant by wrapping the children text. */
  disableText: PropTypes.bool,
  /** The title content element. */
  title: PropTypes.node,
  /** These props will be forwarded to the title Text component (as long as disableText is not true). */
  titleTextProps: PropTypes.object,
  /** The subtitle content element. */
  subtitle: PropTypes.node,
  /** These props will be forwarded to the subtitle Text component (as long as disableText is not true). */
  subtitleTextProps: PropTypes.object,
  /** These props will be forwarded to the Avatar component. */
  avatarProps: PropTypes.object
};
