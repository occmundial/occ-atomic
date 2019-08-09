import hexToRgba from 'hex-rgba';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import spacing from '../subatomic/spacing';

export default {
    container: {
        position:'relative',
        marginBottom:spacing.tiny
    },
    top: {
        height:spacing.base,
        '&:after': {
            content:'""',
            clear:'both'
        }
    },
    default: {
    },
    disabled: {
        '& $input': {
            borderColor:colors.inkLightest,
            color:colors.inkLightest,
            paddingTop:9
        },
        '& $label': {
            color:colors.inkLightest
        },
        '& $passIcon': {
            cursor:'auto'
        }
    },
    focus: {
        '& $input': {
            borderColor:colors.prim,
        }
    },
    error: {
        '& $input': {
            borderColor:colors.error,
            color:colors.errorText,
            background:hexToRgba(colors.errorText, 4)
        }
    },
    label: {
        fontFamily:fonts.body,
        fontSize:12,
        lineHeight:'20px',
        color:colors.ink,
        transition:'0.3s all',
        '& a': {
            color:colors.blue,
            textDecoration:'none',
            outline:'none'
        }
    },
    left: {
        float:'left'
    },
    right: {
        float:'right'
    },
    counter: {
        color:colors.inkLighter
    },
    inputWrap: {
        boxSizing:'border-box',
        position:'relative'
    },
    input: {
        boxSizing:'border-box',
        display:'flex',
        alignItems:'center',
        width:'100%',
        height:40,
        color:colors.ink,
        fontFamily:fonts.body,
        fontWeight:'normal',
        fontSize:14,
        lineHeight:'24px',
        background:colors.bgWhite,
        border:`1px solid ${colors.grey200}`,
        borderRadius:4,
        padding:'8px 16px',
        boxShadow:'none',
        outline:'none',
        transition:'0.3s all',
        appearance:'none',
        '-webkit-appearance': 'none',
        caretColor:colors.prim,
        '&::placeholder': {
            color:colors.inkLighter
        }
    },
    select: {
        '&::-ms-expand': {
            display:'none'
        },
        paddingRight:32,
        '& optgroup': {
            fontSize:12,
            fontWeight:'normal',
            lineHeight:'40px',
            color:colors.inkLight
        },
        '& option': {
            fontSize:14,
            lineHeight:'40px',
            color:colors.ink,
            '&:disabled': {
                color:colors.inkLighter
            }
        },
        '&:invalid, & option[value=""]': {
            color:colors.inkLighter
        }
    },
    textarea: {
        resize:'none',
        height:120,
        alignItems:'flex-start'
    },
    hasIcon: {
        paddingLeft:42
    },
    hasPass: {
        paddingRight:42
    },
    icon: {
        position:'absolute',
        left:spacing.gutter,
        top:spacing.tiny
    },
    passIcon: {
        width:24,
        height:24,
        background:'none',
        border:0,
        padding:3,
        margin:0,
        position:'absolute',
        right:12,
        top:8,
        zIndex:1,
        outline:0,
        cursor:'pointer'
    },
    selectIcon: {
        width:18,
        height:24,
        background:'none',
        border:0,
        padding:'3px 0',
        margin:0,
        position:'absolute',
        right:12,
        top:8,
        zIndex:1,
        outline:0,
        pointerEvents:'none'
    },
    hasClear: {
        paddingRight:42
    },
    clear: {
        width:24,
        height:24,
        background:'none',
        border:0,
        padding:0,
        margin:0,
        position:'absolute',
        right:12,
        top:8,
        zIndex:1,
        outline:0,
        cursor:'pointer'
    },
    alignRight: {
        textAlign:'right'
    },
    assistiveText: {
        color:colors.inkLighter
    },
    errorAssistiveText: {
        color:colors.errorText
    },
    errorIcon: {
        marginBottom:-2
    },
    bottom: {
        height:20,
        marginTop:4
    }
};
