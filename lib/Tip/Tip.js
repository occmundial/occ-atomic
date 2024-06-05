import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Flexbox from '../Flexbox';
import Icon from '../Icon';
import colors from '../tokens/colors.json';

const boldRegex = /\*(.*?)\*/g;

const icons = {
	info: 'info-circle',
	warning: 'alert',
	success: 'check-circle',
	error: 'x-circle',
	promote: null
};

const PROMOTE = 'promote';

const colorTextClasses = {
	info: 'textInfo',
	promote: 'textPromote',
	warning: 'textWarning',
	success: 'textSuccess',
	error: 'textError'
};
/** Tip component with different themes (info, warning, success & error). You can pass a string or a react element as the children prop, but the bold regex will only work with strings. */
const Tip = ({
	id,
	style,
	className,
	classes,
	icon,
	theme,
	noBorderRadius,
	center,
	onClose,
	children,
	cta,
	size = 'large'
}) => {
	const replaceString = text => {
		if (text === '' || typeof text !== 'string') return [text];

		const result = text.replace(boldRegex, (_, txt) => txt);
		return (
			<p
				className={`${classes.normalText} ${classes[colorTextClasses[theme]]}`}
			>
				{result}
			</p>
		);
	};

	const renderText = useCallback(() => {
		return [replaceString(children)];
		}, [children]);

	return (
		<div id={id} className={className} style={style}>
			<Flexbox
				justifyContent="start"
				display="flex"
				className={`${classes.container} ${classes[theme]}${
					noBorderRadius ? ` ${classes.noBorderRadius}` : ''
				}${size === 'small' ? ` ${classes.small}` : ''}`}
			>
				<Flexbox
					display="flex"
					flex="1"
					justifyContent={center ? 'center' : null}
					alignItems="stretch"
				>
					{icon && theme !== PROMOTE && (
						<Icon
							iconName={icons[theme]}
							className={classes.icon}
							colors={[theme === 'info' ? colors.icon.brand.default : colors.icon[theme]]}
						/>
					)}
					<Flexbox
						display="flex"
						direction={size === 'small' ? 'col' : 'row'}
					>
						{renderText()}
						{cta && (
							<a
								className={`${classes.cta} ${size === 'small' ? classes.ctaSmall : classes.ctaLarge}`}
								href={cta.href}
								target={cta.target}
								onClick={cta.onClick}
							>
								<span tag="span" className={classes[colorTextClasses[theme]]}>
									{cta.text}
								</span>
							</a>
						)}
					</Flexbox>
				</Flexbox>
				{onClose && (
					<Icon
						iconName="cross"
						width={24}
						height={24}
						onClick={onClose}
						colors={[
							theme === PROMOTE
								? colors.icon.inverse.default
								: colors.icon.default.default
						]}
						className={classes.closeIcon}
					/>
				)}
			</Flexbox>
		</div>
	);
};

Tip.defaultProps = {
	theme: 'info'
};

Tip.propTypes = {
	classes: PropTypes.object.isRequired,
	/** Theme of the Tip. */
	theme: PropTypes.oneOf(['info', 'warning', 'success', 'error', 'promote']),
	/** Text of the tip. If you put text between two * characters that text will be displayed as bold. */
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	size: PropTypes.oneOf(['large', 'small']),
	/** Call to action. Appended after the children's text. */
	cta: PropTypes.shape({
		text: PropTypes.string,
		href: PropTypes.string,
		target: PropTypes.string,
		onClick: PropTypes.func
	}),
	/** Boolean to show an icon. */
	icon: PropTypes.bool,
	/** Cancel the default border radius. */
	noBorderRadius: PropTypes.bool,
	/** Center Tip content. */
	center: PropTypes.bool,
	/** Function to call on click of the x icon. */
	onClose: PropTypes.func,
	/** Extra padding on the right of the x icon. */
	spacedClose: PropTypes.bool,
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
};

export default Tip;
