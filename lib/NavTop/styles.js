import colors from '../subatomic/colors';
import spacing from '../tokens/spacing.json';

export default {
    top: {
        height: spacing['size-6']
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
        marginRight: spacing['size-4'],
        marginLeft: spacing['size-4'],
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
            height: spacing['size-4'],
            background: colors.grey400,
            position:'absolute',
            right: -spacing['size-4'],
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
