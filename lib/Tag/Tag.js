import React from 'react';
import PropTypes from 'prop-types';
import Flexbox from '../Flexbox';
const tagSizes = {
	standard: 'standard',
	medium: 'medium',
	big: 'big'
};
/** Tag component with different themes. The tag cannot trigger some actions on click. */
const Tag = ({
	classes,
	children,
	className,
	style,
	theme,
	iconName,
	size
}) => (
	<label
		className={`${classes.tag} ${size ? classes[size] : classes.standard} ${
			theme ? classes[theme] : classes.default
		} ${className || ''}`}
		style={style}
	>
		 <Flexbox display="flex" alignItems="center" wrap="noWrap">
			{iconName && (
				<span
					className={`${classes.icon} ${
						size ? classes[`${size}Icon`] : classes.standardIcon
					} ${theme ? classes[`${theme}Icon`] : classes.defaultIcon}`}
				/>
			)}
			<span
				className={`${classes.tagText} ${
					size ? classes[`${size}TagText`] : classes.standardTagText
				}`}
			>
				{children}
			</span>
		 </Flexbox>
	</label>
);

Tag.defaultProps = {
	theme: 'default',
	size: tagSizes.standard
};

Tag.propTypes = {
	classes: PropTypes.object,
	children: PropTypes.node,
	/** Select a theme for the Tag. */
	theme: PropTypes.string,
	/** Select an icon for the Tag. */
	iconName: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	/** Size in Tag. */
	size: PropTypes.oneOf([tagSizes.standard, tagSizes.medium, tagSizes.big])
};

export default Tag;
