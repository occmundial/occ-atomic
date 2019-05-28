import hexToRgba from 'hex-rgba';

import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';
import shadows from '../subatomic/shadows';

export default {
    container: {
        width: '100%',
        zIndex: 999,
        position: 'relative',
        transition: '0.3s all'
    },
    fixed: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        transition: '0.3s all'
    },
    bottom: {
        top: 'inherit',
        bottom: 0
    },
    show: {
        marginTop: 0
    },
    hide: {
        marginTop: -spacing.xLarge,
        '& $nav': {
            boxShadow: 'none !important'
        }
    },
    isScrolled: {
        '& $nav': {
            boxShadow: shadows.lvl3
        },
        '& $blue': {
            background: hexToRgba(colors.primDark, 85)
        },
        '& $white': {
            background: hexToRgba(colors.bgWhite, 85)
        }
    },
    nav: {
        height: spacing.xLarge,
        transition: '0.3s all',
        boxShadow: shadows.lvl1
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
            marginLeft: spacing.gutter,
            marginRight: spacing.gutter
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
