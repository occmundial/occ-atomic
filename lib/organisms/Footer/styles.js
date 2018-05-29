import colors from '../../subatomic/colors';
import fonts from '../../subatomic/fonts';
import grid from '../../subatomic/grid';
import icons from '../../subatomic/icons';

export default {
    footer: {
        backgroundColor:colors.black,
        height:'25px',
        margin:'0',
        padding:'0 40px',
        fontSize:'12px',
        color:colors.grey2,
        fontFamily:fonts.title
    },
    footerList: {
        listStyle:'none',
        width:'auto',
        margin:'0',
        padding:'4px 0 0 0'
    },
    listElement: {
        listStyle:'none',
        float:'left',
        margin:'0 50px 0 0',
        padding:'0',
        position:'relative'
    },
    link: {
        color:colors.grey2,
        cursor:'pointer',
        textDecoration:'none',
        '&:hover, &:active, &:focus': {
            color:colors.white,
            textDecoration:'none'
        }
    },
    [`@media (max-width: ${grid.md-1}px)`]: {
        footer: {
            display: 'none !important'
        }
    },
    dropdownMenu: {
        display:'none',
        background:colors.black,
        position:'absolute',
        bottom:'calc(100% + 10px)',
        left:'50%',
        transform:'translateX(-50%)',
        minWidth:'160px',
        padding:'5px 0',
        fontSize:'12px',
        textAlign:'left',
        listStyle:'none',
        borderRadius:'4px',
        boxShadow:'0 6px 12px rgba(0,0,0,.175)',
        zIndex:'2'
    },
    dropdownElement: {
        float:'left',
        listStyle:'none'
    },
    dropdownLink: {
        color:colors.grey2,
        textDecoration:'none',
        padding:'3px 18px',
        lineHeight:'1.42857143',
        display:'block',
        '&:hover': {
            color:colors.white,
            textDecoration:'none'
        }
    }
};