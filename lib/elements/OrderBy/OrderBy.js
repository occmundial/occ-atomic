import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

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
        const { classes, text, options, value } = this.props;
        return (
            <div className={classes.wrap}>
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
    text: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.node,
    onChange: PropTypes.func
};

export default OrderBy;