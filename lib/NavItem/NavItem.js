import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

/** This component is used inside the NavTab component. You can just pass a link and a text, wrap it or send a custom link component. */
class NavItem extends React.Component {
  render() {
    const {
      classes,
      customComponent,
      customProps,
      link,
      target,
      onClick,
      children,
      selected,
      notification,
      white,
      small,
      className,
      testId
    } = this.props;
    const AnchorTag = customComponent ? customComponent : 'a';
    return (
      <AnchorTag
        className={`${classes.link}${className ? ` ${className}` : ''}`}
        href={!selected ? link : null}
        onClick={!selected ? onClick : null}
        target={target}
        {...(customComponent && customProps)}
        data-testid={testId}
      >
        <Text
          tag="span"
          white={white}
          small={small}
          className={`${classes.text}${selected ? ` ${classes.selected}` : ''}`}
        >
          {children}
        </Text>
        {notification && <span className={classes.notification} />}
      </AnchorTag>
    );
  }
}

NavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  /** URL for the anchor tag. */
  link: PropTypes.string,
  /** Target for the link. */
  target: PropTypes.string,
  /** Function to call on click, instead of passing a link. */
  onClick: PropTypes.func,
  /** Set the item as selected. */
  selected: PropTypes.bool,
  /** Renders the text as small. */
  small: PropTypes.bool,
  /** Shows a red circle floating in the top right side of the item. */
  notification: PropTypes.bool,
  /** White theme for the NavItem. */
  white: PropTypes.bool,
  /** Use a custom component to replace the default <a> tag. This is useful if you use a routing library. */
  customComponent: PropTypes.node,
  /** Custom properties to apply directly to the custom component. */
  customProps: PropTypes.object,
  className: PropTypes.string,
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string
};

export default NavItem;
