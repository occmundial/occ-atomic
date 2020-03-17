import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import classnames from 'classnames';

import Text from '../Text';
import Icon from '../Icon';

import colors from '../subatomic/colors';
import iconSizes from '../subatomic/iconSizes';

import useStyles from './styles';

import usePrevious from '../hooks/usePrevious';

/**
* TextField component that includes all the markup, functions and behaviors to implement any type of input field.
*/
const TextField = forwardRef(({
    className,
    valueProp,
    disabled,
    onFocus,
    selectOnFocus,
    onBlur,
    onChange,
    onKeyUp,
    onClear,
    regex,
    iconName,
    clear,
    type,
    inputClassName,
    alignRight,
    hjWhitelist,
    label,
    placeholder,
    counter,
    maxLength,
    name,
    options,
    id,
    style,
    autoFocus,
    error,
    assistiveText,
    allowError,
    lockHeight,
    required,
    mask,
    guide,
    disableAutoComplete
}, ref) => {
    const classes = useStyles();
    const [status, setStatus] = useState('default');
    const [value, setValue] = useState(valueProp || '');
    const [touched, setTouched] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [passIconBeingClicked, setPassIconBeingClicked] = useState(false);
    const prevDisabled = usePrevious(disabled);
    const inputRef = useRef(null);

    useEffect(() => {
        if (valueProp !== value) setValue(valueProp);
        if (disabled && !prevDisabled) setStatus('default');
    }, [valueProp, disabled, prevDisabled]);

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current.focus(),
        blur: () => inputRef.current.blur()
    }));

    const _onFocus = useCallback(({ target }) => {
        if (selectOnFocus) target.select();
        setStatus('focus');
        setTouched(true);
        if (onFocus) onFocus();
    }, [onFocus, selectOnFocus]);

    const _onBlur = useCallback(({ target: {value} }) => {
        setValue(value);
        setStatus('default');
        if (onBlur) onBlur(value);
    }, [onBlur]);

    const _onChange = useCallback(({ target: {value} }) => {
        let valid = true;
        if (regex) valid = new RegExp(regex).test(value);
        if (valid) {
            setValue(value);
            if (onChange) onChange(value);
        }
    }, [onChange, regex]);

    const _onKeyUp = useCallback(({ which, keyCode }) => {
        if (onKeyUp) onKeyUp(which || keyCode);
    }, [onKeyUp]);

    const _onClear = useCallback(() => {
        setValue('');
        setStatus('default');
        if (onClear) onClear();
    }, [onClear]);

    const togglePass = useCallback(() => {
        setShowPass(!showPass);
        setPassIconBeingClicked(true);
    }, [showPass]);

    const focusInput = useCallback(() => {
        setPassIconBeingClicked(false);
        inputRef.current.focus();
    }, []);

    const outOfPassIcon = useCallback(() =>
        setPassIconBeingClicked(false)
    , []);

    const errorStatus = useMemo(() =>
        (error && (touched || allowError)) && !passIconBeingClicked
    , [allowError, error, passIconBeingClicked, touched]);

    const realStatus = useMemo(() =>
        disabled ? 'disabled' : status !== 'focus' && errorStatus ? 'error' : status
    , [status, disabled, errorStatus]);

    const InputType = useMemo(() =>
        type == 'select' ? 'select' : type == 'textarea' ? 'textarea' : 'input'
    , [type]);

    const _className = useMemo(() =>
        classnames(classes.container, classes[realStatus], className)
    , [className, classes, realStatus]);

    const _inputClassName = useMemo(() =>
        classnames(
            classes.input,
            { [classes.hasIcon]: iconName },
            { [classes.hasClear]: clear },
            { [classes.alignRight]: alignRight },
            { [classes.select]: type === 'select' },
            { [classes.textarea]: type === 'textarea' },
            { [classes.hasPass]: type === 'password' },
            { 'data-hj-whitelist': hjWhitelist },
            inputClassName
        ),
        [alignRight, classes.alignRight, classes.hasClear, classes.hasIcon, classes.hasPass, classes.input, classes.select, classes.textarea, clear, hjWhitelist, iconName, inputClassName, type]
    );

    const commonProps = useMemo(() => ({
        name,
        id,
        className: _inputClassName,
        value,
        autoFocus,
        maxLength,
        onFocus: _onFocus,
        onBlur: _onBlur,
        onChange: _onChange,
        onKeyUp: _onKeyUp,
        ref: inputRef,
        required
    }), [name, id, _inputClassName, value, autoFocus, maxLength, _onFocus, _onBlur, _onChange, _onKeyUp, required]);

    const element = useMemo(() => {
        if (disabled) {
            if (type === 'select') {
                const selectedOption = options.filter(option => option.value == value);
                let optionLabel;
                if (selectedOption.length) optionLabel = selectedOption[0].label;
                return (
                    <label className={classnames(
                        classes.input,
                        { [classes.hasIcon]: iconName }
                    )}>
                        {optionLabel ? optionLabel : value ? value : placeholder}
                    </label>
                );
            } else return (
                <label className={classnames(
                    classes.input,
                    { [classes.textarea]: type === 'textarea' },
                    { [classes.hasIcon]: iconName }
                )}>
                    {value ? value : placeholder}
                </label>
            );
        } else if (type === 'select') return (
            <InputType
                {...commonProps}
            >
                <option value="" disabled hidden>{placeholder}</option>
                {options.map(item =>
                    item.grouped ? (
                        <optgroup key={item.key} label={item.label} disabled={item.disabled}>
                            {item.options.map(option => (
                                <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>
                            ))}
                        </optgroup>
                    ) : (
                        <option key={item.value} value={item.value} disabled={item.disabled}>{item.label}</option>
                    )
                )}
            </InputType>
        );
        else if (mask) return (
            <MaskedInput
                {...commonProps}
                placeholder={placeholder}
                type="text"
                mask={mask}
                guide={guide}
            />
        );
        else return (
            <InputType
                {...commonProps}
                placeholder={placeholder}
                type={(type == 'password' && showPass) ? 'text' : type}
                {...disableAutoComplete && {autoComplete:'off'}}
            />
        );
    }, [classes.hasIcon, classes.input, classes.textarea, commonProps, disableAutoComplete, disabled, guide, iconName, mask, options, placeholder, showPass, type, value]);

    const passIcon = useMemo(() =>
        disabled ? type !== 'select' ? (
            <div className={classes.passIcon}>
                <Icon iconName="eye" width={iconSizes.small} height={iconSizes.small} colors={[colors.grey100]} />
            </div>
        ) : null : type !== 'select' ? (
            <div onMouseDown={togglePass} onMouseUp={focusInput} onMouseOut={outOfPassIcon} className={classes.passIcon}>
                <Icon iconName="eye" width={iconSizes.small} height={iconSizes.small} colors={showPass ? [colors.grey500] : [colors.grey200]} />
            </div>
        ) : null
    , [classes.passIcon, disabled, focusInput, outOfPassIcon, showPass, togglePass, type]);

    return (
        <div className={_className} style={style}>
            {(label || lockHeight) && (
                <div className={classes.top}>
                    {label && (
                        <Text small tag="label" disabled={disabled} className={classnames(classes.label, classes.left)}>
                            {label}
                        </Text>
                    )}
                </div>
            )}
            <div className={classes.inputWrap}>
                {iconName && (
                    <Icon iconName={iconName} width={iconSizes.base} height={iconSizes.base} className={classes.icon} colors={[colors.grey500]} />
                )}
                {type == 'select' && (
                    <div className={classes.selectIcon}>
                        <Icon iconName="arrowDown" width={iconSizes.small} height={iconSizes.small} colors={disabled ? [colors.grey200] : [colors.grey900]} />
                    </div>
                )}
                {type == 'password' && passIcon}
                {(value && clear) && (
                    <div onClick={_onClear} className={classes.clear}>
                        <Icon iconName="close" />
                    </div>
                )}
                {element}
            </div>
            {(assistiveText || (counter && maxLength) || lockHeight) && (
                <div className={classes.bottom}>
                    {assistiveText && (
                        <Text
                            small
                            tag="label"
                            disabled={disabled && realStatus !== 'error'}
                            low={!disabled && realStatus !== 'error'}
                            error={!disabled && realStatus === 'error'}
                            className={classnames(classes.label, classes.left)}
                        >
                            {realStatus == 'error' ? <Icon iconName="warning" width={iconSizes.tiny} height={iconSizes.tiny} className={classes.errorIcon} /> : null} {assistiveText}
                        </Text>
                    )}
                    {(counter && maxLength) && (
                        <Text
                            small
                            tag="label"
                            disabled={disabled}
                            low={!disabled}
                            className={classnames(classes.label, classes.right)}
                        >
                            {value.length} / {maxLength}
                        </Text>
                    )}
                </div>
            )}
        </div>
    );

});

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
    /** Mask array or function to format the value of the TextField. For more information check *react-text-mask*. */
    mask: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func
    ]),
    /** Boolean to show or hide the full mask while writing. */
    guide: PropTypes.bool,
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
    style: PropTypes.object
};

export default TextField;
