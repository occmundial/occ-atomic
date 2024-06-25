import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Tag from '../Tag';

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    };
    this.onChange = this.onChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentWillReceiveProps(props) {
    const { selected } = props;
    if (selected && this.state.selected != selected)
      this.setState({ selected });
  }

  onChange(option) {
    const { onChange } = this.props;
    if (!option.disabled) {
      this.setState({ selected: option.value });
      if (onChange) onChange(option.value);
    }
  }

  handleKeyDown(e) {
    if (e.keyCode == 13 || e.keyCode == 32) {
      e.preventDefault();
    }
  }

  handleKeyUp(e, option) {
    if (e.keyCode == 13 || e.keyCode == 32) {
      this.onChange(option);
    }
  }

  render() {
    const { selected } = this.state;
    const { classes, options, id, textOverflow, className, alignLeft, style } = this.props;
    return (
      <div id={id}>
        {options.map(option => (
          <div
            id={option.trk}
            key={option.value}
            tabIndex={option.disabled ? -1 : 0}
            onKeyDown={this.handleKeyDown}
            onKeyUp={(e) => this.handleKeyUp(e, option)}
            data-testid={option.testId}
            {...(option.testId && {
              'data-value': selected == option.value ? 1 : 0
            })}
            className={`${classes.cont}${
              selected == option.value ? ` ${classes.active}` : ''
            }${option.disabled ? ` ${classes.disabled}` : ''}${
              className ? ` ${className}` : ''
            }`}
            onClick={() => {
              this.onChange(option);
            }}
            style={style}
          >
            <div className={classes.radioWrap}>
              <div className={classes.radio}>
                <div className={classes.radioOuter} />
                <div className={classes.radioInner} />
              </div>
            </div>
            {!!(option.label || option.right || option.tag) && (
              <div className={classes.labelWrap}>
                {option.label && (
                  <Text
                    tag="label"
                    className={`${classes.label}${
                      textOverflow ? ` ${classes.overflow}` : ''
                    }${
                      alignLeft ? ` ${classes.alignLeft}` : ''
                    }`}
                  >
                    {option.label}
                  </Text>
                )}
                {option.right && (
                  <Text tag="label" corpSecondary className={classes.right}>
                    {option.right}
                  </Text>
                )}
                {option.tag && (
                  <Tag theme="link" className={classes.tag}>{option.tag}</Tag>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

Radio.defaultProps = {
  options: []
};

Radio.propTypes = {
  classes: PropTypes.object,
  /** Default value for the radio. */
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The function to call when the value of the radio group changes. */
  onChange: PropTypes.func,
  /** Array of options to switch the value of the radio. The options must have a value and a label. It can also have a 'right' label. The value must be unique. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      right: PropTypes.string,
      tag: PropTypes.string,
      trk: PropTypes.string,
      /** The testId property adds the data attribute data-testid to
       *  the main element and should be used for testing only. */
      testId: PropTypes.string,
    })
  ),
  /** Align the content to the left */
  alignLeft: PropTypes.bool,
  /** Use this prop to overflow the text of the label, adding '...' and the end. */
  textOverflow: PropTypes.bool,
  /** Id of the component */
  id: PropTypes.string,
  /** Adds class(es) to each option container */
  className: PropTypes.string,
  /** Adds style(s) to each option container */
  style: PropTypes.object
};

export default Radio;
