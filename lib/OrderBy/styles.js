import spacing from '../subatomic/spacing';
import colors from '../subatomic/colors';
import iconSizes from '../subatomic/iconSizes';
import grid from '../subatomic/grid';

export default {
    wrap: {
        display:'inline-block',
        position:'relative'
    },
    button: {
        cursor:'pointer'
    },
    icon: {
        marginLeft:spacing.xTiny,
        marginTop:2,
        width: iconSizes.tiny,
        height: iconSizes.tiny
    },
    cardWrap: {
        position:'absolute',
        top:'100%',
        right:0,
        opacity:0,
        marginTop:-spacing.small,
        transition:'0.3s all',
        zIndex: 1,
        pointerEvents:'none'
    },
    card: {
        padding: spacing.small,
        [`@media screen and (min-width:${grid.sm}px)`]: {
            padding: spacing.base
        }
    },
    show: {
        opacity:1,
        marginTop:0,
        pointerEvents:'auto'
    },
    option: {
        cursor:'pointer',
        whiteSpace:'nowrap',
        '&:not(:last-child)': {
            paddingBottom: spacing.tiny
        }
    },
    link: {
        color: colors.textLink
    }
};
