import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.input ? props.input.value : props.value
        };
        this.toggle = this.toggle.bind(this);
    }

    componentWillReceiveProps(props) {
        const { input, value } = props;
        if (input && input.value != this.state.value)
            this.setState({ value: input.value });
        else if (value && this.state.value != value)
            this.setState({ value });
        else if(value != this.state.value)
            this.setState({ value });
    }

    toggle() {
        const { input, onChange, id, disabled } = this.props;
        if (!disabled) {
            let value = !this.state.value;
            this.setState({ value });
            if (input) input.onBlur(value);
            if (onChange) onChange(value, id);
        }
    }

    render() {
        const { value } = this.state;
        const { classes, input, label, disabled, id, className, style } = this.props;
        let state = input && input.value ? input.value : value;
        return (
            <div
                id={id}
                className={`${classes.cont}${state ? ` ${classes.active}` : ''}${disabled ? ` ${classes.disabled}` : ''}${className ? ` ${className}` : ''}`}
                // tabIndex={0}
                onClick={this.toggle}
                style={style}>
                <div className={classes.check} />
                {label && <Text standard tag="label" className={classes.label}>{label}</Text>}
            </div>
        );
    }
}

Checkbox.propTypes = {
    classes: PropTypes.object,
    /** Default value for the checkbox. */
    value: PropTypes.bool,
    /** The function to call when the value of the checkbox changes. */
    onChange: PropTypes.func,
    /** Disable the checkbox. */
    disabled: PropTypes.bool,
    /** Text to display next to the checkbox.  */
    label: PropTypes.node,
    /** This is the object that redux-form passes to the component. */
    input: PropTypes.object,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Checkbox;
