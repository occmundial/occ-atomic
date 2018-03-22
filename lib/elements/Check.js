import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

const styles = {
    cont: {
        boxSizing:'border-box',
        outline:'0',
        marginBottom:'15px',
        display:'flex',
        cursor:'pointer',
        '&:after': {
            content:'""',
            display:'table',
            clear:'both'
        },
        '&:hover $check': {
            borderColor:colors.green
        },
        '&:hover $label': {
            color:colors.black
        }
    },
    check: {
        boxSizing:'border-box',
        flex:'0 0 16px',
        width:'16px',
        height:'16px',
        margin:'4px',
        borderRadius:'1px',
        border:`1px solid ${colors.grey1}`,
        position:'relative',
        float:'left',
        transition:'0.3s all',
        '&:after': {
            content:'""',
            display:'block',
            position:'absolute',
            top:'0',
            left:'0',
            width:'14px',
            height:'14px'
        }
    },
    active: {
        '& $check': {
            background:colors.green,
            borderColor:colors.green,
            '&:after': {
                background:icons.base(icons.check.icon([colors.white]))
            }
        },
        '& $label': {
            color:colors.black
        }
    },
    disabled: {
        pointerEvents:'none',
        '& $check': {
            borderColor:colors.grey5
        },
        '&$active $check': {
            background:colors.grey5
        },
        '& $label': {
            color:colors.grey1
        }
    },
    label: {
        fontFamily:fonts.body,
        fontSize:'14px',
        color:colors.grey7,
        paddingTop:'3px',
        paddingLeft:'5px',
        paddingRight:'10px',
        float:'left',
        flex:'1',
        transition:'0.3s all'
    },
    right: {
        extend:'label',
        flex:'none',
        fontSize:'13px',
        color:colors.grey1,
        paddingRight:'0',
        float:'right'
    }
};

class Check extends React.Component {

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
        const { classes, input, label, right, disabled, id, className, style } = this.props;
        let state = input && input.value ? input.value : value;
        return (
            <div
                id={id}
                className={`${classes.cont}${state ? ` ${classes.active}` : ''}${disabled ? ` ${classes.disabled}` : ''}${className ? ` ${className}` : ''}`}
                tabIndex={0}
                onClick={this.toggle}
                style={style}>
                <div className={classes.check} />
                {label && <span className={classes.label}>{label}</span>}
                {right && <span className={classes.right}>{right}</span>}
            </div>
        );
    }
}

Check.propTypes = {
    classes: PropTypes.object,
    input: PropTypes.object,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    right: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default injectSheet(styles)(Check);