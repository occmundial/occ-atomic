import colors from '../../../subatomic/colors';

export default {
    li: {
        display:'inline-block',
        cursor:'pointer',
        padding:'2px 11px',
        marginLeft:'4px',
        marginRight:'4px',
        borderRadius:'13px',
        cursor:'pointer',
        transition:'0.3s all',
        outline:'0',
        '&:hover': {
            background:'#ECECEE'
        }
    },
    active: {
        background:`${colors.blue} !important`,
        color:colors.white
    }
};