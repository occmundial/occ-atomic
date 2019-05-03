import colors from '../subatomic/colors';
import shadows from '../subatomic/shadows';
import spacing from '../subatomic/spacing';
import grid from '../subatomic/grid';

const styles = {
    card: {
        background: colors.white,
        borderRadius: spacing.xTiny,
        padding: spacing.small,
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
    }
};

const pushShadows = function() {
    for (let i = 0; i<=5; i++) {
        styles[`shadow${i}`] = {
            boxShadow: shadows[`lvl${i}`]
        };
    }
};

pushShadows();

export default styles;
