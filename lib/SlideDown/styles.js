import colors from '../subatomic/colors';

export default {
    button: {
        cursor:'pointer'
    },
    content: {
        transition:'0.3s all',
    },
    hide: {
        opacity:'0',
        marginTop:'-35px',
        marginBottom:'35px',
        pointerEvents:'none'
    },
    show: {
        opacity:'1',
        marginTop:'0',
        marginBottom:'0'
    },
    dot: {
        position:'relative',
        '&:after': {
            content:'""',
            display:'block',
            background:colors.blue,
            position:'absolute',
            left:'calc(100% + 5px)',
            top:'50%',
            transform:'translateY(-50%)',
            width:'5px',
            height:'5px',
            borderRadius:'3px'
        }
    }
};