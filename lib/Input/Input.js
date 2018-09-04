import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import colors from '../subatomic/colors';

/** Input component that includes all the markup, functions and behaviors to implement any type of input field. */
class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            status: 'default',
            value: props.valueProp ? props.valueProp : '',
            touched: false,
            initialValue: props.valueProp ? props.valueProp : ''
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onClear = this.onClear.bind(this);
        this.setAsComplete = this.setAsComplete.bind(this);
    }
    
    componentWillMount() {
        let { input, onRef } = this.props;
        if (input && input.value)
            this.setState({ value: input.value });
            if (onRef) onRef(this);
    }
    
    componentDidMount() {
        let { value } = this.state;
        if (value) {
            this.setAsComplete();
        }
    }
    
    componentWillReceiveProps(props) {
        let { input, valueProp } = props;
        let { initialValue } = this.state;
        if (input && input.value)
            this.setState({ value: input.value });
        else if (valueProp && valueProp != initialValue)
            this.setState({ value: valueProp });
    }
    
    componentWillUnmount() {
        let { onRef } = this.props;
        if (onRef) onRef(undefined);
    }
    
    setAsComplete() {
        this.setState({ status: 'complete' });
    }
    
    onFocus({ target }) {
        const { onFocus, selectOnFocus } = this.props;
        if (selectOnFocus) target.select();
        this.setState({ status:'focus', touched: true });
        if (onFocus) onFocus();
    }
    
    onBlur({ target: {value} }) {
        const { input, onBlur } = this.props;
        this.setState({ value:value, status: value.length ? 'complete' : 'default' });
        if (onBlur) onBlur(value);
        if (input) input.onBlur(value);
    }
    
    onChange({ target: {value} }) {
        const { input, onChange } = this.props;
        this.setState({ value:value });
        if (onChange) onChange(value);
        if (input) input.onBlur(value);
    }
    
    onKeyUp({ target: {value}, which }) {
        const { onKeyUp } = this.props;
        if (onKeyUp) onKeyUp(value, which);
    }
    
    onClear() {
        const { input, onClear } = this.props;
        this.setState({ value:'', status: 'default' });
        if (onClear) onClear();
        if (input) input.onBlur(value);
    }
    
    setIconColor(status) {
        let iconColors = {
            default: colors.black,
            focus: colors.blue,
            complete: colors.black,
            correct: colors.green,
            error: colors.red,
            disabled: colors.grey1
        };
        return iconColors[status];
    }
    
    render() {
        const { status, value, touched } = this.state;
        const { input, classes, className, label, placeholder, counter, maxLength, type, options, name, id, style, disabled, meta, autoFocus, error, valid, clear, iconName } = this.props;
        let realStatus = status;
        let InputType = (type == "textarea" ? "textarea" : type == "select" ? "select" : "input");
        if (status != 'focus') {
            if (disabled)
                realStatus = 'disabled';
            else if ((meta && meta.error && meta.touched) || touched && error)
                realStatus = 'error';
            else if ((meta && meta.valid) || (touched && valid))
                realStatus = 'correct';
            else if (input && input.value)
                realStatus = 'complete';
        }
        let iconColor;
        if (iconName)
            iconColor = this.setIconColor(realStatus);
        if (disabled) {
            return (
                <div className={`${classes.container} ${classes.disabled} ${(!label && placeholder) && classes.push}${className ? ` ${className}` : ''}`} style={style}>
                    {label && (
                        <label className={`${classes.label} ${classes.left}`}>
                            {label}
                        </label>
                    )}
                    <label className={`${classes.input}${iconName ? ` ${classes.hasIcon}` : ''}`}>
                        {(input && input.value) ? input.value : value ? value : placeholder}
                    </label>
                </div>
            );
        }
        return (
            <div className={`${classes.container} ${classes[realStatus]}${(!label && placeholder) ? ` ${classes.push}` : ''}${className ? ` ${className}` : ''}`} style={style}>
                {label && (
                    <label
                        className={`${classes.label} ${classes.left}`}>
                        {label}
                    </label>
                )}
                {(!label && placeholder) && (
                    <label
                        className={`${classes.label} ${classes.left} ${classes.placeholder}${iconName ? ` ${classes.pushHolder}` : ''}`}>
                        {placeholder}
                    </label>
                )}
                {iconName && (
                    <Icon iconName={iconName} width={24} height={24} display="inline-block" className={classes.icon} colors={[iconColor]} />
                )}
                {(counter && status == 'focus') && (
                    <label
                        className={`${classes.label} ${classes.right} ${classes.counter}`}>
                        {maxLength-value.length}
                    </label>
                )}
                <div className={classes.inputWrap}>
                    {type == "select" ? (
                        <InputType
                            type={type}
                            name={name}
                            id={id}
                            className={`${classes.input} ${classes.select}${iconName ? ` ${classes.hasIcon}` : ''}${clear ? ` ${classes.hasClear}` : ''}${type == "textarea" ? ` ${classes.textarea}` : ''}${(value && type=="textarea") ? ` ${classes.expanded}` : ''}`}
                            placeholder={(label && placeholder) ? placeholder : ''}
                            value={(input && input.value) ? input.value : value}
                            autoFocus={autoFocus}
                            maxLength={maxLength}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onChange={this.onChange}
                            ref = {ref => { this.child = ref; }}
                        >
                            {options.map(option => (
                                <option key={option.value} value={option.value}>{option.text}</option>
                            ))}
                        </InputType>
                    ) : (
                        <InputType
                            type={type}
                            name={name}
                            id={id}
                            className={`${classes.input}${iconName ? ` ${classes.hasIcon}` : ''}${clear ? ` ${classes.hasClear}` : ''}${type == "textarea" ? ` ${classes.textarea}` : ''}${(value && type=="textarea") ? ` ${classes.expanded}` : ''}`}
                            placeholder={(label && placeholder) ? placeholder : ''}
                            value={(input && input.value) ? input.value : value}
                            autoFocus={autoFocus}
                            maxLength={maxLength}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onChange={this.onChange}
                            onKeyUp={this.onKeyUp}
                            ref = {ref => { this.child = ref; }}
                        />
                    )}
                </div>
                {(value && clear) && (
                    <button onClick={this.onClear} className={classes.clear}><Icon iconName="close" /></button>
                )}
                {((meta && meta.error && meta.touched) || (error && touched) && status != 'focus') && (
                    <label className={`${classes.label} ${classes.error}`}>{meta ? meta.error : error}</label>
                )}
            </div>
        );
    }
}

Input.defaultProps = {
    type: 'text',
    counter: false,
    maxLength: 100,
    disabled: false,
    autoFocus: false,
    clear: false,
    valueProp: '',
    selectOnFocus: false
};

Input.propTypes = {
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
    /** After doing your validations outside of this component, you cand send an error string. */
    error: PropTypes.string,
    /** If the input value is valid after your validations, you can use this property to highlight the input in green. */
    valid: PropTypes.bool,
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
    /** Function to call after clicking the 'x' icon shown by the 'clear' property. */
    onClear: PropTypes.func,
    /** Function to call when you need to call the input by a reference. */
    onRef: PropTypes.func,
    /** Array of objects with options in case you set the 'type' property as 'select'. Each option must have a value and a text. */
    options: PropTypes.array,
    /** If you want to display an icon on the left side, use any icon's name available in the library. */
    iconName: PropTypes.string,
    /** Provide a theme name to change the component's look & feel. Use 'flat' to use the new theme. Ignore it to use the default theme. */
    theme: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Input;