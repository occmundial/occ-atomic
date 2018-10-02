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
        const { classes, className, label, placeholder } = this.props;
        let containerClassName = classes.container + ' ' + classes[status];
        if (className) containerClassName += ' ' + classes.className;
        return containerClassName;
    }
    
    setInputClassName() {
        const { value } = this.state;
        const { classes, iconName, clear, type } = this.props;
        let inputClassName = classes.input;
        if (iconName) inputClassName += ' ' + classes.hasIcon;
        if (clear) inputClassName += ' ' + classes.hasClear;
        if (type == "textarea") inputClassName += ' ' + classes.textarea;
        if (type == "password") inputClassName += ' ' + classes.hasPass;
        return inputClassName;
    }
    
    
    render() {
        const { status, value, touched, showPass, passIconBeingClicked } = this.state;
        const { classes, input, meta, label, placeholder, counter, maxLength, type, name, id, style, disabled, autoFocus, error, assistiveText, clear, iconName, allowError } = this.props;
        let realStatus = status;
        let InputType = (type == "textarea" ? "textarea" : "input");
        const errorStatus = (meta && meta.error && (meta.touched || allowError)) || (error && (touched || allowError)) && !passIconBeingClicked;
        if (status != 'focus') {
            if (disabled)
                realStatus = 'disabled';
            else if (errorStatus)
                realStatus = 'error';
        }
        if (disabled) {
            return (
                <div className={this.setClassName(realStatus)} style={style}>
                    <div className={classes.top}>
                        {label && (
                            <label className={`${classes.label} ${classes.left}`}>
                                {label}
                            </label>
                        )}
                    </div>
                    {iconName && (
                        <Icon iconName={iconName} width={24} height={24} className={classes.icon} colors={[colors.grey100]} />
                    )}
                    {type == 'password' && (
                        <Icon iconName="eye" width={18} height={18} className={classes.passIcon} colors={[colors.grey100]} />
                    )}
                    <label className={`${classes.input}${iconName ? ` ${classes.hasIcon}` : ''}`}>
                        {(input && input.value) ? input.value : value ? value : placeholder}
                    </label>
                    <div className={classes.bottom}>
                        {assistiveText && (
                            <label className={`${classes.label} ${classes.left} ${classes.assistiveText}`}>
                                {assistiveText}
                            </label>
                        )}
                    </div>
                </div>
            );
        }
        return (
            <div className={this.setClassName(realStatus)} style={style}>
                <div className={classes.top}>
                    {label && (
                        <label
                            className={`${classes.label} ${classes.left}`}>
                            {label}
                        </label>
                    )}
                    {(counter && status == 'focus') && (
                        <label
                            className={`${classes.label} ${classes.right} ${classes.counter}`}>
                            {maxLength-value.length}
                        </label>
                    )}
                </div>
                {iconName && (
                    <Icon iconName={iconName} width={24} height={24} className={classes.icon} colors={[colors.grey500]} />
                )}
                {type == 'password' && (
                    <button onMouseDown={this.togglePass} onMouseUp={this.focusInput} onMouseOut={this.outOfPassIcon} className={classes.passIcon}>
                        <Icon iconName="eye" width={18} height={18} colors={showPass ? [colors.grey500] : [colors.grey200]} />
                    </button>
                )}
                <div className={classes.inputWrap}>
                    <InputType
                        type={(type == 'password' && showPass) ? 'text' : type}
                        name={name}
                        id={id}
                        className={this.setInputClassName()}
                        placeholder={placeholder}
                        value={(input && input.value) ? input.value : value}
                        autoFocus={autoFocus}
                        maxLength={maxLength}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                        onKeyUp={this.onKeyUp}
                        ref = {ref => { this.input = ref; }}
                    />
                </div>
                {(value && clear) && (
                    <button onClick={this.onClear} className={classes.clear}>
                        <Icon iconName="close" />
                    </button>
                )}
                <div className={classes.bottom}>
                    {assistiveText && (
                        <label className={`${classes.label} ${classes.left} ${realStatus == 'error' ? classes.errorAssistiveText : classes.assistiveText}`}>
                            {realStatus == 'error' ? <Icon iconName="warning" width={14} height={14} className={classes.errorIcon} /> : null} {assistiveText}
                        </label>
                    )}
                </div>
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
    /** If you want to display an icon on the left side, use any icon's name available in the library. */
    iconName: PropTypes.string,
    /** ClassName for the input tag. */
    inputClassName: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default TextField;