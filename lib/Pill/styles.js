import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import HexToRgba from 'hex-rgba';

export default {
    container: {
        position:'relative',
        marginBottom:8
    },
    top: {
        height:24,
        '&:after': {
            content:'""',
            clear:'both'
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
    pillGroup: {
        display:'flex'
    },
    disabled: {
        '& $label': {
            color:colors.inkLightest
        },
        '& $pill': {
            background:colors.white,
            borderColor:colors.grey100,
            color:colors.grey200,
            pointerEvents:'none'
        }
    },
    pill: {
        background:colors.bgWhite,
        border:`1px solid ${colors.grey200}`,
        fontFamily:fonts.body,
        fontSize:14,
        lineHeight:'24px',
        height:32,
        padding:0,
        position:'relative',
        zIndex:0,
        outline:0,
        flex:1,
        transition:'0.3s all',
        cursor:'pointer',
        '&:first-child': {
            borderRadius:'16px 0 0 16px'
        },
        '&:last-child': {
            borderRadius:'0 16px 16px 0'
        },
        '&:not(:first-child)': {
            marginLeft:-1
        },
        '&:hover': {
            background:colors.grey50
        }
    },
    selected: {
        background:[HexToRgba(colors.prim, 10), '!important'],
        zIndex:1,
        borderColor:colors.prim
    },
    bottom: {
        height:20,
        marginTop:4
    },
    assistiveText: {
        color:colors.inkLighter
    },
    errorAssistiveText: {
        color:colors.errorText
    },
    errorIcon: {
        marginBottom:-2
    }
};