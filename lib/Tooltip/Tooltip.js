import React, { useRef, useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
	useFloating,
	autoUpdate,
	offset,
	useHover,
	useRole,
	useInteractions,
	FloatingPortal,
	arrow,
	FloatingArrow,
	size
} from '@floating-ui/react';
import colors from '../subatomic/colors';
import { useOpenTooltipState } from './hooks';

const { infoLight, white, grey900, info } = colors;

const themes = {
	DARK: 'dark',
	LIGHT: 'light',
	INFO: 'info',
	PURPLE: 'purple'
};

const colorsArrow = {
	[themes.DARK]: grey900,
	[themes.LIGHT]: white,
	[themes.INFO]: infoLight,
	[themes.PURPLE]: info
};

/** Tooltip component to display messages within a container. */
function Tooltip({
	classes,
	open: openProp,
	children,
	text,
	theme,
	openOnHover = false,
	closeDelay = 4000,
	zIndex = 10,
	placement = 'top',
	showArrow = true,
	className = {},
	fit = false,
	width = 220,
	strategy = 'absolute',
	onChange
}) {
	const arrowRef = useRef(null);

	const [open, setOpen] = useOpenTooltipState(openProp, onChange, closeDelay);

	const getMiddlewares = useMemo(() => {
		const middlewares = [offset(16)];
		showArrow && middlewares.push(arrow({ element: arrowRef, padding: 16 }));
		const sizeMiddleware = size({
			apply({ elements, rects, availableWidth }) {
				const styles = {};
				if (fit) {
					styles.width = `${rects.reference.width}px`;
				} else {
					styles.maxWidth = `${availableWidth}px`;
					if (width)
						styles.width = typeof width === 'string' ? width : `${width}px`;
					else styles.width = '';
				}
				Object.assign(elements.floating.style, styles);
			}
		});
		sizeMiddleware.name = `size-${fit}-${width}`;
		middlewares.push(sizeMiddleware);
		return middlewares;
	}, [showArrow, fit, width]);

	const { refs, floatingStyles, context } = useFloating({
		open: open,
		onOpenChange: setOpen,
		placement,
		strategy,
		whileElementsMounted: autoUpdate,
		middleware: getMiddlewares
	});

	const hover = useHover(context, {
		enabled: openOnHover
	});
	const role = useRole(context, { role: 'tooltip' });

	const { getReferenceProps, getFloatingProps } = useInteractions([
		hover,
		role
	]);

	return (
		<Fragment>
			<div
				ref={refs.setReference}
				{...getReferenceProps()}
				className={`${classes.activator} ${
					className.hasOwnProperty('activator') && className.activator
				}`}
			>
				{children}
			</div>

			<FloatingPortal>
				{open && (
					<div
						className={`${classes.tooltip} ${
							className.hasOwnProperty('tooltip') && className.tooltip
						} ${classes[theme] || classes.purple}`}
						ref={refs.setFloating}
						style={{ ...floatingStyles, zIndex, position: strategy }}
						{...getFloatingProps()}
					>
						{text}
						{showArrow && (
							<FloatingArrow
								ref={arrowRef}
								context={context}
								fill={colorsArrow[theme] || colorsArrow[themes.PURPLE]}
								width={14}
								height={10}
							/>
						)}
					</div>
				)}
			</FloatingPortal>
		</Fragment>
	);
}

Tooltip.propTypes = {
	classes: PropTypes.object,
	/** It accepts any type of the followings boolean,null,undefined,ReactFragment,ReactPortal,ReactChild. */
	children: PropTypes.node,
	/** This property can be used to set the theme of the component. The possible values for the theme property are info, light, dark, and purple. */
	theme: PropTypes.oneOf(['light', 'dark', 'purple', 'info']),
	/** This property can be used to control whether or not the component is displayed. */
	open: PropTypes.bool,
	/** This property can be used to set the text that is displayed by the component. */
	text: PropTypes.string.isRequired,
	/** Designates whether the tooltip should open on activator hover. */
	openOnHover: PropTypes.bool,
	/** Time on millisecond that it will take to close the tooltip. */
	closeDelay: PropTypes.number,
	/** Sets the Tooltip stack order. */
	zIndex: PropTypes.number,
	/** Allows to specify the placement of Tooltip. Available options are top, top-start, top-end, bottom, bottom-start, bottom-end, left, right. */
	placement: PropTypes.string,
	/** Allows to specify classes to activador and tooltip. Object has the next properties: activator(string), tooltip(string). */
	className: PropTypes.object,
	/** This property can be used to control whether or not an arrow is displayed. */
	showArrow: PropTypes.bool,
	/** This property allows the Tooltip to be adjusted to the length of the associated component. */
	fit: PropTypes.bool,
	/** The "Width" property of the Tooltip enables modification of its width and accepts a number (e.g., 220), a string (e.g., '220px' or 'auto') or null as its value. */
	width: PropTypes.number,
	/** The CSS position property to use to compute the tooltip position */
	strategy: PropTypes.oneOf(['absolute', 'fixed']),
	/** Callback fired when the Tooltip show state changes. */
	onChange: PropTypes.func
};

export default Tooltip;
