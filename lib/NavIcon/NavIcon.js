import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Flexbox from '../Flexbox';

class NavIcon extends React.Component {
  render() {
    const { classes, selected, label, onClick, direction, className } =
      this.props;
    return (
      <div
        className={`${classes.cont}${selected ? ` ${classes.selected}` : ''}${
          className ? ` ${className}` : ''
        }`}
        onClick={onClick}
        data-testid={testId}
      >
        <Flexbox
          display="flex"
          direction={direction}
          justifyContent="center"
          alignItems="center"
          className={classes.flex}
        >
          <div className={classes.icon} />
          {label && (
            <Text micro>
              <span className={classes.text}>{label}</span>
            </Text>
          )}
        </Flexbox>
      </div>
    );
  }
}

NavIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
  showBar: PropTypes.bool,
  direction: PropTypes.oneOf(['col', 'row']),
  className: PropTypes.string,
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string
};

export default NavIcon;
