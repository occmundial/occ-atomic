import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import shadows from '../subatomic/shadows';

export default {
    wrapper: {
        height:'60px'
    },
    subHeader: {
        fontFamily:fonts.body,
        fontSize:'16px',
        position:'relative',
        height:'60px',
        boxShadow:shadows.lvl3,
        padding:'0 15px'
    },
    fixed: {
        position:'fixed',
        zIndex:'10',
        top:'0',
        left:'0',
        width:'100%'
    },
    // Themes
    blue: {
        background:colors.blue,
        color:colors.white
    },
    white: {
        background:colors.white,
        color:colors.black
    },
    left: {
        float:'left',
        height:'100%'
    },
    right: {
        float:'right',
        height:'100%'
    },
    center: {
        position:'absolute',
        left:'50%',
        height:'100%',
        transform:'translateX(-50%)'
    }
};