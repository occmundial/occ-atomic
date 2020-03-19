import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import useStyles from './styles';

/** Tag component with different themes. The tag cannot trigger some actions on click. */
const Tag = props => {
	const { children, className, style, theme, iconName } = props;
	const classes = useStyles(props);
	return (
		<label
			className={classnames(
				classes.tag,
				{ [classes[theme]]: theme },
				{ [classes.default]: !theme },
				className
			)}
			style={style}
		>
			{iconName && (
				<span
					className={classnames(
						classes.icon,
						{ [classes[`${theme}Icon`]]: theme },
						{ [classes.defaultIcon]: !theme }
					)}
				/>
			)}
			<span className={classes.tagText}>{children}</span>
		</label>
	);
};

Tag.defaultProps = {
	theme: 'default'
};

Tag.propTypes = {
	classes: PropTypes.object,
	children: PropTypes.node,
	/** Select a theme for the Tag. */
	theme: PropTypes.string,
	/** Select an icon for the Tag. */
	iconName: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
};

export default Tag;
