import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

export default {
    wrap: {
        display:'flex'
    },
    text: {
        fontFamily:fonts.body,
        fontSize:'14px',
        color:colors.grey7
    },
    select: {
        appearance:'none',
        background:icons.base(icons.arrowDownFilled.icon()),
        backgroundSize:'12px 12px',
        backgroundPosition:'calc(100% - 2px) 5px',
        paddingRight:'25px',
        marginLeft:'5px',
        border:'0',
        fontFamily:fonts.body,
        fontSize:'14px',
        color:colors.grey7,
        outline:'0',
        textAlign:'right',
        cursor:'pointer'
    }
};