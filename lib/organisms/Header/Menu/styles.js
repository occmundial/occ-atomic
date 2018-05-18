import colors from '../../../subatomic/colors';
import grid from '../../../subatomic/grid';
import icons from '../../../subatomic/icons';

export default {
    menu: {
        marginTop:'5px',
        display:'inline-block',
        cursor:'pointer !important',
    },
    btnContainer: {
        position:'relative',
        display:'inline-block',
        verticalAlign:'middle'
    },
    btnMenu: {
        cursor:'pointer',
        background:'none',
        border:'none',
        padding:'5px 10px 2px 10px',
        marginLeft:'10px',
        color:colors.white,
        transition:'0.3s all',
        outline:'none !important',
        borderRadius:'3px',
        '&:hover': {
            color:colors.blue,
            background:colors.white
        },
        '&:hover $menuIcon': {
            background:icons.base(icons.menu.icon(["#1476fb"]))
        }
    },
    btnMenuOpen: {
        color:colors.blue,
        background:colors.white,
        '& $menuIcon': {
            background:icons.base(icons.menu.icon(["#1476fb"]))
        }
    },
    userName: {
        paddingRight:'5px',
        margin:'0',
        display:'inline-block',
        overflow:'hidden',
        textOverflow:'ellipsis',
        maxWidth:'65px',
        whiteSpace:'nowrap'
    },
    menuIcon: {
        width:icons.menu.width,
        height:icons.menu.height,
        display:icons.menu.display,
        transition:'0.3s all',
        background:icons.base(icons.menu.icon(["#FFFFFF"]))
    },
    dropdownMenu: {
        position:'absolute',
        top:'100%',
        zIndex:'1000',
        display:'none',
        float:'left',
        minWidth:'160px',
        padding:'5px 0',
        fontSize:'14px',
        textAlign:'left',
        listStyle:'none',
        backgroundColor:colors.white,
        backgroundClip:'padding-box',
        border:'1px solid rgba(0,0,0,.15)',
        boxShadow:'0 6px 12px rgba(0,0,0,.175)',
        margin:'13px 0 0 -187px',
        right:'0'
    },
    dropdownMenuOpen: {
        display:'block'
    },
    listAnchor: {
        textDecoration:'none',
        display:'block',
        padding:'0 10px',
        margin:'5px 0 5px 0',
        clear:'both',
        fontWeight:'400',
        lineHeight:'1.42857143',
        whiteSpace:'nowrap',
        color:'#000',
        cursor:'pointer',
        '&:hover, &:focus': {
            textDecoration:'none',
            color:colors.blue
        }
    },
    signOut: {
        color:`${colors.pink} !important`,
        margin:'10px 0 5px 0'
    },
    separator: {
        height: '1px',
        background:'#ebebeb'
    },
    [`@media (max-width: ${grid.sm-1}px)`]: {
        dropdownMenu: {
            width:'200px'
        }
    }
};