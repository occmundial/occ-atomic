import React from 'react';
import PropTypes from 'prop-types';

/**
 * A flexible button component, with four pre-stablished themes.
 * The Buton can behave like any button with an onClick function, or like an anchor with href and target.
 * There are 3 sizes available: small, medium and large.
 */
class Button extends React.Component {
	render() {
		const {
			classes,
			className,
			children,
			id,
			href,
			target,
			rel,
			onClick,
			theme,
			size,
			block,
			disabled,
			icon,
			iconRight,
			round,
			style,
			loading
		} = this.props;
		let classNames = classes.btn;
		if (theme) classNames += ` ${classes[theme]}`;
		if (loading) classNames += ` ${classes.loading}`;
		if (disabled) classNames += ` ${classes.disabled}`;
		if (size == 'md' || size == 'lg') classNames += ` ${classes[size]}`;
		if (block) classNames += ` ${classes.block}`;
		if (className) classNames += ` ${className}`;
		if (!children && icon) {
			classNames += ` ${classes.iconOnly}`;
			if (round) classNames += ` ${classes.round}`; 
		}
		const content = (
			<span className={classes.cont}>
				{icon ? <i className={classes.icon} /> : ''}
				{children}
				{iconRight ? <i className={classes.iconRight} /> : ''}
			</span>
		);
		const loadingLayer = loading ? (
			<span className={classes.loadCont}>
				<i className={classes.loadIcon} />
			</span>
		) : null;
		if (href) {
			return (
				<a
					className={classNames}
					href={!disabled ? href : ''}
					target={target}
					rel={rel}
					onClick={!disabled ? onClick : null}
					id={id}
					style={style}
				>
					{content}
					{loadingLayer}
				</a>
			);
		} else {
			return (
				<button
					className={classNames}
					onClick={!disabled ? onClick : null}
					id={id}
					style={style}
				>
					{content}
					{loadingLayer}
				</button>
			);
		}
	}
}

Button.defaultProps = {
	theme: 'primary',
	size: 'sm',
	block: false,
	disabled: false
};

Button.propTypes = {
	classes: PropTypes.object.isRequired,
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
	/** The loading property disables the button and shows a loading icon spinning. */
	loading: PropTypes.bool,
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
	style: PropTypes.object
};

export default Button;
