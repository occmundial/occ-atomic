import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import shadows from '../subatomic/shadows';

export default {
    block: {
        background:colors.white,
        boxShadow:shadows.lvl4,
        padding :'5px 0',
        borderRadius:'0 0 5px 5px'
    },
    groupCon: {
        borderBottom:colors.grey3
    },
    group: {
        fontFamily:fonts.body,
        fontSize:'11px',
        lineHeight:'28px',
        color:colors.grey7,
        padding:'0 8px'
    },
    item: {
        fontFamily:fonts.body,
        fontSize:'15px',
        lineHeight:'28px',
        color:colors.grey7,
        padding:'0 8px',
        transition:'0.1s all',
        cursor:'pointer',
        '&:hover': {
            background:colors.blue,
            color:colors.white,
            '& $right': {
                color:colors.white
            }
        }
    },
    right: {
        float:'right',
        color:colors.grey1,
        transition:'0.1s all'
    },
    bold: {
        fontWeight:'700'
    }
};