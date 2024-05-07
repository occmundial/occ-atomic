import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
/**
 *
 * A floating action button appears in front of all screen content as a circular shape with an icon in its center.
 */

const Fab = props => {
	const {
    size,
		classes,
		className,
		testId,
		icon,
		onClick,
		href,
		target,
		rel,
		disabled,
		id
	} = props;

  let classNames = classes.fab;
  if (className) classNames += ` ${className}`;
	if (disabled) classNames += ` ${classes.disabled}`;

	return (
		<Button
			size={size}
			icon={icon}
			onClick={onClick}
			href={href}
			target={target}
			rel={rel}
			disabled={disabled}
			round
			testId={testId}
			className={classNames}
			id={id}
			theme="tertiary"
		/>
	);
};

Fab.propTypes = {
	classes: PropTypes.object.isRequired,
	/** Use the name of any of the icons available in the library. */
	icon: PropTypes.string.isRequired,
	/** The fab has three different sizes: sm, md, lg. */
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	/** It disables the button. */
	disabled: PropTypes.bool,
	/** The function to call when the button is clicked. */
	onClick: PropTypes.func,
	/** Optionally, you can set the href property and use it like a link. */
	href: PropTypes.string,
	/** If you use the href property, you can also define the target. */
	target: PropTypes.string,
	/** If you use the href property, you can also define the rel attribute. */
	rel: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
	/** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
	testId: PropTypes.string
};

export default Fab;
