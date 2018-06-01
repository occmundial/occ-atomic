import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import grid from '../subatomic/grid';
import icons from '../subatomic/icons';
import shadows from '../subatomic/shadows';

export default {
    navbar: {
        border:'none',
        fontFamily:fonts.body,
        position:'relative',
        zIndex:'9'
    },
    shadow: {
        boxShadow:`${shadows.lvl3} !important`
    },
    master: {
        backgroundColor:colors.blue,
        padding:'0 15px 0 15px',
        minHeight:'60px',
        boxShadow:shadows.lvl3
    },
    content: {
        borderBottom:'1px solid transparent',
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.75)'
    },
    title: {
        width:'calc(100% - 150px)',
        fontSize:'16px',
        color:colors.white,
        paddingTop:'17px',
        paddingBottom:'5px',
        float:'left',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap'
    },
    user: {
        paddingTop:'9px',
        float:'right !important'
    },
    messages: {
        cursor:'pointer',
        outline:'0',
        display:'inline-flex',
        transform:'translateY(30%)'
    },
    bubble: {
        width:icons.bubble.width,
        height:icons.bubble.height,
        display:icons.bubble.display,
        background:icons.base(icons.bubble.icon())
    },
    separate: {
        marginTop:'60px',
        zIndex:'9',
        position:'relative'
    },
    [`@media (max-width: ${grid.sm-1}px)`]: {
        master: {
            position:'fixed',
            top:'0',
            left:'0',
            width:'100%',
            zIndex:'10',
            boxShadow:'none'
        },
        content: {
            borderTop:'1px solid transparent'
        }
    },
    [`@media (min-width: ${grid.lg}px)`]: {
        master: {
            padding:'0 45px 0 45px'
        }
    }
};