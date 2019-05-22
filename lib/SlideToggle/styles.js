import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';
import icons from '../subatomic/icons';


export default {
      '@keyframes changeOff': {
        '0%': {content: icons.base(icons.check.icon([colors.grey200]))},
        '50%': {content: icons.base(icons.check.icon([colors.white]))},
        '55%': {content: icons.base(icons.close.icon([colors.grey100]))},
        '100%': {content: icons.base(icons.close.icon([colors.grey200]))},
      },
      '@keyframes changeOn': {
        '100%': {content: icons.base(icons.check.icon([colors.prim]))},
        '55%': {content: icons.base(icons.check.icon([colors.grey100]))},
        '50%': {content: icons.base(icons.close.icon([colors.white]))},
        '0%': {content: icons.base(icons.close.icon([colors.grey200]))},
      },
      switch: {
          position: 'relative',
          display: 'inline-block',
          width: '38px',
          height: '24px',
      },
      slider: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ccc',
        transition: '.4s',
        borderRadius: '34px',
        '&:before': {
            position: 'absolute',
            content: icons.base(icons.close.icon([colors.grey200])),
            animation: 'changeOff .3s ease',
            height: '20px',
            width: '20px',
            left: '2px',
            bottom: '2px',
            backgroundColor: 'white',
            transition: '.4s',
            textAlign: 'center',
            borderRadius: '50%',
          },
      },
      
      sliderCkecked: {
        backgroundColor: colors.prim,
        '&:before': {
            content: icons.base(icons.check.icon([colors.prim])),
            animation: 'changeOn .3s ease',
            transform: 'translateX(14px)',
          }
      },
    cont: {
        paddingTop:spacing.tiny,
        paddingBottom:spacing.tiny,
        boxSizing:'border-box',
        display:'flex',
        alignItems:'start',
        cursor:'pointer',
        outline:'0',
        '&:after': {
            content:'',
            display:'table',
            clear:'both'
        },
    },
    
    disabled: {
        opacity:0.4,
        pointerEvents:'none'
    },
    label: {
        marginLeft:spacing.tiny,
        float:'left',
        flex:'1'
    },
};
