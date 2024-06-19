import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Icon from '../Icon';
import colors from '../tokens/colors.json';

class SlideToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
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
      this.setState({ value });
      if (onChange) onChange(value, id);
    }
  }

  handleKeyDown(e) {
    if (e.keyCode == 13 || e.keyCode == 32) {
      e.preventDefault();
      this.toggle();
    }
  }

  render() {
    const { value } = this.state;
    const {
      classes,
      label,
      disabled,
      id,
      className,
      style,
      name,
      trk,
      testId
    } = this.props;
    const iconColor = disabled ? colors.icon.default.disabled : value ? colors.icon.brand.bold : colors.icon.brand.disabled;
    return (
      <div
        id={id}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => this.handleKeyDown(e)}
        onClick={this.toggle}
        className={`${classes.cont}${disabled ? ` ${classes.disabled}` : ''}${
          className ? ` ${className}` : ''
        }`}
        style={style}
      >
        <div className={classes.switchWrap}>
          <div
            id={trk}
            name={name}
            className={`${classes.switch}${value ? ` ${classes.checked}` : ''}`}
            data-testid={testId}
            {...(testId && {
              'data-value': value ? 1 : 0
            })}
          >
            <div className={classes.switchBg}>
              <span className={classes.slider}>
                <Icon iconName={value ? 'check' : 'x'} width={16} height={16} colors={[iconColor]} className={classes.icon} />
              </span>
            </div>
          </div>
        </div>
        {label && (
          <div className={classes.labelWrap}>
            <Text tag="label" className={classes.label}>
              {label}
            </Text>
          </div>
        )}
      </div>
    );
  }
}

SlideToggle.propTypes = {
  classes: PropTypes.object,
  /** Default value for the slide. */
  value: PropTypes.bool,
  /** The function to call when the value of the slide changes. */
  onChange: PropTypes.func,
  /** Disable the slide. */
  disabled: PropTypes.bool,
  /** Text to display next to the slide.  */
  label: PropTypes.node,
  /** Name to assign to the html tag which holds the click event. */
  name: PropTypes.string,
  /** Id for catching selected element for tracking. */
  trk: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  /** The testId property adds the data attribute data-testid to
   *  the main element and should be used for testing only. */
  testId: PropTypes.string
};

export default SlideToggle;
