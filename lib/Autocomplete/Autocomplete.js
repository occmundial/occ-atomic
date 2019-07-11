import React from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';

import TextField from '../TextField';
import Droplist from '../Droplist';

/**
* This component integrates the TextField and Droplist components.
* The value of TextField filters the list in Droplist.
*/
class Autocomplete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.textfieldProps.valueProp ? props.textfieldProps.valueProp : '',
            focus: false,
            labels: []
        };
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.forceValue = this.forceValue.bind(this);
        this.setRef = this.setRef.bind(this);
    }

    componentWillMount() {
        let { onRef } = this.props;
        if (onRef) onRef(this);
    }

    componentWillReceiveProps(props) {
        if (props.textfieldProps.valueProp !== this.props.textfieldProps.valueProp) {
            this.setState({ value: props.textfieldProps.valueProp });
        }
    }

    componentWillUnmount() {
        let { onRef } = this.props;
        if (onRef) onRef(undefined);
    }

    onChange(value) {
        const { onChange } = this.props;
        this.setState({ value, focus: true });
        if (onChange) onChange(value);
    }

    onFocus() {
        const { onFocus } = this.props;
        this.setState({ focus: true });
        if (onFocus) onFocus();
    }

    onBlur() {
        const { onBlur } = this.props;
        this.setState({ focus: false });
        if (onBlur) onBlur();
    }

    onKeyUp(key) {
        const { onKeyUp } = this.props;
        if (onKeyUp) onKeyUp(key);
    }

    onClear() {
        const { onClear } = this.props;
        this.setState({ value: '' });
        if (onClear) onClear();
    }

    onMouseDown(item) {
        const { onMouseDown, onChange, droplistProps } = this.props;
        this.setState({
            value: item[droplistProps.itemTextKey], focus: false
        });
        if (onChange) onChange(item[droplistProps.itemTextKey]);
        if (onMouseDown) onMouseDown(item);
    }

    onEnter(item) {
        const { onEnter, onChange, droplistProps } = this.props;
        this.setState({
            value: item[droplistProps.itemTextKey], focus: false
        });
        if (onChange) onChange(item[droplistProps.itemTextKey]);
        if (onEnter) onEnter(item);
    }

    forceValue(value) {
        this.setState({value});
    }

    setRef(input) {
        if (input) this.input = input;
    }

    render() {
        const { value, focus } = this.state;
        const { classes, id, textfieldProps, droplistProps, className, style } = this.props;
        return (
            <div className={`${classes.autoComplete}${className ? ` ${className}` : ''}`} id={id} style={style} ref = {ref => { this.autocomplete = ref; }}>
                <TextField
                    {...textfieldProps}
                    onRef={this.setRef}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onKeyUp={this.onKeyUp}
                    onClear={this.onClear}
                    valueProp={value}
                />
                {(value && focus && droplistProps.items) ? (
                    <Droplist
                        {...droplistProps}
                        items={cloneDeep(droplistProps.items)}
                        term={value}
                        onMouseDown={this.onMouseDown}
                        onEnter={this.onEnter}
                        isOnFocus
                        className={`${classes.droplist}${droplistProps.className ? ` ${droplistProps.className}` : ''}`} />
                ) : null}
            </div>
        );
    }
}

Autocomplete.propTypes = {
    classes: PropTypes.object,
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
