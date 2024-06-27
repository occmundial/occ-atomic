import React from 'react';
import PropTypes from 'prop-types';
import AvatarContent from './AvatarContent';

/**
 * The Avatar component shows a rounded avatar with a profile picture, a gender icon or the first two capital letters of a name.
 * You can use more than one property as a fallback in case one of the props is empty or wrong.
 */
class Avatar extends React.Component {
	render() {
		const {
			classes,
			photo,
			name,
			size = 40,
			id,
			className,
			style,
			onEdit,
			onClick,
			disabled
		} = this.props;
		const isEditable = onEdit || onClick;
		const handleClick = isEditable ? onClick || onEdit: undefined;
		const tabIndexValue = isEditable && !disabled ? 0 : undefined;
		const combinedClasses = `${classes.circle} ${
			isEditable ? `${classes.editable} ` : ''}${
			disabled ? `${classes.disabled} ` : ''} ${className}`;
		
		return (
			<div
				id={id}
				className={combinedClasses}
				onClick={handleClick}
				tabIndex={tabIndexValue}
				style={{
					...style,
					width: size,
					height: size
				}}
			>
				<AvatarContent
					photo={photo}
					name={name}
					size={size}
					onEdit={onEdit}
					onClick={onClick}
					disabled={disabled}
				/>
			</div>
		);
	}
}

Avatar.propTypes = {
	classes: PropTypes.object.isRequired,
	/** A url to show a photo as the avatar. */
	photo: PropTypes.string,
	/** Pass a name to show two initials. */
	name: PropTypes.string,
	/** The size of the avatar. */
	size: PropTypes.number,
	/** A function to handle the click action for editing. */
	onEdit: PropTypes.func,
	/** A function to handle the click. */
	onClick: PropTypes.func,
	/** Determines if the avatar is disabled. */
	disabled: PropTypes.bool,
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
};

export default Avatar;
