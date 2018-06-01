import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import shadows from '../subatomic/shadows';

const styles = {
    card: {
        background:colors.white,
        borderRadius:'5px',
        padding:'30px 20px'
    },
    cardNoPadding: {
        extend: 'card',
        padding:'0'
    }
};

const pushShadows = function() {
    for (let i = 0; i<7; i++) {
        styles[`shadow${i}`] = {
            boxShadow: shadows[`lvl${i}`]
        };
    }
};

pushShadows();

export default styles;