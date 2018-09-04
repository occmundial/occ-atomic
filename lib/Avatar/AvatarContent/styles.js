import fonts from '../../subatomic/fonts';
import icons from '../../subatomic/icons';

export default {
    wrap: {
        position:'relative',
        width:'100%',
        height:'100%'
    },
    cont: {
        position:'absolute',
        top:'0',
        left:'0',
        width:'100%',
        height:'100%',
        borderRadius:'50%',
        overflow:'hidden'
    },
    m: {
        background:icons.base(icons.male.icon())
    },
    f: {
        background:icons.base(icons.female.icon())
    },
    capital: {
        fontFamily:fonts.body,
        fontSize:70*0.4,
        lineHeight:'70px',
        fontWeight:'600',
        background:'#dae1e5',
        color:'#afb8c0',
        textAlign:'center',
    }
};