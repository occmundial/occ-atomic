import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

const styles = {
    wrap: {
        display:'flex'
    },
    text: {
        fontFamily:fonts.body,
        fontSize:'14px',
        color:colors.grey7
    },
    select: {
        appearance:'none',
        background:icons.base(icons.arrowDownFilled.icon()),
        backgroundSize:'12px 12px',
        backgroundPosition:'calc(100% - 2px) 5px',
        paddingRight:'25px',
        marginLeft:'5px',
        border:'0',
        fontFamily:fonts.body,
        fontSize:'14px',
        color:colors.grey7,
        outline:'0',
        textAlign:'right',
        cursor:'pointer'
    }
};

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

export default injectSheet(styles)(OrderBy);