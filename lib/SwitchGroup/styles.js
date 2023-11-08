import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

export default {
    button: {
        boxSizing:'border-box',
        flex: '1',
        position:'relative',
        background:'transparent',
        fontFamily:fonts.body,
        fontSize:'14px',
        color:colors.black,
        border:`1px solid ${colors.grey1}`,
        height:'30px',
        zIndex:'0',
        padding:'0 10px',
        cursor:'pointer',
        transition:'0.3s all',
        outline:'0',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        '&:not(:first-child)': {
            marginLeft:'-1px'
        },
        '&:first-child': {
            borderRadius:'15px 0 0 15px'
        },
        '&:last-child': {
            borderRadius:'0 15px 15px 0'
        },
        '&:hover': {
            borderColor:colors.blue,
            zIndex:'1'
        }
    },
    active: {
        borderColor:colors.blue,
        zIndex:'1',
        background:colors.blue,
        color:colors.white
    },
    sec: {
        color:colors.grey1,
        marginLeft:'3px'
    }
};