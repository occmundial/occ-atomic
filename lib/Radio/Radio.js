import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

class Radio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected
        };
        this.onChange = this.onChange.bind(this);
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

    render() {
        const { selected } = this.state;
        const { classes, options, id, className, style } = this.props;
        return (
            <div id={id}>
                {options.map(option => (
                    <div
                        key={option.value}
                        className={`${classes.cont}${selected == option.value ? ` ${classes.active}` : ''}${option.disabled ? ` ${classes.disabled}` : ''}${className ? ` ${className}` : ''}`}
                        onClick={() => { this.onChange(option); }}
                        style={style}>
                        <div className={classes.radio} />
                        {option.label && <Text standard tag="label" className={classes.label}>{option.label}</Text>}
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
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    /** The function to call when the value of the radio group changes. */
    onChange: PropTypes.func,
    /** Array of options to switch the value of the radio. The options must have a value and a label. */
    options: PropTypes.array,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Radio;
