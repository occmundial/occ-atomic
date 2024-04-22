import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useAtomic from '../Provider/useAtomic';
import mappedIcons from '../subatomic/mappedIcons';
/** Component to display any of the icons on the library. */
function Icon(props) {
  const { classes, className, style, id, iconName, ariaLabel, alt, onClick, colors, testId, width, height, hover: hoverColor, transition } = props;
  const [hover, setHover] = useState(false);
  const atomic = useAtomic();
  const iconColor = useMemo(() => {
    if (hover && hoverColor && hoverColor.length) return hoverColor[0];
    if (colors && colors.length) return colors[0];
    return 'currentcolor';
  }, [colors, hoverColor, hover]);

  if (!mappedIcons[iconName]) {
    const IconType = onClick ? 'button' : 'span';
    return (
      <IconType
        id={id}
        className={`${classes.oldIcon}${onClick ? ` ${classes.click}` : ''}${
          className ? ` ${className}` : ''
        }`}
        aria-label={ariaLabel}
        style={style}
        onClick={onClick}
        alt={alt}
        data-testid={testId}
      />
    );
  }
  const mappedIconName = mappedIcons[iconName];

  return (
    <svg
      className={`${classes.icon} ${atomic.iconsPrefix}__${mappedIconName}${onClick ? ' ' + classes.click : ''} ${className}`}
      width={width ? width : 24}
      height={height ? height : 24}
      fill={iconColor}
      id={id}
      style={{
        ...style,
        transition: transition ? transition : '0.3s all'
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-testid={testId}
    >
      <use
        xlinkHref={`${atomic.iconsPath}#${atomic.iconsPrefix}__${mappedIconName}`}
      />
    </svg>
  );
}

Icon.defaultProps = {
  transition: '0.3s all'
};

Icon.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Name of the icon to render. It must match with any of the icons on the library. */
  iconName: PropTypes.string.isRequired,
  /** Width of the icon. By default it will take the value defined on the library for the specified icon. */
  width: PropTypes.number,
  /** Height of the icon. By default it will take the value defined on the library for the specified icon. */
  height: PropTypes.number,
  /** Display property of the icon. By default it will take the value defined on the library for the specified icon. */
  display: PropTypes.string,
  /** Transition for animations. */
  transition: PropTypes.string,
  /** Array with the colors to use in the icon. Some icons use more than one color. By default it will take the value defined on the library for the specified icon. */
  colors: PropTypes.array,
  /** Array with the colors to use on the icon when it's hovered. */
  hover: PropTypes.array,
  /** Function to call when the icon is clicked. */
  onClick: PropTypes.func,
  /** Alt property, in case you need to set it. */
  alt: PropTypes.string,
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string
};

export default Icon;
