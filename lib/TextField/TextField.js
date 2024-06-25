import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

import Icon from '../Icon';
import Button from '../Button';

import newColors from '../tokens/colors.json';

/** TextField component that includes all the markup, functions and behaviors to implement any type of input field. */
class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'default',
      value: props.valueProp ? props.valueProp : '',
      touched: false,
      showPass: false,
      passIconBeingClicked: false
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onClear = this.onClear.bind(this);
    this.togglePass = this.togglePass.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.outOfPassIcon = this.outOfPassIcon.bind(this);
    this.setClassName = this.setClassName.bind(this);
    this.setInputClassName = this.setInputClassName.bind(this);
  }

  componentWillMount() {
    let { input, onRef } = this.props;
    if (input && input.value) this.setState({ value: input.value });
    if (onRef) onRef(this);
  }

  componentWillReceiveProps(props) {
    let { input, valueProp, disabled } = props;
    if (input && input.value) this.setState({ value: input.value });
    else if (valueProp != this.state.value) this.setState({ value: valueProp });
    if (disabled && !this.props.disabled) {
      this.setState({ status: 'default' });
    }
  }

  componentWillUnmount() {
    let { onRef } = this.props;
    if (onRef) onRef(undefined);
  }

  onFocus({ target }) {
    const { onFocus, selectOnFocus } = this.props;
    if (selectOnFocus) target.select();
    this.setState({ status: 'focus', touched: true });
    if (onFocus) onFocus();
  }

  onBlur({ target: { value } }) {
    const { input, onBlur } = this.props;
    this.setState({ value, status: 'default' });
    if (onBlur) onBlur(value);
    if (input) input.onBlur(value);
  }

  onChange({ target: { value } }) {
    const { input, onChange, regex } = this.props;
    let valid = true;
    if (regex) valid = new RegExp(regex).test(value);
    if (valid) {
      this.setState({ value });
      if (input) input.onBlur(value);
      if (onChange) onChange(value);
    }
  }

  onKeyUp({ which, keyCode }) {
    const { onKeyUp } = this.props;
    if (onKeyUp) onKeyUp(which || keyCode);
  }

  onClear() {
    const { input, onClear } = this.props;
    this.setState({ value: '', status: 'default' });
    if (onClear) onClear();
    if (input) input.onBlur(value);
  }

  togglePass() {
    const { showPass } = this.state;
    this.setState({ showPass: !showPass, passIconBeingClicked: true });
  }

  focusInput() {
    this.setState({ passIconBeingClicked: false });
    this.input.focus();
  }

  outOfPassIcon() {
    this.setState({ passIconBeingClicked: false });
  }

  setClassName(status) {
    const { classes, className } = this.props;
    let containerClassName = classes.container + ' ' + classes[status];
    if (className) containerClassName += ' ' + className;
    return containerClassName;
  }

  setInputClassName() {
    const {
      classes,
      iconName,
      clear,
      type,
      inputClassName,
      alignRight,
      hjWhitelist
    } = this.props;
    let className = classes.input;
    if (iconName) className += ` ${classes.hasIcon}`;
    if (clear) className += ` ${classes.hasClear}`;
    if (alignRight) className += ` ${classes.alignRight}`;
    if (type == 'select') className += ` ${classes.select}`;
    if (type == 'textarea') className += ` ${classes.textarea}`;
    if (type == 'password') className += ` ${classes.hasPass}`;
    if (hjWhitelist) className += ' data-hj-whitelist';
    if (inputClassName) className += ` ${inputClassName}`;
    return className;
  }

  setIconColor() {
    const { status } = this.state;
    const { disabled } = this.props;
    if (disabled) return newColors.icon.default.disabled;
    if (status === 'focus') return newColors.icon.brand.bold;
    return newColors.icon.default.default;
  }

  render() {
    const { status, value, touched, showPass, passIconBeingClicked } =
      this.state;
    const {
      classes,
      input,
      meta,
      label,
      placeholder,
      counter,
      maxLength,
      type,
      name,
      options,
      id,
      style,
      disabled,
      autoFocus,
      error,
      assistiveText,
      clear,
      iconName,
      allowError,
      required,
      mask,
      guide,
      inputMode,
      disableAutoComplete,
      pattern,
      testId
    } = this.props;
    let realStatus = status;
    let InputType =
      type == 'select' ? 'select' : type == 'textarea' ? 'textarea' : 'input';

    const errorStatus =
      (meta && meta.error && (meta.touched || allowError)) ||
      (error && (touched || allowError) && !passIconBeingClicked);

    if (disabled) realStatus = 'disabled';
    else if (status != 'focus' && errorStatus) realStatus = 'error';

    let element, passIcon;
    const commonProps = {
      name,
      id,
      className: this.setInputClassName(),
      value: input && input.value ? input.value : value,
      autoFocus,
      maxLength,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange,
      onKeyUp: this.onKeyUp,
      ref: ref => {
        this.input = ref;
      },
      required,
      pattern,
      inputMode,
      'data-testid': testId
    };
    if (disabled) {
      if (type == 'select') {
        let selectedOption = options.filter(option => option.value == value);
        let optionLabel;
        if (selectedOption.length) {
          optionLabel = selectedOption[0].label;
        }
        element = (
          <label
            className={`${classes.input}${
              iconName ? ` ${classes.hasIcon}` : ''
            }`}
          >
            <div className={`${classes.inputDisabled} ${classes.hasRightIcon}`}>
              {input && input.value
                ? input.value
                : optionLabel
                ? optionLabel
                : value
                ? value
                : placeholder}
            </div>
          </label>
        );
      } else {
        element = (
          <label
            className={`${classes.input}${
              type == 'textarea' ? ` ${classes.textarea}` : ''
            }${iconName ? ` ${classes.hasIcon}` : ''}`}
          >
            <div className={classes.inputDisabled}>
              {input && input.value ? input.value : value ? value : placeholder}
            </div>
          </label>
        );
      }
      passIcon = (
        <Button
          theme="ghostGrey"
          icon="eye"
          size="md"
          disabled
          className={classes.rightButton}
        />
      );
    } else if (type == 'select') {
      element = (
        <InputType
          {...commonProps}
          className={`${commonProps.className} ${classes.pointer}`}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map(item => {
            if (item.grouped) {
              return (
                <optgroup
                  key={item.key}
                  label={item.label}
                  disabled={item.disabled}
                >
                  {item.options.map(option => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                      {...(testId && {
                        'data-testid': `${testId}__item-${option.value}`
                      })}
                    >
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              );
            } else {
              return (
                <option
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  {...(testId && {
                    'data-testid': `${testId}__item-${item.value}`
                  })}
                >
                  {item.label}
                </option>
              );
            }
          })}
        </InputType>
      );
    } else if (mask) {
      element = (
        <MaskedInput
          {...commonProps}
          placeholder={placeholder}
          type={type == 'password' && showPass ? 'text' : type}
          {...(disableAutoComplete && { autoComplete: 'off' })}
          mask={mask}
          guide={guide}
        />
      );
    } else {
      element = (
        <InputType
          {...commonProps}
          placeholder={placeholder}
          type={type == 'password' && showPass ? 'text' : type}
          {...(disableAutoComplete && { autoComplete: 'off' })}
        />
      );
      passIcon = (
        <Button
          theme="ghostGrey"
          icon={showPass ? 'eye' : 'eye-slash'}
          size="md"
          className={classes.rightButton}
          onMouseDown={this.togglePass}
          onMouseUp={this.focusInput}
          onMouseOut={this.outOfPassIcon}
        />
      );
    }

    return (
      <div className={this.setClassName(realStatus)} style={style}>
        {label && (
          <div className={classes.top}>
            {label && <label className={classes.label}>{label}</label>}
          </div>
        )}
        <div className={classes.inputWrap}>
          {iconName && (
            <Icon
              iconName={iconName}
              width={24}
              height={24}
              className={classes.icon}
              colors={[this.setIconColor()]}
            />
          )}
          {type == 'select' && (
            <Icon
              iconName="chevron-down"
              width={24}
              height={24}
              colors={
                disabled
                  ? [newColors.icon.default.disabled]
                  : [newColors.icon.default.default]
              }
              className={classes.selectIcon}
            />
          )}
          {element}
          {type == 'password' && passIcon}
          {value && clear && (
            <Button
              icon="x"
              theme="ghostGrey"
              size="md"
              className={classes.rightButton}
              onClick={this.onClear}
              {...(testId && {
                'data-testid': `${testId}__container-close-icon`
              })}
            />
          )}
        </div>
        {(assistiveText || (counter && maxLength)) && (
          <div className={classes.bottom}>
            <span className={classes.assistiveTextWrap}>
              {assistiveText && (
                <label
                  className={`${classes.assistiveText} ${
                    realStatus == 'error' ? classes.assistiveError : null
                  }`}
                >
                  {assistiveText}
                </label>
              )}
            </span>
            {counter && maxLength && (
              <label className={`${classes.counter}`}>
                {value.length} / {maxLength}
              </label>
            )}
          </div>
        )}
      </div>
    );
  }
}

TextField.defaultProps = {
  type: 'text',
  counter: false,
  disabled: false,
  autoFocus: false,
  clear: false,
  valueProp: '',
  selectOnFocus: false,
  options: [],
  hjWhitelist: true
};

TextField.propTypes = {
  classes: PropTypes.object,
  /** Type of the input. Use any of the following types: text, email, password, textarea, select, date, number, search, file. */
  type: PropTypes.string,
  /** Maximum number of characters to accept in the input. */
  maxLength: PropTypes.number,
  /** Label to show right above the input field. */
  label: PropTypes.string,
  /** Text to display as the placeholder for the input. If you set a value for placeholder but not for label, the placeholder will behave as a label on focus. */
  placeholder: PropTypes.string,
  /** Text to display below the input field. When TextField has no error the color would be grey. With error the assistiveText becomes red and with an alert icon on the left. */
  assistiveText: PropTypes.node,
  /** Name of the input field. */
  name: PropTypes.string,
  /** Disable the input. It shows a static markup with the styles of an input. */
  disabled: PropTypes.bool,
  /** It displays a counter floating to the right, indicating the number of the remaining characters available. It is related to the maxLength value. */
  counter: PropTypes.bool,
  /** Focus automatically on the field with this property. You can just use one of these per form. */
  autoFocus: PropTypes.bool,
  /** Setting this property will show an 'x' icon on the right side of the input. Clicking it will remove the value of the input field.*/
  clear: PropTypes.bool,
  /** After doing your validations outside of this component, you can change the state of the TextField to 'error' with this bool property. */
  error: PropTypes.bool,
  /** It allows the component to display the error messages even if it hasn't been touched. */
  allowError: PropTypes.bool,
  /** Use as a default value. */
  valueProp: PropTypes.node,
  /** With this property set to true, the value of the input will be selected on focus. */
  selectOnFocus: PropTypes.bool,
  /** Mask array or function to format the value of the TextField. For more information check *react-text-mask*. */
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  /** Boolean to show or hide the full mask while writing. */
  guide: PropTypes.bool,
  /** The type of input the field will receive, to show the right keyboard in mobile. */
  inputMode: PropTypes.oneOf([
    'none',
    'text',
    'decimal',
    'numeric',
    'tel',
    'search',
    'email',
    'url'
  ]),
  /**  Disables native autoComplete on browsers. */
  disableAutoComplete: PropTypes.bool,
  /** Metadata sended by react-form. */
  meta: PropTypes.object,
  /** Object sended by react-form. */
  input: PropTypes.object,
  /** Function to call on focus. */
  onFocus: PropTypes.func,
  /** Function to call on blur. */
  onBlur: PropTypes.func,
  /** Function to call on change. */
  onChange: PropTypes.func,
  /** Function to call on key up. */
  onKeyUp: PropTypes.func,
  /** Function to call after clicking the 'x' icon shown by the 'clear' property. */
  onClear: PropTypes.func,
  /** Function to call when you need to call the input by a reference. */
  onRef: PropTypes.func,
  /** Array of objects with options in case you set the 'type' property as 'select'. Each option must have a value and a label. You can group the options. */
  options: PropTypes.array,
  /** If you want to display an icon on the left side, use any icon's name available in the library. */
  iconName: PropTypes.string,
  /** ClassName for the input tag. */
  inputClassName: PropTypes.string,
  /** Whitelist the TextField for Hotjar. */
  hjWhitelist: PropTypes.bool,
  /** Regular expression to test the value. If the value doesn't match then is not changed. */
  regex: PropTypes.string,
  /** Set the TextField as required. */
  required: PropTypes.bool,
  /** Align the input text to the right */
  alignRight: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  /** Regular expression to validate the input content. */
  pattern: PropTypes.string,
  /** The testId property adds the data attribute data-testid to the main element and should be used for testing only. */
  testId: PropTypes.string
};

export default TextField;
