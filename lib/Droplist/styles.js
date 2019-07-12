import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';

export default {
    block: {
        background:colors.bgWhite,
        border: `1px solid ${colors.grey200}`,
        borderRadius: spacing.xTiny,
        overflow: 'hidden'
    },
    group: {
        padding: [spacing.small, spacing.small, spacing.xTiny]
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: [spacing.tiny, spacing.small],
        transition:'0.1s all',
        cursor:'pointer',
        '&:hover': {
            background: colors.grey50
        }
    },
    right: {
        float:'right',
        transition:'0.1s all'
    },
    onFocus: {
        background: colors.primLighter,
        '&:hover': {
            background: colors.primLighter
        }
    }
};
