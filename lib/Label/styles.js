import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

export default {
    label: {
        boxSizing:'border-box',
        fontFamily:fonts.body,
        fontSize:'11px',
        fontWeight:'normal',
        display:'inline-block',
        height:'22px',
        lineHeight:'20px',
        textAlign:'center',
        borderRadius:'11px',
        padding:'0 15px',
        border:'1px solid',
        position:'relative',
        overflow:'hidden',
        marginRight:'5px'
    },
    cursor: {
        cursor:'pointer'
    },
    default: {
        color:colors.grey8,
        background:colors.white,
        borderColor:colors.grey8
    },
    close: {
        width:'18px',
        height:'18px',
        display:'block',
        position:'absolute',
        top:'1px',
        right:'4px',
        transition:'0.3s all',
        borderRadius:'50%',
        opacity:'0',
        cursor:'pointer',
        '&:hover': {
            opacity:'1'
        },
        '&:before': {
            content:'""',
            width:'50px',
            height:'50px',
            background:colors.white,
            filter:'blur(10px)',
            position:'absolute',
            borderRadius:'50%',
            top:'-16px',
            left:'-16px'
        },
        '&:after': {
            content:'""',
            width:'18px',
            height:'18px',
            background:icons.base(icons.close.icon(['#abb6bd'])),
            position:'absolute',
            top:'0',
            left:'0'
        },
    }
};