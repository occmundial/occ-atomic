import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

const styles = {
    cont: {
        outline:'0',
        marginBottom:'15px',
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
            width:'16px',
            height:'16px'
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
    label: {
        fontFamily:fonts.body,
        fontSize:'14px',
        color:colors.grey7,
        lineHeight:'26px',
        paddingLeft:'5px',
        paddingRight:'10px',
        float:'left',
        transition:'0.3s all',
    },
    right: {
        extend:'label',
        color:colors.grey1,
        float:'right',
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
        const { input, onChange, id, readOnly } = this.props;
        if (!readOnly) {
            let value = !this.state.value;
            this.setState({ value });
            if (input) input.onBlur(value);
            if (onChange) onChange(value, id);
        }
    }

    render() {
        const { value } = this.state;
        const { classes, input, label, right, id, className, style } = this.props;
        let state = input && input.value ? input.value : value;
        return (
            <div id={id} className={`${classes.cont}${state ? ` ${classes.active}` : ''}${className ? ` ${className}` : ''}`} tabIndex={0} onClick={this.toggle} style={style}>
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
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    right: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default injectSheet(styles)(Check);