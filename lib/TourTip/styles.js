import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import shadows from '../subatomic/shadows';

export default {
    tip: {
        boxSizing:'border-box',
        background:colors.blue,
        color:colors.white,
        fontFamily:fonts.title,
        fontSize:'12px',
        padding:'0 15px',
        height:'40px',
        borderRadius:'3px',
        position:'absolute',
        zIndex:'10',
        display:'flex',
        alignItems:'center',
        whiteSpace:'nowrap',
        boxShadow:shadows.lvl4,
        top:'0',
        left:'0',
        transition:'0.3s all',
        '&:after': {
            content:'""',
            display:'block',
            position:'absolute'
        }
    },
    right: {
        '&:after': {
            borderRight:`5px solid ${colors.blue}`,
            borderTop:'5px solid transparent',
            borderBottom:'5px solid transparent',
            right:'100%',
            top:'50%',
            transform:'translateY(-50%)'
        }
    },
    left: {
        '&:after': {
            borderLeft:`5px solid ${colors.blue}`,
            borderTop:'5px solid transparent',
            borderBottom:'5px solid transparent',
            left:'100%',
            top:'50%',
            transform:'translateY(-50%)'
        }
    },
    down: {
        '&:after': {
            borderBottom:`5px solid ${colors.blue}`,
            borderLeft:'5px solid transparent',
            borderRight:'5px solid transparent',
            bottom:'100%',
            left:'50%',
            transform:'translateX(-50%)'
        }
    },
    up: {
        '&:after': {
            borderTop:`5px solid ${colors.blue}`,
            borderLeft:'5px solid transparent',
            borderRight:'5px solid transparent',
            top:'100%',
            left:'50%',
            transform:'translateX(-50%)'
        }
    },
};