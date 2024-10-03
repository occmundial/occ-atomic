import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Button from '../Button';

/** Button with avatar designed to be used with the NavTab component */
function NavAvatarButton({
  classes,
  name,
  disabled,
  darkMode = false,
  noCompact,
  theme,
  photo,
  className,
  ...buttonProps
}) {
  let buttonClasses = classes.avatarButton;
  buttonClasses += !noCompact ? ` ${classes.mini}` : '';
  buttonClasses += className ? ` ${className}` : '';
  
  return (
    <Button
      iconRight="chevron-down"
      theme={theme ? theme : darkMode ? 'ghostWhite' : 'ghostGrey'}
      disabled={disabled}
      {...buttonProps}
      className={buttonClasses}
    >
      <Avatar photo={photo} name={name} disabled={disabled} />
    </Button>
  );
}

NavAvatarButton.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Button`s container ids */
  id: PropTypes.string,
  /** Button`s container classname */
  className: PropTypes.string,
  /** Button`s container style */
  style: PropTypes.object,
  /** If true sets button ghostGrey theme otherwise sets ghostWhite theme. This props is ignored is theme is set.  */
  darkMode: PropTypes.bool,
  /** Restores button default paddings  */
  noCompact: PropTypes.bool,
  /** There are four themes available: main, secondary, white, blue, flat. */
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'tertiaryWhite',
    'ghostPink',
    'ghostGrey',
    'ghostWhite'
  ]),
  /** The button has three different sizes: sm, md, lg. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** The content of the component. */
  children: PropTypes.node,
  /** It disables the button and shows it with the proper theme. */
  disabled: PropTypes.bool,
  /** The loading property disables the button and shows a loading icon spinning. */
  loading: PropTypes.bool,
  /** The function to call when the button is clicked. */
  onClick: PropTypes.func,
  /** The function to call when the mouse is down on the button. */
  onMouseDown: PropTypes.func,
  /** The function to call when the mouse is up on the button. */
  onMouseUp: PropTypes.func,
  /** The function to call when the mouse moves out of the button. */
  onMouseOut: PropTypes.func,
  /** Optionally, you can set the href property and use it like a link. */
  href: PropTypes.string,
  /** If you use the href property, you can also define the target. */
  target: PropTypes.string,
  /** If you use the href property, you can also define the rel attribute. */
  rel: PropTypes.string,
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string,
  /** A url to show a photo as the avatar. */
  photo: PropTypes.string,
  /** Pass a name to show two initials. */
  name: PropTypes.string
};

export default NavAvatarButton;
