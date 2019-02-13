import colors from '../../subatomic/colors';
import fonts from '../../subatomic/fonts';
import spacing from '../../subatomic/spacing';
import icons from '../../subatomic/icons';

export default {
    pill: {
        background:colors.bgWhite,
        border:`1px solid ${colors.grey200}`,
        color:colors.ink,
        fontFamily:fonts.body,
        fontSize:14,
        fontWeight:400,
        lineHeight:'24px',
        maxWidth:'100%',
        height:32,
        padding:`0 ${spacing.gutter}px`,
        marginBottom:spacing.tiny,
        position:'relative',
        zIndex:0,
        outline:0,
        flex:1,
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
    hasClose: {
        paddingRight:spacing.base+8
    },
    disabled: {
        background:colors.white,
        borderColor:colors.grey100,
        color:colors.grey200,
        pointerEvents:'none'
    },
    closeCont: {
        position:'absolute',
        width:spacing.base,
        height:spacing.base,
        top:3,
        right:8,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    closeIcon: {
        width:spacing.small+2,
        height:spacing.small+2,
        background:icons.base(icons.close.icon([colors.grey300]))
    }
};
