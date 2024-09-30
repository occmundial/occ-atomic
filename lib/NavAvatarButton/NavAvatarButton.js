import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Button from '../Button';

function NavButton({
  classes,
  name,
  disabled,
  dense,
  photo,
  className,
  ...buttonProps
}) {
  let buttonClasses = classes.avatarButton;
  buttonClasses += dense ? ` ${ classes.mini}` : '';
  buttonClasses += className ? ` ${ className}` : '';

  return (
    <Button
      iconRight="chevron-down"
      disabled={disabled}
      {...buttonProps}
      className={buttonClasses}
    >
      <Avatar photo={photo} name={name} disabled={disabled} />
    </Button>
  );

}

NavButton.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Button`s container ids */
  id: PropTypes.string,
  /** Button`s container classname */
  className: PropTypes.string,
  /** Button`s container style */
  style: PropTypes.object,
  /** Mini variant  */
  dense: PropTypes.bool,
  /** The content of the component. */
  children: PropTypes.node,
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
  /** The block property lets the button expand to ocupy the whole width of its parent. */
  block: PropTypes.bool,
  /** It disables the button and shows it with the proper theme. */
  disabled: PropTypes.bool,
  /** Use the name of any of the icons available in the library. */
  icon: PropTypes.string,
  /** Use the name of any of the icons available in the library. The icon will be rendered on the right side of the button. */
  iconRight: PropTypes.string,
  /** Property to make the button round when it only has an icon. */
  round: PropTypes.bool,
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
	name: PropTypes.string,
	/** The size of the avatar. */
	size: PropTypes.number,
};

export default NavButton;
