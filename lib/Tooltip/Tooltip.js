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
  size,
  FloatingArrow
} from '@floating-ui/react';
import colors from '../subatomic/colors';
import newColors from '../tokens/colors.json';
import { useOpenTooltipState } from './hooks';
import Icon from '../Icon';
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
    border: 'rgba(0, 0, 0, 0.8)'
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
  }
};

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
    const middlewares = [
      offset(({ rects }) => {
        if (placement === 'top-start' || placement === 'bottom-start') {
          return {
            crossAxis: rects.reference.width / 2 - 18,
            mainAxis: 16
          };
        } else if (placement === 'top-end' || placement === 'bottom-end') {
          return {
            crossAxis: -(rects.reference.width / 2) + 18,
            mainAxis: 16
          };
        }

        return {
          mainAxis: 16
        };
      })
    ];
    showArrow &&
      middlewares.push(
        arrow({
          element: arrowRef,
        })
      );
    const sizeMiddleware = size({
      apply({ elements, rects, availableWidth }) {
        const styles = {};
        if (fit) {
          styles.width = `${rects.reference.width}px`;
        } else {
          styles.maxWidth = `${availableWidth}px`;
          if (width) {
            styles.width = typeof width === 'string' ? width : `${width}px`;
          } else styles.width = '';
        }
        Object.assign(elements.floating.style, styles);
      }
    });
    sizeMiddleware.name = `size-${fit}-${width}`;
    middlewares.push(sizeMiddleware);
    return middlewares;
  }, [showArrow, fit, width, placement]);

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
          className.hasOwnProperty('activator') ? className.activator : ''
        }`}
      >
        {children}
      </div>

      <FloatingPortal>
        {open && (
          <div
            className={`${classes.tooltip} ${
              className.hasOwnProperty('tooltip') ? className.tooltip : ''
            } ${classes[theme] || classes.purple}`}
            ref={refs.setFloating}
            style={{ ...floatingStyles, zIndex, position: strategy }}
            {...getFloatingProps()}
          >
            <div className={classes.content}>
              {icon && <Icon iconName={icon} width={12} height={12} />}
              <p className={classes.text}>{text}</p>
            </div>
            {showArrow && (
              <FloatingArrow
                style={{ transform: 'translateY(1px)' }}
                ref={arrowRef}
                context={context}
                fill={colorsArrow[theme] || colorsArrow[themes.PURPLE]}
                strokeWidth={1}
                stroke={borderColors[theme].border}
                width={20}
                d="M0 20C0 20 2.06906 19.9829 5.91817 15.4092C7.49986 13.5236 8.97939 12.3809 10.0002 12.3809C11.0202 12.3809 12.481 13.6451 14.0814 15.5472C17.952 20.1437 20 20 20 20H0Z"
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
  onChange: PropTypes.func,
  icon: PropTypes.string
};

export default Tooltip;
