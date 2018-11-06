import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

/** Group of buttons to toggle. */
class Pill extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            status: 'default',
            value: props.valueProp ? props.valueProp : undefined,
            touched: false
        };
        this.onClick = this.onClick.bind(this);
    }
    
    componentWillReceiveProps(props) {
        let { input, valueProp } = props;
        if (input && input.value)
            this.setState({ value: input.value });
        else if (valueProp != this.state.value)
            this.setState({ value: valueProp });
    }
    
    onClick(value) {
        const { onChange } = this.props;
        this.setState({
            value,
            touched: true
        });
        if (onChange) onChange(value);
    }
    
    render() {
        const { value, status, touched } = this.state;
        const { classes, label, assistiveText, group, meta, error, allowError, disabled, lockHeight } = this.props;
        let realStatus = status;
        const errorStatus = (meta && meta.error && (meta.touched || allowError)) || (error && (touched || allowError));
        if (disabled)
            realStatus = 'disabled';
        else if (errorStatus)
            realStatus = 'error';
        return (
            <div className={`${classes.container}${realStatus == 'disabled' ? ` ${classes.disabled}` : ''}`}>
                {(label || lockHeight) && (
                    <div className={classes.top}>
                        {label && (
                            <label className={`${classes.label} ${classes.left}`}>
                                {label}
                            </label>
                        )}
                    </div>
                )}
                <div className={classes.pillGroup}>
                    {group.map((pill, index) => (
                        <button key={pill.id} className={`${classes.pill}${value == pill.value ? ` ${classes.selected}` : ''}`} onClick={value != pill.value ? () => {this.onClick(pill.value, index);} : null}>{pill.label}</button>
                    ))}
                </div>
                {(assistiveText || lockHeight) && (
                    <div className={classes.bottom}>
                        {assistiveText && (
                            <label className={`${classes.label} ${classes.left} ${realStatus == 'error' ? classes.errorAssistiveText : classes.assistiveText}`}>
                                {realStatus == 'error' ? <Icon iconName="warning" width={14} height={14} className={classes.errorIcon} /> : null} {assistiveText}
                            </label>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

Pill.propTypes = {
    classes: PropTypes.object.isRequired,
    /** Label text to show above the button's group. */
    label: PropTypes.string,
    /** Assistive text to show below the button's group. This text turns into an error message when the component receives the error prop. */
    assistiveText: PropTypes.string,
    /** Array of items to render the buttons. Each item must have an id (unique), a value (unique) and a label. */
    group: PropTypes.array,
    /** Value received from the parent component to override the child's component value. */
    valueProp: PropTypes.string,
    /** Object sended by react-form. */
    input: PropTypes.object,
    /** Metadata sended by react-form. */
    meta: PropTypes.object,
    /** Function to call when selecting an option. */
    onChange: PropTypes.func,
    /** After doing your validations outside of this component, you can change the state of the Pill to 'error' with this bool property. */
    error: PropTypes.bool,
    /** It allows the component to display the error messages even if it hasn't been touched. */
    allowError: PropTypes.bool,
    /** Disable the pill group. */
    disabled: PropTypes.bool,
    /** By default the Pill container would be smaller without a label or an assistive text. lockHeight will maintain the same height as if it had both, label and assistive text. */
    lockHeight: PropTypes.bool
};

export default Pill;