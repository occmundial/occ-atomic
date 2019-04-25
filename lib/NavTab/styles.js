import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';

export default {
    container: {
        width: '100%',
        zIndex: 99999,
        position: 'relative',
        transition: '0.3s all'
    },
    nav: {
        height: spacing.xLarge
    },
    grid: {
        maxWidth: '100%',
        height: '100%',
        position: 'relative'
    },
    tab: {
        height: '100%'
    },
    blue: {
        background: colors.primDark
    },
    white: {
        background: colors.bgWhite
    },
    fixed: {
        position: 'fixed',
        top: 0,
        left: 0
    },
    left: {
        '& $button, & $iconWrap': {
            marginRight: spacing.base
        },
        '& $button:first-child, & $iconWrap:first-child': {
            marginLeft: 0
        },
        '& $navItem': {
            marginRight: spacing.small
        },
        '& $navItem:first-child': {
            marginLeft: 0
        },
        '& $logo': {
            marginRight: spacing.medium
        }
    },
    right: {
        '& $button, & $iconWrap': {
            marginLeft: spacing.base
        },
        '& $button:first-child, & $iconWrap:first-child': {
            marginRight: 0
        },
        '& $navItem': {
            marginLeft: spacing.small
        },
        '& $navItem:first-child': {
            marginRight: 0
        },
        '& $logo': {
            marginLeft: spacing.medium
        }
    },
    center: {
        position:'absolute',
        left: '50%',
        top:'50%',
        transform: 'translate(-50%, -50%)',
        '& $button, & $iconWrap, & $logo': {
            marginLeft: spacing.small,
            marginRight: spacing.small
        },
        '& $button:first-child, & $iconWrap:first-child': {
            marginLeft: 0
        },
        '& $button:last-child, & $iconWrap:last-child': {
            marginRight: 0
        },
        '& $navItem': {
            marginLeft: spacing.tiny,
            marginRight: spacing.tiny
        },
        '& $navItem:first-child': {
            marginRight: 0
        }
    },
    button: {},
    navItem: {},
    iconWrap: {
        display: 'inline-block'
    },
    icon: {},
    arrow: {
        marginBottom: -3,
        transition: '0.3s all'
    },
    arrowUp: {
        transform: 'rotate(180deg)'
    },
    logo: {}
};
