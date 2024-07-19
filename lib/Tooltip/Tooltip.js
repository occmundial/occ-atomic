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
import newColors from '../tokens/colors.json';
import { useOpenTooltipState } from './hooks';
import Icon from "../Icon"
const { infoLight, info } = colors;

const themes = {
	DARK: 'dark',
	LIGHT: 'light',
	INFO: 'info',
	PURPLE: 'purple'
};

const colorsArrow = {
	[themes.DARK]: newColors.bg.neutral,
	[themes.INFO]: infoLight,
	[themes.LIGHT]: newColors.bg.surface.default,
	[themes.PURPLE]: info
};

const borderColors = {
	[themes.DARK]: {
		bg: 'black',
		border: newColors.border.inverse.subtle
	},
	[themes.LIGHT]: {
		bg: newColors.border.default.subtle,
		border: newColors.border.default.subtle
	},
	[themes.INFO]: {
		bg: infoLight,
		border: infoLight
	},
	[themes.PURPLE]: {
		bg: info,
		border: info
	},
}

const arrowPosition = {
	top: 'top',
	'top-start': 'topStart',
	'top-end': 'topEnd',
	right: 'right',
	bottom: 'bottom',
	'bottom-start': 'bottomStart',
	'bottom-end': 'bottomEnd',
	left: 'left',
}

/** Tooltip component to display messages within a container. */
function Tooltip({
	classes,
	open: openProp,
	children,
	text,
	theme = 'purple',
	openOnHover = false,
	closeDelay = 4000,
	zIndex = 10,
	placement = 'top',
	showArrow = true,
	className = {},
	fit = false,
	width = 'auto',
	strategy = 'absolute',
	onChange,
	icon
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
					if (width){
						styles.width = typeof width === 'string' ? width : `${width}px`;
						styles.minWidth = `${(rects.reference.width / 2) + 32}px`
					}
					else styles.width = '';
				}
				Object.assign(elements.floating.style, styles);
			}
		});
		sizeMiddleware.name = `size-${fit}-${width}`;
		middlewares.push(sizeMiddleware);
		return middlewares;
	}, [showArrow, fit, width]);

	const { refs, floatingStyles, context, middlewareData } = useFloating({
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

	console.log(placement, middlewareData)
	return (
		<Fragment>
			<div
				ref={refs.setReference}
				{...getReferenceProps()}
				className={`${classes.activator} ${
					className.hasOwnProperty('activator') ? className.activator : ''
				}`}
			>
				{children}
			</div>

			<FloatingPortal>
				{open && (
					<div
						ref={refs.setFloating}
						style={{ ...floatingStyles, zIndex, position: strategy }}
						{...getFloatingProps()}
					>
						<div
							className={`${classes.tooltip} ${
								className.hasOwnProperty('tooltip') ? className.tooltip : ''
							} ${classes[theme] || classes.purple}`}
					
						>
							{icon && (
								<Icon iconName={icon} width={12} height={12} />
							)}
							<p className={classes.text}>{text}</p>
						</div>
						{showArrow && (
							<svg 
								ref={arrowRef}
								className={classes[arrowPosition[placement]]}
								style={{
									left: middlewareData && middlewareData.arrow ? `${(middlewareData.arrow.x) + (middlewareData.arrow.centerOffset)}px` : ''
								}}
								width="36" height="9" viewBox="0 0 36 9" fill="none" xmlns="http://www.w3.org/2000/svg"
							>
							<path d="M17.2929 1.70711L10.8787 8.12132C10.3161 8.68393 9.55301 9 8.75736 9H27.2426C26.447 9 25.6839 8.68393 25.1213 8.12132L18.7071 1.70711C18.3166 1.31658 17.6834 1.31658 17.2929 1.70711Z" fill={colorsArrow[theme]}/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 8.5C7.5 8.77614 7.72386 9 8 9H8.34315C9.53662 9 10.6812 8.52589 11.5251 7.68198L16.9393 2.26777C17.5251 1.68198 18.4749 1.68198 19.0607 2.26777L24.4749 7.68198C25.3188 8.5259 26.4634 9 27.6569 9H28C28.2761 9 28.5 8.77614 28.5 8.5C28.5 8.22386 28.2761 8 28 8H27.6569C26.7286 8 25.8384 7.63125 25.182 6.97487L19.7678 1.56066C18.7915 0.58435 17.2085 0.584348 16.2322 1.56066L10.818 6.97487C10.1616 7.63125 9.2714 8 8.34315 8H8C7.72386 8 7.5 8.22386 7.5 8.5Z" fill={borderColors[theme].bg}/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 8.5C7.5 8.77614 7.72386 9 8 9H8.34315C9.53662 9 10.6812 8.52589 11.5251 7.68198L16.9393 2.26777C17.5251 1.68198 18.4749 1.68198 19.0607 2.26777L24.4749 7.68198C25.3188 8.5259 26.4634 9 27.6569 9H28C28.2761 9 28.5 8.77614 28.5 8.5C28.5 8.22386 28.2761 8 28 8H27.6569C26.7286 8 25.8384 7.63125 25.182 6.97487L19.7678 1.56066C18.7915 0.58435 17.2085 0.584348 16.2322 1.56066L10.818 6.97487C10.1616 7.63125 9.2714 8 8.34315 8H8C7.72386 8 7.5 8.22386 7.5 8.5Z" fill={borderColors[theme].border}/>
							</svg>
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
	onChange: PropTypes.func,
	icon: PropTypes.string
};

export default Tooltip;
