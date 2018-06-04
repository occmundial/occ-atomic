import React from 'react';
import PropTypes from 'prop-types';

/** The OrderBy component shows a label and a dropdown with the values to order a set of items. You have to do that ordering by receiving the OrderBy value with an onChange function. */
class OrderBy extends React.Component {
    
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    
    onChange({target: {value}}) {
        const { onChange } = this.props;
        if (onChange) onChange(value);
    }
    
    render() {
        const { classes, text, options, value, id, className, style } = this.props;
        return (
            <div className={`${classes.wrap}${className ? ` ${className}` : ''}`} id={id} style={style}>
                <span className={classes.text}>{text}</span>
                <select className={classes.select} value={value} onChange={this.onChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.text}</option>
                    ))}
                </select>
            </div>
        );
    }
}

OrderBy.propTypes = {
    classes: PropTypes.object,
    /** Text to be displayed on the left. */
    text: PropTypes.string,
    /** Array with all the options to show in the dropdown. */
    options: PropTypes.array.isRequired,
    /** Set a default value. */
    value: PropTypes.node,
    /** Function to call when the value of the dropdown changes. */
    onChange: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default OrderBy;