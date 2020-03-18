import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import classnames from 'classnames';

import TextField from '../TextField';
import Droplist from '../Droplist';

import useStyles from './styles';

import usePrevious from '../hooks/usePrevious';

/**
* This component integrates the TextField and Droplist components.
* The value of TextField filters the list in Droplist.
*/
const Autocomplete = (props) => {
    const { textfieldProps, droplistProps, onChange, onFocus, onBlur, onKeyUp, onClear, onMouseDown, onEnter, id, className, style } = props;
    const classes = useStyles(props);
    const [value, setValue] = useState(textfieldProps.valueProp || '');
    const [focus, setFocus] = useState(false);
    const autocompleteRef = useRef(null);
    const textfieldRef = useRef(null);
    const prevTextfieldProps = usePrevious(textfieldProps) || {};

    useEffect(() => {
        if (textfieldProps.valueProp !== prevTextfieldProps.valueProp)
            setValue(textfieldProps.valueProp);
    }, [textfieldProps.valueProp, prevTextfieldProps.valueProp]);

    const _onChange = useCallback(value => {
        setValue(value);
        setFocus(true);
        if (onChange) onChange(value);
    }, [onChange]);

    const _onFocus = useCallback(() => {
        setFocus(true);
        if (onFocus) onFocus();
    }, [onFocus]);

    const _onBlur = useCallback(() => {
        setFocus(false);
        if (onBlur) onBlur();
    }, [onBlur]);

    const _onKeyUp = useCallback(key => {
        if (onKeyUp) onKeyUp(key);
    }, [onKeyUp]);

    const _onClear = useCallback(() => {
        setValue('');
        if (onClear) onClear();
    }, [onClear]);

    const _onMouseDown = useCallback(item => {
        setValue(item[droplistProps.itemTextKey]);
        setFocus(false);
        if (onChange) onChange(item[droplistProps.itemTextKey]);
        if (onMouseDown) onMouseDown(item);
    }, [droplistProps.itemTextKey, onChange, onMouseDown]);

    const _onEnter = useCallback(item => {
        setValue(item[droplistProps.itemTextKey]);
        setFocus(false);
        if (onChange) onChange(item[droplistProps.itemTextKey]);
        if (onEnter) onEnter(item);
    }, [droplistProps.itemTextKey, onChange, onEnter]);

    return (
        <div className={classnames(classes.autoComplete, className)} id={id} style={style} ref={autocompleteRef}>
            <TextField
                {...textfieldProps}
                ref={textfieldRef}
                onChange={_onChange}
                onFocus={_onFocus}
                onBlur={_onBlur}
                onKeyUp={_onKeyUp}
                onClear={_onClear}
                valueProp={value}
            />
            {(value && focus && droplistProps.items) && (
                <Droplist
                    {...droplistProps}
                    items={cloneDeep(droplistProps.items)}
                    term={value}
                    onMouseDown={_onMouseDown}
                    onEnter={_onEnter}
                    isOnFocus
                    className={classnames(classes.droplist, droplistProps.className)}
                />
            )}
        </div>
    );
};

Autocomplete.propTypes = {
    /** Object with the props for the TextField component. Check their descriptions in the TextField docs. */
    textfieldProps: PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        name: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        selectOnFocus: PropTypes.bool,
        clear: PropTypes.bool,
        iconName: PropTypes.string,
        theme: PropTypes.string,
        valueProp: PropTypes.string,
        className: PropTypes.string,
        inputClassName: PropTypes.string,
        disabled: PropTypes.bool
    }).isRequired,
    /** Object with the props for the Droplist component. Check their descriptions in the Droplist docs. */
    droplistProps: PropTypes.shape({
        items: PropTypes.array,
        itemIdKey: PropTypes.string,
        itemTextKey: PropTypes.string,
        itemTextRightKey: PropTypes.string,
        groups: PropTypes.bool,
        groupIdKey: PropTypes.string,
        groupNameKey: PropTypes.string,
        groupItemsKey: PropTypes.string,
        className: PropTypes.string,
        filter: PropTypes.bool
    }).isRequired,
    /** Function to call on change (TextField). */
    onChange: PropTypes.func,
    /** Function to call on key up (TextField). */
    onKeyUp: PropTypes.func,
    /** Function to call on focus (TextField). */
    onFocus: PropTypes.func,
    /** Function to call on blur (TextField). */
    onBlur: PropTypes.func,
    /** Function to call on clear (TextField). */
    onClear: PropTypes.func,
    /** Function to call on mouse down (Droplist item). */
    onMouseDown: PropTypes.func,
    onRef: PropTypes.func,
    /**  Disables native autoComplete on browsers. */
    disableAutoComplete: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

Autocomplete.defaultProps = {
    textfieldProps: {},
    droplistProps: {},
    disableAutoComplete: false
};

export default Autocomplete;
