import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

export default {
    pager: {
        listStyle:'none',
        paddingLeft:'0',
        display: 'flex',
        alignItems: 'center',
        fontFamily:fonts.body,
        color:colors.grey7,
        fontSize:'14px'
    },
    btn: {
        fontFamily:fonts.body,
        border:`1px solid ${colors.grey1}`,
        borderRadius:'5px',
        padding:'3px 13px',
        transition:'0.3s all',
        cursor:'pointer',
        outline:'0',
        '& span': {
            marginBottom:'-2px'
        },
        '&:hover': {
            background:'#ECECEE',
            borderColor:'#ECECEE'
        }
    },
    prev: {
        display: 'flex',
        alignItems: 'center',
    },
    listItemPrevious: {
        marginRight:'15px',
    },
    next: {
        display: 'flex',
        alignItems: 'center',
    },
    listItemNext: {
        marginLeft:'15px',
    },
    disabled: {
        pointerEvents:'none',
        opacity:'0.4'
    },
};