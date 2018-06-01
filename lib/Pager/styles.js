import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

export default {
    pager: {
        listStyle:'none',
        paddingLeft:'0',
        fontFamily:fonts.body,
        color:colors.grey7,
        fontSize:'13px'
    },
    btn: {
        display:'inline-block',
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
        marginRight:'15px',
        '& span': {
            transform:'rotate(90deg)'
        }
    },
    next: {
        marginLeft:'15px',
        '& span': {
            transform:'rotate(-90deg)'
        }
    },
    disabled: {
        pointerEvents:'none',
        opacity:'0.4'
    }
};