import colors from '../../subatomic/colors';
import spacing from '../../subatomic/spacing';

export default {
    pill: {
        background:colors.bgWhite,
        border:`1px solid ${colors.grey200}`,
        maxWidth:'100%',
        height:32,
        padding:`0 ${spacing.gutter}px`,
        marginBottom:spacing.tiny,
        position:'relative',
        zIndex:0,
        outline:0,
        flex:1,
        display: 'inline-flex',
        transition:'0.3s all',
        cursor:'pointer',
        borderRadius:spacing.small,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        '&:not(:last-child)': {
            marginRight:spacing.tiny
        },
        '&:not(:first-child)': {
            marginLeft:-1
        },
        '&:hover': {
            background:colors.grey50
        }
    },
    disabled: {
        background:colors.white,
        borderColor:colors.grey100,
        color:colors.grey200,
        pointerEvents:'none'
    },
    closeCont: {
        marginBottom: -spacing.xTiny,
        width:spacing.base,
        height:spacing.base,
        display:'inline-flex',
        justifyContent:'center',
        alignItems:'center',
        marginRight: -spacing.xTiny,
        marginLeft: -spacing.xTiny
    },
    text: {
        marginLeft: spacing.xTiny,
        marginRight: spacing.xTiny
    }
};
