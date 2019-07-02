import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';

export default {
    top: {
        height: spacing.medium
    },
    blue: {
        background: colors.prim
    },
    white: {
        background: colors.bgGrey
    },
    fullHeight: {
        height: '100%'
    },
    navItem: {
        position:'relative',
        marginRight: spacing.small,
        marginLeft: spacing.small,
        '&:first-child': {
            marginLeft: 0
        },
        '&:last-child': {
            marginRight: 0,
        },
        '&:after': {
            content:'""',
            display:'block',
            width: 1,
            height: spacing.small,
            background: colors.grey400,
            position:'absolute',
            right: -spacing.small,
            top:'50%',
            transform:'translateY(-50%)'
        },
        '&:last-child:after': {
            display:'none'
        }
    },
    whiteItem: {
        '&:after': {
            background: colors.primDark
        }
    }
};
