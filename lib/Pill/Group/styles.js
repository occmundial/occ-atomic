import colors from '../../subatomic/colors';
import fonts from '../../subatomic/fonts';
import spacing from '../../subatomic/spacing';

export default {
    pillGroup: {
        display: 'flex'
    },
    pill: {
        background: colors.bgWhite,
        border: `1px solid ${colors.grey200}`,
        color: colors.ink,
        fontFamily: fonts.body,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: `${spacing.base}px`,
        height: spacing.medium,
        padding: [0, spacing.small],
        position: 'relative',
        zIndex: 1,
        outline: 0,
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        transition: '0.3s all',
        cursor: 'pointer',
        '&:first-child': {
            borderTopLeftRadius: spacing.small,
            borderBottomLeftRadius: spacing.small
        },
        '&:last-child': {
            borderTopRightRadius: spacing.small,
            borderBottomRightRadius: spacing.small
        },
        '&:not(:first-child)': {
            marginLeft: -1
        },
        '&:hover': {
            background: colors.grey50
        }
    },
    selected: {
        background: `${colors.primLighter} !important`,
        zIndex: 2,
        borderColor: colors.prim,
        color: colors.prim
    },
    disabled: {
        background: colors.white,
        borderColor: colors.grey100,
        color: colors.grey200,
        zIndex: 0,
        pointerEvents: 'none'
    }
};
