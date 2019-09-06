import colors from '../subatomic/colors';
import shadows from '../subatomic/shadows';
import spacing from '../subatomic/spacing';
import grid from '../subatomic/grid';

const styles = {
    card: {
        background: colors.white,
        borderRadius: 6,
        padding: spacing.small,
        position: 'relative',
        transition: '0.3s box-shadow, 0.3s transform',
        [`@media screen and (min-width:${grid.sm}px)`]: {
            padding: spacing.medium
        }
    },
    cardNoPadding: {
        extend: 'card',
        padding: 0,
        [`@media screen and (min-width:${grid.sm}px)`]: {
            padding: 0
        }
    },
    flat: {
        boxShadow: shadows.lvl1,
        zIndex: 1
    },
    rest: {
        boxShadow: shadows.lvl0,
        zIndex: 'auto'
    },
    raised: {
        boxShadow: shadows.lvl4,
        zIndex: 4
    },
    raisable: {
        '&:hover': {
            boxShadow: shadows.lvl4,
            transform: `translateY(-${spacing.xTiny}px)`,
            zIndex: 4
        }
    }
};

export default styles;
