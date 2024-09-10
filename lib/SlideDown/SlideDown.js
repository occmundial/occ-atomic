import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Icon from '../Icon';
import Tag from '../Tag';
import Flexbox from '../Flexbox';

import colors from '../tokens/colors.json';

import usePrevious from '../Provider/usePrevious';

const textSizes = {
	sm: { small: true },
	md: { standard: true },
	lg: { extraLarge: true },
	default: { standard: true }
};

const _themeColors = {
	blue: {
		icon: {
			default: colors.icon.brand.default,
			disabled: colors.icon.brand.disabled
		},
		text: {
			default: {
				primary: true
			},
			disabled: {
				indigoSecondary: true
			}
		}
	},
	default: {
		icon: {
			default: colors.icon.default.bold,
			disabled: colors.icon.default.disabled
		},
		text: {
			default: {
				highEmphasis: true
			},
			disabled: {
				disabled: true
			}
		}
	}
};

/** Component to create an accordion section. The content will be hidden by default, and shown after click. */
function SlideDown({
	expanded,
	classes,
	title,
	customTitle,
	children,
	tag,
	textSize,
	strong,
	theme,
	noJustified,
	onToggle,
	icon,
	divider,
	noPadding,
	disabled,
	testId
}) {
	const [_expanded, setExpanded] = useState(!!expanded);
	const prevExpanded = usePrevious(!!expanded);
	const themeColors = _themeColors[theme] || _themeColors['default'];

	const toggleContent = e => {
		e.stopPropagation();
		setExpanded(!_expanded);

		if (onToggle) onToggle(!_expanded);
	};

	const getTextProps = () => ({
		...(textSizes[textSize] || textSizes.default),
		...(disabled ? themeColors.text.disabled : themeColors.text.default)
	});

	useEffect(() => {
		if (prevExpanded !== expanded) {
			setExpanded(expanded);
		}
	}, [prevExpanded, expanded]);

	return (
		<div
			className={`${divider ? ` ${classes.divider}` : ''}`}
		>
			<div
				className={`${classes.button} ${
					textSize === 'lg' ? classes.largePadding : classes.normalPadding
				}${!noPadding ? ` ${classes.buttonPadding}` : ''}${
					disabled ? ` ${classes.disabled}` : ''
				}`}
				role="button"
				{...(!disabled && { onClick: toggleContent })}
				data-testid={testId}
			>
				<Flexbox
					display="flex"
					justifyContent={!noJustified ? 'between' : null}
					alignItems="center"
					className={classes.flexContainer}
				>
					<Flexbox display="flex" alignItems="center" wrap="wrap">
						{icon ? (
							<Icon
								iconName={icon}
								width={16}
								height={16}
								colors={[
									!disabled
										? themeColors.icon.default
										: themeColors.icon.disabled
								]}
								className={classes.leftIcon}
							/>
						) : (
							''
						)}
						{customTitle || (
							<Text
								{...getTextProps()}
								strong={strong}
								tag="label"
								className={`${classes.text}${
									disabled ? ` ${classes.disabled}` : ''
								}`}
							>
								{title}
							</Text>
						)}
						{tag && (
							<Tag theme="info" className={classes.tag}>
								{tag}
							</Tag>
						)}
					</Flexbox>
					<Icon
						iconName="arrowDown"
						colors={[
							!disabled ? themeColors.icon.default : themeColors.icon.disabled
						]}
						className={`${classes.icon}${
							_expanded ? ` ${classes.rotateIcon}` : ''
						}`}
						width={16}
						height={16}
						testId="slidedown__arrow-down"
					/>
				</Flexbox>
			</div>
			<div
				className={`${classes.contentWrapper}${
					_expanded ? ` ${classes.showContentWrapper}` : ''
				}`}
			>
				<div
					className={`${classes.content}${
						_expanded ? ` ${classes.showContent}` : ''
					}`}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

SlideDown.defaultProps = {
	expanded: false,
	textSize: 'md',
	strong: false,
	theme: 'default',
	noJustified: false,
	icon: '',
	noPadding: false
};

SlideDown.propTypes = {
	classes: PropTypes.object,
	children: PropTypes.node,
	/** Title of the tab. */
	title: PropTypes.string,
	/** If the title needs to be customized. It will be rendered instead of the title. */
	customTitle: PropTypes.node,
	/** Set this as true to show the content by default. If the external prop is the same of the internal state the component dont toggle */
	expanded: PropTypes.bool,
	/** Text to show as a label right next to the Title */
	tag: PropTypes.string,
	/** Function to call when the SlideDown expands or collapses. It returns true if it is expanded and false if it is collapsed. */
	onToggle: PropTypes.func,
	/** Size of the Text to show sm, md, lg*/
	textSize: PropTypes.oneOf(['sm', 'md', 'lg']),
	/** If the text is required to be bold*/
	strong: PropTypes.bool,
	/** Theme of the SlideDown */
	theme: PropTypes.oneOf(['default', 'blue']),
	/** The Title container has an alignment by default. Use this property if you need to remove it. */
	noJustified: PropTypes.bool,
	/** Shows a divider at the bottom*/
	divider: PropTypes.bool,
	/** Use the name of any of the icons available in the library. */
	icon: PropTypes.string,
	/** The container has by default a side padding. Use this property if you need to remove it. */
	noPadding: PropTypes.bool,
	/** It disables the component and shows it with the proper theme. */
	disabled: PropTypes.bool,
	/** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
	testId: PropTypes.string
};

export default SlideDown;
