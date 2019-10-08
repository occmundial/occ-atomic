import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Text';
import Icon from '../../Icon';
import Flexbox from '../../Flexbox';
import colors from '../../subatomic/colors';

const Toast = ({ classes, theme, title, description, hasIcon, closing }) => {
	const getIconData = () => {
		switch(theme) {
			case 'success':
				return {
					icon: 'checkSolid',
					color: colors.bgWhite
				};
			case 'error':
				return {
					icon: 'warning',
					color: colors.bgWhite
				};
			case 'info':
				return {
					icon: 'infoSolid',
					color: colors.bgWhite
				};
			case 'warning':
				return {
					icon: 'warning',
					color: colors.grey900
				};
		}
	};
	const textColor = theme === 'warning' ? {} : {white: true };
	const iconData = hasIcon ? getIconData() : null;
	return (
		<div className={`${classes.toast} ${classes[theme]}${closing ? ` ${classes.closing}` : ''}`}>
			<Flexbox display="flex" alignItems="center">
				{hasIcon && <Icon iconName={iconData.icon} colors={[iconData.color]} className={classes.icon} />}
				<Flexbox flex="1">
					{title && <Text subheading {...textColor}>{title}</Text>}
					{description && <Text {...textColor}>{description}</Text>}
				</Flexbox>
			</Flexbox>
		</div>
	);
};

Toast.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
	title: PropTypes.string,
	description: PropTypes.string,
	hasIcon: PropTypes.bool
};

export default Toast;
