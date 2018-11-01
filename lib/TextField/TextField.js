import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import colors from '../subatomic/colors';

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
        if (input && input.value)
            this.setState({ value: input.value });
        if (onRef) onRef(this);
    }
    
    componentWillReceiveProps(props) {
        let { input, valueProp } = props;
        if (input && input.value)
            this.setState({ value: input.value });
        else if (valueProp != this.state.value)
            this.setState({ value: valueProp });
    }
    
    componentWillUnmount() {
        let { onRef } = this.props;
        if (onRef) onRef(undefined);
    }
    
    onFocus({ target }) {
        const { onFocus, selectOnFocus } = this.props;
        if (selectOnFocus) target.select();
        this.setState({ status:'focus', touched: true });
        if (onFocus) onFocus();
    }
    
    onBlur({ target: {value} }) {
        const { input, onBlur } = this.props;
        this.setState({ value:value, status: 'default' });
        if (onBlur) onBlur(value);
        if (input) input.onBlur(value);
    }
    
    onChange({ target: {value} }) {
        const { input, onChange } = this.props;
        this.setState({ value:value });
        if (onChange) onChange(value);
        if (input) input.onBlur(value);
    }
    
    onKeyUp({ which }) {
        const { onKeyUp } = this.props;
        if (onKeyUp) onKeyUp(which);
    }
    
    onClear() {
        const { input, onClear } = this.props;
        this.setState({ value:'', status: 'default' });
        if (onClear) onClear();
        if (input) input.onBlur(value);
    }
    
    togglePass() {
        const { showPass } = this.state;
        this.setState({showPass:!showPass, passIconBeingClicked: true});
    }
    
    focusInput() {
        this.setState({passIconBeingClicked: false});
        this.input.focus();
    }
    
    outOfPassIcon() {
        this.setState({passIconBeingClicked: false});
    }
    
    setClassName(status) {
        const { classes, className } = this.props;
        let containerClassName = classes.container + ' ' + classes[status];
        if (className) containerClassName += ' ' + className;
        return containerClassName;
    }
    
    setInputClassName() {
        const { classes, iconName, clear, type, inputClassName } = this.props;
        let className = classes.input;
        if (iconName) className += ' ' + classes.hasIcon;
        if (clear) className += ' ' + classes.hasClear;
        if (type == "select") className += ' ' + classes.select;
        if (type == "textarea") className += ' ' + classes.textarea;
        if (type == "password") className += ' ' + classes.hasPass;
        if (inputClassName) className += ' ' + inputClassName;
        return className;
    }
    
    render() {
        const { status, value, touched, showPass, passIconBeingClicked } = this.state;
        const { classes, input, meta, label, placeholder, counter, maxLength, type, name, options, id, style, disabled, autoFocus, error, assistiveText, clear, iconName, allowError, lockHeight, required } = this.props;
        let realStatus = status;
        let InputType = (type == "select" ? "select" : type == "textarea" ? "textarea" : "input");
        const errorStatus = (meta && meta.error && (meta.touched || allowError)) || (error && (touched || allowError)) && !passIconBeingClicked;
        
        if (status != 'focus') {
            if (disabled)
                realStatus = 'disabled';
            else if (errorStatus)
                realStatus = 'error';
        }
        
        let element, passIcon;
        const commonProps = {
            name,
            id,
            className:this.setInputClassName(),
            value:(input && input.value) ? input.value : value,
            autoFocus,
            maxLength,
            onFocus:this.onFocus,
            onBlur:this.onBlur,
            onChange:this.onChange,
            onKeyUp:this.onKeyUp,
            ref:ref => { this.input = ref; },
            required
        };
        if (disabled) {
            if (type == "select") {
                element = (
                    <label className={`${classes.input} ${classes.selectDisabled}${iconName ? ` ${classes.hasIcon}` : ''}`}>
                        {(input && input.value) ? input.value : value ? value : placeholder}
                    </label>
                );
            } else {
                element = (
                    <label className={`${classes.input}${iconName ? ` ${classes.hasIcon}` : ''}`}>
                        {(input && input.value) ? input.value : value ? value : placeholder}
                    </label>
                );
            }
            passIcon = (
                <div className={classes.passIcon}>
                    <Icon iconName="eye" width={18} height={18} colors={[colors.grey100]} />
                </div>
            );
        } else if (type == "select") {
            element = (
                <InputType
                    {...commonProps}
                >
                    <option value="" disabled hidden>{placeholder}</option>
                    {options.map(item => {
                        if (item.grouped) {
                            return (
                                <optgroup key={item.key} label={item.label} disabled={item.disabled}>
                                    {item.options.map(option => (
                                        <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>
                                    ))}
                                </optgroup>
                            );
                        } else {
                            return (
                                <option key={item.value} value={item.value} disabled={item.disabled}>{item.text}</option>
                            );
                        }
                    })}
                </InputType>
            );
        } else {
            element = (
                <InputType
                    {...commonProps}
                    placeholder={placeholder}
                    type={(type == 'password' && showPass) ? 'text' : type}
                />
            );
            passIcon = (
                <div onMouseDown={this.togglePass} onMouseUp={this.focusInput} onMouseOut={this.outOfPassIcon} className={classes.passIcon}>
                    <Icon iconName="eye" width={18} height={18} colors={showPass ? [colors.grey500] : [colors.grey200]} />
                </div>
            );
        }
        
        return (
            <div className={this.setClassName(realStatus)} style={style}>
                {(label || lockHeight) && (
                    <div className={classes.top}>
                        {label && (
                            <label className={`${classes.label} ${classes.left}`}>
                                {label}
                            </label>
                        )}
                    </div>
                )}
                <div className={classes.inputWrap}>
                    {iconName && (
                        <Icon iconName={iconName} width={24} height={24} className={classes.icon} colors={disabled ? [colors.grey500] : [colors.grey500]} />
                    )}
                    {type == 'password' && passIcon}
                    {(value && clear) && (
                        <div onClick={this.onClear} className={classes.clear}>
                            <Icon iconName="close" />
                        </div>
                    )}
                    {element}
                </div>
                {(assistiveText || (counter && maxLength) || lockHeight) && (
                    <div className={classes.bottom}>
                        {assistiveText && (
                            <label className={`${classes.label} ${classes.left} ${realStatus == 'error' ? classes.errorAssistiveText : classes.assistiveText}`}>
                                {realStatus == 'error' ? <Icon iconName="warning" width={14} height={14} className={classes.errorIcon} /> : null} {assistiveText}
                            </label>
                        )}
                        {(counter && maxLength) && (
                            <label
                                className={`${classes.label} ${classes.right} ${classes.counter}`}>
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
    maxLength: 100,
    disabled: false,
    autoFocus: false,
    clear: false,
    valueProp: '',
    selectOnFocus: false
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
    /** By default the TextField container would be smaller without a label or an assistive text. lockHeight will maintain the same height as if it had both, label and assistive text. */
    lockHeight: PropTypes.bool,
    /** Use as a default value. */
    valueProp: PropTypes.node,
    /** With this property set to true, the value of the input will be selected on focus. */
    selectOnFocus: PropTypes.bool,
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
    /** Set the TextField as required. */
    required: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default TextField;