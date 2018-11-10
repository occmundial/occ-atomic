import colors from '../../subatomic/colors';
import fonts from '../../subatomic/fonts';
import spacing from '../../subatomic/spacing';

export default {
    pill: {
        background:colors.bgWhite,
        border:`1px solid ${colors.grey200}`,
        fontFamily:fonts.body,
        fontSize:14,
        lineHeight:'24px',
        height:32,
        paddingLeft:spacing.large,
        paddingRight:spacing.large,
        position:'relative',
        zIndex:0,
        outline:0,
        transition:'0.3s all',
        cursor:'pointer',
        borderRadius:spacing.small,
        '&:not(:last-child)': {
            marginRight:spacing.small
        },
        '&:hover': {
            background:colors.grey50
        }
    },
    selected: {
        background:`${colors.primLighter} !important`,
        zIndex:1,
        borderColor:colors.prim
    },
    disabled: {
        background:colors.white,
        borderColor:colors.grey100,
        color:colors.grey200,
        pointerEvents:'none'
    }
};
