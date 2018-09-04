import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

export default {
    layerApp: {
        boxSizing:'border-box',
        position:'fixed',
        width:'100%',
        height:'100%',
        overflow:'auto',
        top:'0',
        left:'0',
        fontFamily:fonts.body
    },
    content: {
        boxSizing:'border-box',
        position:'absolute',
        zIndex:'1',
        top:'60px',
        left:'0',
        width:'100%',
        height:'calc(100% - 60px)',
        paddingTop:'30px',
        paddingBottom:'50px'
    },
    blue: {
        background:colors.white
    },
    white: {
        background:colors.white2
    }
};