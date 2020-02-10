import colors from '../../subatomic/colors';
import spacing from '../../subatomic/spacing';

export default {
    pill: {
        background:colors.bgWhite,
        border:`1px solid ${colors.grey200}`,
        height:32,
        padding:`0 ${spacing.gutter}px`,
        marginBottom:spacing.tiny,
        position:'relative',
        zIndex:0,
        outline:0,
        transition:'0.3s all',
        cursor:'pointer',
        borderRadius:spacing.small,
        '&:not(:last-child)': {
            marginRight:spacing.tiny
        },
        '&:hover': {
            background:colors.grey50
        }
    },
    selected: {
        background:`${colors.primLighter} !important`,
        zIndex:1,
        borderColor:colors.prim,
        color: colors.prim
    },
    disabled: {
        background:colors.white,
        borderColor:colors.grey100,
        color:colors.grey200,
        pointerEvents:'none'
    },
    text: {
        marginLeft: spacing.xTiny,
        marginRight: spacing.xTiny
    },
    icon: {
        marginBottom: -spacing.xTiny
    }
};
