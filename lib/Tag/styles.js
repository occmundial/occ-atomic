import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

export default {
    tag: {
        boxSizing:'border-box',
        fontFamily:fonts.body,
        fontSize:'10px',
        fontWeight:'600',
        display:'inline-block',
        height:'14px',
        lineHeight:'14px',
        textAlign:'center',
        borderRadius:'16px',
        paddingRight:'8px',
        paddingLeft:'8px',
        paddingTop:'0px',
        paddingBottom:'16px',
        position:'relative',
        overflow:'hidden'
    },
    default: {
        color:colors.black2,
        background:colors.grey200
    },
    info: {
        color:colors.bgWhite,
        backgroundColor:colors.info
    },
    success: {
        color:colors.grey900,
        background:colors.success
    },
    warning: {
        color:colors.grey900,
        background:colors.warning
    },
    error: {
        color:colors.grey900,
        background:colors.error
    },
    /* Icon with themes */
    icon: {
        display:'inline-block',
        marginLeft:'1px',
        marginRight:'4px',
        content:'""',
        width:'12px',
        height:'12px',
        position:'relative',
        top:'2px',
        left:'0px',
        backgroundRepeat:'no-repeat'
    },
    defaultIcon: {
        background:props => props.iconName ? icons.base(icons[props.iconName].icon([colors.black2])) : ''
    },
    infoIcon: {
        background:props => props.iconName ? icons.base(icons[props.iconName].icon([colors.bgWhite])) : ''
    },
    successIcon: {
        background:props => props.iconName ? icons.base(icons[props.iconName].icon([colors.grey900])) : ''
    },
    warningIcon: {
      background:props => props.iconName ? icons.base(icons[props.iconName].icon([colors.grey900])) : ''
    },
    errorIcon: {
      background:props => props.iconName ? icons.base(icons[props.iconName].icon([colors.grey900])) : ''
    }
};