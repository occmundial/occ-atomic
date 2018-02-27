import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

const styles = {
    container: {
        marginBottom:'16px',
        paddingBottom:'11px',
        position:'relative'
    },
    default: {
        color:colors.grey4,
        '& $input': {
            borderColor:colors.grey1,
        },
        '& $placeholder': {
            top:'20px',
            fontSize:'16px',
            color:colors.grey6
        }
    },
    focus: {
        color:colors.blue,
        '& $input': {
            borderColor:colors.blue,
        },
        '& $placeholder': {
            color:colors.blue
        }
    },
    complete: {
        color:colors.black2,
        '& $input': {
            borderColor:colors.black2,
        },
        '& $placeholder': {
            color:colors.black2
        }
    },
    correct: {
        color:colors.green,
        '& $input': {
            borderColor:colors.green,
        },
        '& $placeholder': {
            color:colors.green
        }
    },
    error: {
        color:colors.red,
        '& $input': {
            borderColor:colors.red,
        },
        '& $placeholder': {
            color:colors.red
        }
    },
    label: {
        float:'left',
        display:'inline-block',
        maxWidth:'100%',
        fontFamily:fonts.body,
        fontSize:'11px',
        fontWeight:'normal',
        marginBottom:'0',
        transition:'0.3s all'
    },
    left: {
        float:'left'
    },
    push: {
        paddingTop:'15px'
    },
    counter: {
        position:'absolute',
        top:'0',
        right:'0'
    },
    placeholder: {
        position:'absolute',
        pointerEvents:'none',
        fontSize:'11px',
        top:'0'
    },
    input: {
        boxSizing:'border-box',
        display:'flex',
        alignItems:'center',
        width:'100%',
        height:'34px',
        color:colors.black,
        fontFamily:fonts.body,
        fontWeight:'normal',
        fontSize:'16px',
        lineHeight:'16px',
        background:'transparent',
        border:'0',
        borderBottom:`1px solid ${colors.grey1}`,
        padding:'10px 0',
        marginBottom:'4px',
        outline:'none',
        transition:'0.3s all',
        '&::placeholder': {
            color:colors.grey6
        }
    }
};

class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            status: 'default',
            value: props.valueProp ? props.valueProp : '',
            touched: false,
            initialValue: props.valueProp ? props.valueProp : ''
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
    
    componentDidMount() {
        let { value } = this.state;
        if (value) {
            this.setState({ status: 'complete' })
        };
    }
    
    componentWillReceiveProps(props) {
        let { input, valueProp } = props;
        let { value, initialValue } = this.state;
        if (input && input.value)
            this.setState({ value: input.value });
        else if (valueProp && valueProp != initialValue)
            this.setState({ value: valueProp });
    }
    
    onFocus() {
        const { onFocus } = this.props;
        this.setState({ status:'focus', touched: true });
        if (onFocus) onFocus();
    }
    
    onBlur({ target: {value} }) {
        const { input, onBlur } = this.props;
        this.setState({ value:value, status: value.length ? 'complete' : 'default' });
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
        const { status, value, touched } = this.state;
        const { input, classes, label, placeholder, counter, maxLength, type, name, id, readOnly, meta, autoFocus, error, valid } = this.props;
        let realStatus = status;
        if (status != 'focus') {
            if ((meta && meta.error && meta.touched) || touched && error)
                realStatus = 'error';
            else if ((meta && meta.valid) || (touched && valid))
                realStatus = 'correct';
            else if (input && input.value)
                realStatus = 'complete';
        }
        if (readOnly) {
            return (
                <div className={`${classes.container} ${classes.complete} ${(!label && placeholder) && classes.push}`}>
                    {label && (
                        <label className={`${classes.label} ${classes.left}`}>
                            {label}
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
                    placeholder={(label && placeholder) ? placeholder : ''}
                    value={(input && input.value) ? input.value : value}
                    autoFocus={autoFocus}
                    maxLength={maxLength}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                />
                {((meta && meta.error && meta.touched) || (error && touched)) && (
                    <label className={`${classes.label} ${classes.error}`}>{meta ? meta.error : error}</label>
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
    error: PropTypes.string,
    valueProp: PropTypes.string,
    meta: PropTypes.object,
    input: PropTypes.object,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
};

export default injectSheet(styles)(Input);