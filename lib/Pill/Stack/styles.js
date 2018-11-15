import colors from '../../subatomic/colors';
import fonts from '../../subatomic/fonts';
import spacing from '../../subatomic/spacing';
import icons from '../../subatomic/icons';

export default {
    pill: {
        background:colors.bgWhite,
        border:`1px solid ${colors.grey200}`,
        fontFamily:fonts.body,
        fontSize:14,
        lineHeight:'24px',
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
    closeIcon: {
        width:spacing.small,
        height:spacing.small,
        display:'inline-block',
        background:icons.base(icons.close.icon([colors.grey300])),
        marginBottom:-4,
        marginLeft:2
    }
};
