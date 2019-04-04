import colors from '../subatomic/colors';
import shadows from '../subatomic/shadows';
import spacing from '../subatomic/spacing';

const styles = {
    card: {
        background:colors.white,
        borderRadius:'4px',
        padding:spacing.medium
    },
    cardNoPadding: {
        extend: 'card',
        padding:'0'
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
