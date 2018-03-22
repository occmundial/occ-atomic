import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Icon from '../elements/Icon';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

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
    disabled: {
        color:colors.grey1,
        '& $input': {
            borderColor:colors.grey1,
            color:colors.grey1
        },
        '& $placeholder': {
            top:'20px',
            fontSize:'16px',
            color:colors.grey2
        },
        '& $pushHolder': {
            left:'0'
        }
    },
    focus: {
        color:colors.blue,
        '& $inputWrap:after': {
            width:'100%',
            left:'0'
        },
        '& $placeholder': {
            color:colors.blue
        },
        '& $pushHolder': {
            left:'0'
        }
    },
    complete: {
        color:colors.black2,
        '& $input': {
            borderColor:colors.black2,
        },
        '& $placeholder': {
            color:colors.black2
        },
        '& $pushHolder': {
            left:'0'
        }
    },
    correct: {
        color:colors.green,
        '& $input': {
            borderColor:colors.green,
        },
        '& $placeholder': {
            color:colors.green
        },
        '& $pushHolder': {
            left:'0'
        }
    },
    error: {
        color:colors.red,
        '& $input': {
            borderColor:colors.red,
        },
        '& $placeholder': {
            color:colors.red
        },
        '& $pushHolder': {
            left:'0'
        }
    },
    label: {
        boxSizing:'border-box',
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
    pushHolder: {
        left:'24px'
    },
    inputWrap: {
        boxSizing:'border-box',
        position:'relative',
        '&:after': {
            content:'""',
            display:'block',
            position:'absolute',
            background:colors.blue,
            transition:'0.3s all',
            bottom:'0',
            left:'50%',
            width:'0',
            height:'1px'
        },
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
    },
    textarea: {
        padding:'5px 0',
        lineHeight:'22px'
    },
    select: {
        padding:'0',
        appearance:'none',
        background:icons.base(icons.arrowDown.icon(['#4E6273'])),
        backgroundSize:'24px 24px',
        backgroundPosition:'calc(100% - 5px) 5px'
    },
    expanded: {
        height:'80px'
    },
    hasIcon: {
        paddingLeft:'24px'
    },
    icon: {
        position:'absolute',
        left:'0',
        top:'19px'
    },
    hasClear: {
        paddingRight:'24px'
    },
    clear: {
        background:'none',
        border:'0',
        padding:'0',
        margin:'0',
        position:'absolute',
        right:'0',
        top:'20px',
        outline:'0',
        cursor:'pointer'
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
        this.onClear = this.onClear.bind(this);
        this.setAsComplete = this.setAsComplete.bind(this);
    }
    
    componentWillMount() {
        let { input, onRef } = this.props;
        let { value } = this.state;
        if (input && input.value)
            this.setState({ value: input.value });
            if (onRef) onRef(this);
    }
    
    componentDidMount() {
        let { value } = this.state;
        if (value) {
            this.setAsComplete();
        }
    }
    
    componentWillReceiveProps(props) {
        let { input, valueProp } = props;
        let { value, initialValue } = this.state;
        if (input && input.value)
            this.setState({ value: input.value });
        else if (valueProp && valueProp != initialValue)
            this.setState({ value: valueProp });
    }
    
    componentWillUnmount() {
        let { onRef } = this.props;
        if (onRef) onRef(undefined);
    }
    
    setAsComplete() {
        this.setState({ status: 'complete' });
    }
    
    onFocus({ target }) {
        const { onFocus, selectOnFocus } = this.props;
        if (selectOnFocus) target.select();
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
    
    onClear() {
        const { input, onClear } = this.props;
        this.setState({ value:'', status: 'default' });
        if (onClear) onClear();
        if (input) input.onBlur(value);
    }
    
    setIconColor(status) {
        let iconColors = {
            default: colors.black,
            focus: colors.blue,
            complete: colors.black,
            correct: colors.green,
            error: colors.red,
            disabled: colors.grey1
        };
        return iconColors[status];
    }
    
    render() {
        const { status, value, touched } = this.state;
        const { input, classes, className, label, placeholder, counter, maxLength, type, options, name, id, style, disabled, meta, autoFocus, error, valid, clear, selectOnFocus, iconName } = this.props;
        let realStatus = status;
        let InputType = (type == "textarea" ? "textarea" : type == "select" ? "select" : "input");
        if (status != 'focus') {
            if (disabled)
                realStatus = 'disabled';
            else if ((meta && meta.error && meta.touched) || touched && error)
                realStatus = 'error';
            else if ((meta && meta.valid) || (touched && valid))
                realStatus = 'correct';
            else if (input && input.value)
                realStatus = 'complete';
        }
        let iconColor;
        if (iconName)
            iconColor = this.setIconColor(realStatus);
        if (disabled) {
            return (
                <div className={`${classes.container} ${classes.disabled} ${(!label && placeholder) && classes.push}${className ? ` ${className}` : ''}`} style={style}>
                    {label && (
                        <label className={`${classes.label} ${classes.left}`}>
                            {label}
                        </label>
                    )}
                    <label className={`${classes.input}${iconName ? ` ${classes.hasIcon}` : ''}`}>
                        {(input && input.value) ? input.value : value ? value : placeholder}
                    </label>
                </div>
            );
        }
        return (
            <div className={`${classes.container} ${classes[realStatus]} ${(!label && placeholder) && classes.push}${className ? ` ${className}` : ''}`} style={style}>
                {label && (
                    <label
                        className={`${classes.label} ${classes.left}`}>
                        {label}
                    </label>
                )}
                {(!label && placeholder) && (
                    <label
                        className={`${classes.label} ${classes.left} ${classes.placeholder}${iconName ? ` ${classes.pushHolder}` : ''}`}>
                        {placeholder}
                    </label>
                )}
                {iconName && (
                    <Icon iconName={iconName} width={24} height={24} display="inline-block" className={classes.icon} colors={[iconColor]} />
                )}
                {(counter && status == 'focus') && (
                    <label
                        className={`${classes.label} ${classes.right} ${classes.counter}`}>
                        {maxLength-value.length}
                    </label>
                )}
                <div className={classes.inputWrap}>
                    {type == "select" ? (
                        <InputType
                            type={type}
                            name={name}
                            id={id}
                            className={`${classes.input} ${classes.select}${iconName ? ` ${classes.hasIcon}` : ''}${clear ? ` ${classes.hasClear}` : ''}${type == "textarea" ? ` ${classes.textarea}` : ''}${(value && type=="textarea") ? ` ${classes.expanded}` : ''}`}
                            placeholder={(label && placeholder) ? placeholder : ''}
                            value={(input && input.value) ? input.value : value}
                            autoFocus={autoFocus}
                            maxLength={maxLength}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onChange={this.onChange}
                            ref = {ref => { this.child = ref; }}
                        >
                            {options.map(option => (
                                <option key={option.value} value={option.value}>{option.text}</option>
                            ))}
                        </InputType>
                    ) : (
                        <InputType
                            type={type}
                            name={name}
                            id={id}
                            className={`${classes.input}${iconName ? ` ${classes.hasIcon}` : ''}${clear ? ` ${classes.hasClear}` : ''}${type == "textarea" ? ` ${classes.textarea}` : ''}${(value && type=="textarea") ? ` ${classes.expanded}` : ''}`}
                            placeholder={(label && placeholder) ? placeholder : ''}
                            value={(input && input.value) ? input.value : value}
                            autoFocus={autoFocus}
                            maxLength={maxLength}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onChange={this.onChange}
                            ref = {ref => { this.child = ref; }}
                        />
                    )}
                </div>
                {(value && clear) && (
                    <button onClick={this.onClear} className={classes.clear}><Icon iconName="close" /></button>
                )}
                {((meta && meta.error && meta.touched) || (error && touched) && status != 'focus') && (
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
    disabled: false,
    autoFocus: false,
    clear: false,
    valueProp: '',
    selectOnFocus: false
};

Input.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.string,
    maxLength: PropTypes.number,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    counter: PropTypes.bool,
    autoFocus: PropTypes.bool,
    clear: PropTypes.bool,
    error: PropTypes.string,
    valid: PropTypes.bool,
    valueProp: PropTypes.node,
    selectOnFocus: PropTypes.bool,
    meta: PropTypes.object,
    input: PropTypes.object,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onRef: PropTypes.func,
    options: PropTypes.array,
    iconName: PropTypes.string
};

export default injectSheet(styles)(Input);