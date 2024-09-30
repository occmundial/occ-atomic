import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Flexbox from '../Flexbox';
import Icon from '../Icon';
import colors from '../subatomic/colors';

function NavButton({
  classes,
  selected,
  label,
  onClick,
  direction,
  className,
  testId,
  id,
  iconName,
  white
}) {
  const iconColor = white ? colors.bgWhite : colors.grey600;

  return (
    <div
      className={`${classes.cont}${selected ? ` ${classes.selected}` : ''}${className ? ` ${className}` : ''
        }`}
      onClick={onClick}
      data-testid={testId}
      id={id}
    >
      <Flexbox
        display="flex"
        direction={direction}
        justifyContent="center"
        alignItems="center"
        className={classes.flex}
      >
        { iconName && <Icon iconName={iconName} colors={[iconColor]} /> }
        {label && (
          <Text bodyRegularStrong current>
            <span className={classes.text}>{label}</span>
          </Text>
        )}
      </Flexbox>
    </div>
  );

}

NavButton.propTypes = {
  classes: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  iconName: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
  showBar: PropTypes.bool,
  direction: PropTypes.oneOf(['col', 'row']),
  className: PropTypes.string,
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string,
  id: PropTypes.string,
  white: PropTypes.bool,
};

export default NavButton;
