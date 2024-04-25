import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Text';
import Icon from '../../Icon';
import Flexbox from '../../Flexbox';
import colors from '../../subatomic/colors';

const Toast = ({ classes, theme, title, description, action, hasIcon, closing, onClose, pauseTimer, resumeTimer }) => {
	const getIconData = () => {
		switch(theme) {
			case 'success':
				return { icon: 'check-circle', color: colors.bgWhite };
			case 'error':
				return { icon: 'x-circle', color: colors.bgWhite };
			case 'info':
				return { icon: 'info-circle', color: colors.bgWhite };
			case 'warning':
				return { icon: 'alert', color: colors.grey900 };
		}
	};
	const textColor = theme === 'warning' ? {} : {white: true };
	const iconData = hasIcon ? getIconData() : null;
	const onActionClick = (action) => {
		action.onClick();
		onClose();
	};
	return (
		<div
			className={`${classes.toast} ${classes[theme]}${closing ? ` ${classes.closing}` : ''}`}
			onMouseEnter={pauseTimer}
			onMouseLeave={resumeTimer}
		>
			<Flexbox display="flex" className={classes.content}>
				<Flexbox display="flex" alignItems="center">
					{hasIcon && <Icon iconName={iconData.icon} colors={[iconData.color]} className={classes.icon} />}
					<Flexbox flex="1">
						{title && <Text subheading {...textColor}>{title}</Text>}
						{description && <Text {...textColor}>{description}</Text>}
					</Flexbox>
				</Flexbox>
				{action && (
					<button className={classes.action} onClick={() => onActionClick(action)}>
						<Flexbox display="flex" alignItems="center" className={classes.actionWrap}>
							<Text {...textColor} strong className={classes.actionText}>{action.label}</Text>
						</Flexbox>
					</button>
				)}
			</Flexbox>
		</div>
	);
};

Toast.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
	title: PropTypes.string,
	description: PropTypes.string,
	action: PropTypes.object,
	hasIcon: PropTypes.bool,
	onClose: PropTypes.func.isRequired
};

export default Toast;
