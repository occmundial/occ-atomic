import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      undetermined: props.undetermined
    };
    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(props) {
    const { value } = props;
    if (this.state.value != value) this.setState({ value });
  }

  toggle() {
    const { onChange, id, disabled } = this.props;
    if (!disabled) {
      let value = !this.state.value;
      this.setState({ value, undetermined: false });
      if (onChange) onChange(value, id);
    }
  }

  render() {
    const { value, undetermined } = this.state;
    const {
      classes,
      label,
      right,
      disabled,
      textOverflow,
      id,
      className,
      style,
      trk,
      testId
    } = this.props;
    let iconClass = undetermined
      ? ` ${classes.undetermined}`
      : value
      ? ` ${classes.active}`
      : '';
    return (
      <div
        id={id}
        className={`${classes.cont}${iconClass}${
          disabled ? ` ${classes.disabled}` : ''
        }${className ? ` ${className}` : ''}`}
        onClick={this.toggle}
        style={style}
        data-testid={testId}
        {...(testId && {
          'data-value': value ? 1 : 0
        })}
      >
        <div className={classes.check} id={trk} />
        {label && (
          <Text
            tag="label"
            className={`${classes.label}${
              textOverflow ? ` ${classes.overflow}` : ''
            }`}
          >
            {label}
          </Text>
        )}
        {right && (
          <Text tag="label" mid className={classes.right}>
            {right}
          </Text>
        )}
      </div>
    );
  }
}

Checkbox.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Default value for the checkbox. */
  value: PropTypes.bool,
  /** Used for partial check or when is unable to retrieve the value as absolute. */
  undetermined: PropTypes.bool,
  /** The function to call when the value of the checkbox changes. */
  onChange: PropTypes.func,
  /** Disable the checkbox. */
  disabled: PropTypes.bool,
  /** Text to display next to the checkbox.  */
  label: PropTypes.node,
  /** Text to show on the right. */
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Use this prop to overflow the text of the label, adding '...' and the end. */
  textOverflow: PropTypes.bool,
  /** Id for catching selected element for tracking. */
  trk: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string
};

export default Checkbox;
