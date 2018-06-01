import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

export default {
    cont: {
        boxSizing:'border-box',
        outline:'0',
        marginBottom:'15px',
        display:'flex',
        cursor:'pointer',
        '&:after': {
            content:'""',
            display:'table',
            clear:'both'
        },
        '&:hover $check': {
            borderColor:colors.green
        },
        '&:hover $label': {
            color:colors.black
        }
    },
    check: {
        boxSizing:'border-box',
        flex:'0 0 16px',
        width:'16px',
        height:'16px',
        margin:'4px',
        borderRadius:'1px',
        border:`1px solid ${colors.grey1}`,
        position:'relative',
        float:'left',
        transition:'0.3s all',
        '&:after': {
            content:'""',
            display:'block',
            position:'absolute',
            top:'0',
            left:'0',
            width:'14px',
            height:'14px'
        }
    },
    active: {
        '& $check': {
            background:colors.green,
            borderColor:colors.green,
            '&:after': {
                background:icons.base(icons.check.icon([colors.white]))
            }
        },
        '& $label': {
            color:colors.black
        }
    },
    disabled: {
        pointerEvents:'none',
        '& $check': {
            borderColor:colors.grey5
        },
        '&$active $check': {
            background:colors.grey5
        },
        '& $label': {
            color:colors.grey1
        }
    },
    label: {
        fontFamily:fonts.body,
        fontSize:'14px',
        color:colors.grey7,
        paddingTop:'3px',
        paddingLeft:'5px',
        paddingRight:'10px',
        float:'left',
        flex:'1',
        transition:'0.3s all'
    },
    right: {
        extend:'label',
        flex:'none',
        fontSize:'13px',
        color:colors.grey1,
        paddingRight:'0',
        float:'right'
    }
};