import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import v from './globals';

const styles = {
    container: {
        marginBottom:'15px',
        paddingBottom:'20px',
        position:'relative'
    },
    default: {
        color:v.colors.grey4,
        '& $input': {
            borderColor:v.colors.grey1,
        },
        '& $placeholder': {
            top:'24px',
            fontSize:'14px',
            color:v.colors.grey4
        }
    },
    focus: {
        color:v.colors.blue,
        '& $input': {
            borderColor:v.colors.blue,
        },
        '& $placeholder': {
            color:v.colors.blue
        }
    },
    complete: {
        color:v.colors.black2,
        '& $input': {
            borderColor:v.colors.black2,
        },
        '& $placeholder': {
            color:v.colors.black2
        }
    },
    correct: {
        color:v.colors.green,
        '& $input': {
            borderColor:v.colors.green,
        },
        '& $placeholder': {
            color:v.colors.green
        }
    },
    error: {
        color:v.colors.red,
        '& $input': {
            borderColor:v.colors.red,
        },
        '& $placeholder': {
            color:v.colors.red
        }
    },
    label: {
        float:'left',
        display:'inline-block',
        maxWidth:'100%',
        fontFamily:v.fonts.body,
        fontSize:'12px',
        fontWeight:'normal',
        marginBottom:'0',
        transition:'0.3s all'
    },
    left: {
        float:'left'
    },
    push: {
        paddingTop:'17px'
    },
    counter: {
        position:'absolute',
        top:'0',
        right:'0'
    },
    placeholder: {
        position:'absolute',
        pointerEvents:'none',
        fontSize:'12px',
        top:'0'
    },
    input: {
        display:'flex',
        alignItems:'center',
        width:'100%',
        height:'34px',
        lineHeight:'1.42857143',
        color:v.colors.black,
        fontFamily:v.fonts.body,
        fontWeight:'normal',
        background:'transparent',
        border:'0',
        borderBottom:`1px solid ${v.colors.grey1}`,
        padding:'3px 0',
        outline:'none',
        transition:'0.3s all'
    }
};

class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            status: 'default',
            value: props.valueProp ? props.valueProp : ''
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    componentWillMount() {
        let { input } = this.props;
        let { value } = this.state;
        if (input && input.value)
            this.setState({ value: input.value });
    }
    
    componentWillReceiveProps(props) {
        let { input } = props;
        let { value } = this.state;
        if (input && input.value)
            this.setState({ value: input.value });
    }
    
    onFocus() {
        const { onFocus } = this.props;
        this.setState({ status:'focus' });
        if (onFocus) onFocus();
    }
    
    onBlur({ target: {value} }) {
        const { input, onBlur } = this.props;
        this.setState({ value:value, status: value.length ? 'complete' : 'normal' });
        if (onBlur) onBlur(value);
        if (input) input.onBlur(value);
    }
    
    onChange({ target: {value} }) {
        const { maxLength, input, onChange } = this.props;
        this.setState({ value:value });
        if (onChange) onChange(value);
        if (input) input.onBlur(value);
    }
    
    render() {
        const { status, value } = this.state;
        const { input, classes, label, placeholder, counter, maxLength, type, name, id, readOnly, meta, autoFocus } = this.props;
        let realStatus = status;
        if (status != 'focus') {
            if (meta && meta.error && meta.touched)
                realStatus = 'error';
            else if (input && input.value)
                realStatus = 'complete';
        }
        if (readOnly) {
            return (
                <div className={`${classes.container} ${classes.complete} ${(!label && placeholder) && classes.push}`}>
                    {placeholder && (
                        <label className={`${classes.label} ${classes.placeholder}`}>
                            {placeholder}
                        </label>
                    )}
                    <label className={classes.input}>
                        {(input && input.value) ? input.value : value}
                    </label>
                </div>
            );
        }
        return (
            <div className={`${classes.container} ${classes[realStatus]} ${(!label && placeholder) && classes.push}`}>
                {label && (
                    <label
                        className={`${classes.label} ${classes.left}`}>
                        {label}
                    </label>
                )}
                {(!label && placeholder) && (
                    <label
                        className={`${classes.label} ${classes.left} ${classes.placeholder}`}>
                        {placeholder}
                    </label>
                )}
                {(counter && status == 'focus') && (
                    <label
                        className={`${classes.label} ${classes.right} ${classes.counter}`}>
                        {maxLength-value.length}
                    </label>
                )}
                <input
                    type={type}
                    name={name}
                    id={id}
                    className={classes.input}
                    value={(input && input.value) ? input.value : value}
                    autoFocus={autoFocus}
                    maxLength={maxLength}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                />
                {(meta && meta.error && meta.touched) && (
                    <label className={`${classes.label} ${classes.error}`}>{meta.error}</label>
                )}
            </div>
        );
    }
}

Input.defaultProps = {
    type: 'text',
    counter: false,
    maxLength: 100,
    readOnly: false,
    autoFocus: false,
    valueProp: ''
};

Input.propTypes = {
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    readOnly: PropTypes.bool,
    counter: PropTypes.bool,
    autoFocus: PropTypes.bool,
    valueProp: PropTypes.string,
    meta: PropTypes.object,
    input: PropTypes.object,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
};

export default injectSheet(styles)(Input);