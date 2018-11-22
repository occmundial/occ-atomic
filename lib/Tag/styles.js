import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

export default {
    tag: {
        boxSizing:'border-box',
        lineHeight:'12px',
        textAlign:'center',
        borderRadius:'16px',
        paddingRight:'8px',
        paddingLeft:'8px',
        height:'16px',
        position:'relative',
        overflow:'hidden',
        display:'inline-block',
    },
    tagText: {
      paddingTop:'2px',
      boxSizing:'border-box',
      fontFamily:fonts.body,
      fontWeight:'600',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight:'12px',
      letterSpacing: 'normal',
      textAlign:'center',
      position:'relative',
      overflow:'hidden',
      display:'inline-block',
      fontSize:'10px'
    },
    default: {
        color:colors.grey900,
        background:colors.grey200
    },
    info: {
        color:colors.bgWhite,
        backgroundColor:colors.info
    },
    success: {
        color:colors.bgWhite,
        background:colors.success
    },
    warning: {
        color:colors.grey900,
        background:colors.warning
    },
    error: {
        color:colors.bgWhite,
        background:colors.error
    },
    /* Icon with themes */
    icon: {
        display:'inline-block',
        marginRight:'4px',
        content:'""',
        width:'12px',
        height:'12px',
        paddingBottom:'0px',
        position:'relative',
        top:'0px',
        left:'0px',
        backgroundRepeat:'no-repeat'
    },
    defaultIcon: {
        background:props => props.iconName ? icons.base(icons[props.iconName].icon([colors.grey900])) : ''
    },
    infoIcon: {
        background:props => props.iconName ? icons.base(icons[props.iconName].icon([colors.bgWhite])) : ''
    },
    successIcon: {
        background:props => props.iconName ? icons.base(icons[props.iconName].icon([colors.bgWhite])) : ''
    },
    warningIcon: {
      background:props => props.iconName ? icons.base(icons[props.iconName].icon([colors.grey900])) : ''
    },
    errorIcon: {
      background:props => props.iconName ? icons.base(icons[props.iconName].icon([colors.bgWhite])) : ''
    }
};