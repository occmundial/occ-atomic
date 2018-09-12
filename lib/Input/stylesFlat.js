import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

export default {
    container: {
        position:'relative'
    },
    default: {},
    disabled: {},
    focus: {},
    complete: {},
    correct: {},
    error: {},
    label: {
        fontFamily:fonts.body,
        fontSize:'14px',
        lineHeight:'24px',
        color:colors.white
    },
    left: {},
    push: {},
    counter: {},
    placeholder: {},
    pushHolder: {},
    inputWrap: {},
    input: {
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
    textarea: {},
    select: {},
    expanded: {},
    hasIcon: {},
    icon: {},
    hasClear: {},
    clear: {
        background:'none',
        border:'0',
        padding:'0',
        margin:'0',
        position:'absolute',
        right:'10px',
        top:'35px',
        outline:'0',
        cursor:'pointer'
    }
};