import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

export default {
    container: props => props.theme != 'flat' ? {
        marginBottom:'16px',
        paddingBottom:'11px',
        position:'relative'
    } : {
        position:'relative'
    },
    default: props => props.theme != 'flat' && {
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
    disabled: props => props.theme != 'flat' && {
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
    focus: props => props.theme != 'flat' && {
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
    complete: props => props.theme != 'flat' && {
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
    correct: props => props.theme != 'flat' && {
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
    error: props => props.theme != 'flat' && {
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
    label: props => props.theme != 'flat' ? {
        boxSizing:'border-box',
        float:'left',
        display:'inline-block',
        maxWidth:'100%',
        fontFamily:fonts.body,
        fontSize:'11px',
        fontWeight:'normal',
        marginBottom:'0',
        transition:'0.3s all'
    } : {
        fontFamily:fonts.body,
        fontSize:'14px',
        lineHeight:'24px',
        color:colors.white
    },
    left: props => props.theme != 'flat' && {
        float:'left'
    },
    push: props => props.theme != 'flat' && {
        paddingTop:'15px'
    },
    counter: props => props.theme != 'flat' && {
        position:'absolute',
        top:'0',
        right:'0'
    },
    placeholder: props => props.theme != 'flat' && {
        position:'absolute',
        pointerEvents:'none',
        fontSize:'11px',
        top:'0'
    },
    pushHolder: props => props.theme != 'flat' && {
        left:'24px'
    },
    inputWrap: props => props.theme != 'flat' && {
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
    input: props => props.theme != 'flat' ? {
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
    } : {
        boxSizing:'border-box',
        display:'block',
        width:'100%',
        height:'48px',
        paddingLeft:'10px',
        paddingRight:'10px',
        background:colors.white,
        color:colors.black,
        fontFamily:fonts.body,
        fontWeight:'normal',
        fontSize:'14px',
        lineHeight:'24px',
        border:'0',
        borderRadius:'3px',
        outline:'none',
        '&::placeholder': {
            color:colors.grey7
        }
    },
    textarea: props => props.theme != 'flat' && {
        padding:'5px 0',
        lineHeight:'22px'
    },
    select: props => props.theme != 'flat' && {
        padding:'0',
        appearance:'none',
        background:icons.base(icons.arrowDown.icon(['#4E6273'])),
        backgroundSize:'24px 24px',
        backgroundPosition:'calc(100% - 5px) 5px'
    },
    expanded: props => props.theme != 'flat' && {
        height:'80px'
    },
    hasIcon: props => props.theme != 'flat' && {
        paddingLeft:'24px'
    },
    icon: props => props.theme != 'flat' && {
        position:'absolute',
        left:'0',
        top:'19px'
    },
    hasClear: props => props.theme != 'flat' && {
        paddingRight:'24px'
    },
    clear: {
        background:'none',
        border:'0',
        padding:'0',
        margin:'0',
        position:'absolute',
        right:props => props.theme != 'flat' ? '0' : '10px',
        top:props => props.theme != 'flat' ? '20px' : '35px',
        outline:'0',
        cursor:'pointer'
    }
};