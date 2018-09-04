import colors from '../../subatomic/colors';
import grid from '../../subatomic/grid';

export default {
    menu: {
        background:colors.blue,
        margin:'0 10px',
        paddingLeft:'0',
        listStyle:'none',
        textAlign:'center'
    },
    listItem: {
        width:'auto',
        margin:'7px 30px 0 0',
        textAlign:'center',
        padding:'5px 0 0 0',
        display:'inline-block',
        fontSize:'12px',
        cursor:'pointer',
        position:'relative',
        '&:hover $icon': {
            filter:'brightness(0.8)'
        },
        '&:hover $listAnchor': {
            color:colors.darkBlueH
        }
    },
    icon: {},
    activeItem: {
        '& $icon, &:hover $icon': {
            filter:'brightness(1)'
        },
        '& $listAnchor, &:hover $listAnchor': {
            color:colors.white
        }
    },
    listAnchor: {
        padding:'0',
        marginTop:'-4px',
        marginBottom:'2px',
        textAlign:'center',
        lineHeight:'20px',
        color:colors.darkBlue,
        textDecoration:'none !important',
        position:'relative',
        display:'block',
        transition:'0.3s all'
    },
    [`@media (min-width: ${grid.sm}px)`]: {
        menu: {
            float:'left'
        },
        listItem: {
            float:'left'
        }
    },
    [`@media (max-width: ${grid.sm-1}px)`]: {
        menu: {
            clear:'both',
            textAlign:'center',
            margin:'0'
        },
        listItem: {
            margin:'0 25px 0 0',
            '&:last-child': {
                marginRight:'0'
            }
        },
        activeItem: {
            '&:after': {
                content:'""',
                width:'4px',
                height:'4px',
                display:'block',
                borderRadius:'50%',
                background:colors.cyan,
                position:'absolute',
                bottom:'0',
                left:'50%',
                marginBottom:'8px',
                transform:'translateX(-50%)'
            },
            '& $listAnchor': {
                display:'none'
            },
            '& $icon': {
                marginBottom:'14px'
            }
        },
        listAnchor: {
        },
        icon: {
        }
    }
};