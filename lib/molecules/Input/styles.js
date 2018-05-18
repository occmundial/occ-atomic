import colors from '../../subatomic/colors';
import fonts from '../../subatomic/fonts';
import icons from '../../subatomic/icons';

export default {
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