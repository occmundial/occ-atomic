import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';
export default {
    '@keyframes progress': {
        '0%': {
            transform: 'translate3d(-100%, 0, 0)'
        },
        '100%': {
            transform: 'translate3d(100%, 0, 0)'
        }
    },
    placeholder: {
        width: props => props.width ? props.width : '100%',
        height: props => props.height ? props.height : 14,
        backgroundImage: props => props.start ? `linear-gradient(to left, rgba(221, 221, 221, 0.3), ${colors.grey200})` : `linear-gradient(to left, rgba(221, 221, 221, 0.3), ${colors.grey200}, rgba(221, 221, 221, 0.3))`,
        position: 'relative',
        overflow: 'hidden',
        opacity: 0.6,
        '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.4,
            background: `linear-gradient(100deg, ${colors.grey200}, ${colors.grey100}, ${colors.grey200})`,
            animation: 'progress 1s ease-in-out infinite'
        },
    },
    round: {
        borderRadius: '50%'
    },

    hero: {
        height: 72,
        '& $placeholder': {
            height: 57
        }
    },
    headline: {
        height: 48,
        '& $placeholder': {
            height: 36
        }
    },
    heading: {
        height: 32,
        '& $placeholder': {
            height: 22
        }
    },
    subheading: {
        height: 24,
        '& $placeholder': {
            height: 17
        }
    },
    large: {
        height: 24,
        '& $placeholder': {
            height: 17
        }
    },
    standard: {
        height: 24,
        '& $placeholder': {
            height: 15
        }
    },
    small: {
        height: 16,
        '& $placeholder': {
            height: 13
        }
    },
    micro: {
        height: 16,
        '& $placeholder': {
            height: 11
        }
    },
    topxTiny: {
        marginTop: spacing.xTiny
    },
    toptiny: {
        marginTop: spacing.tiny
    },
    topsmall: {
        marginTop: spacing.small
    },
    topbase: {
        marginTop: spacing.base
    },
    topmedium: {
        marginTop: spacing.medium
    },
    toplarge: {
        marginTop: spacing.large
    },
    topxLarge: {
        marginTop: spacing.xLarge
    },
    bottomxTiny: {
        marginBottom: spacing.xTiny
    },
    bottomtiny: {
        marginBottom: spacing.tiny
    },
    bottomsmall: {
        marginBottom: spacing.small
    },
    bottombase: {
        marginBottom: spacing.base
    },
    bottommedium: {
        marginBottom: spacing.medium
    },
    bottomlarge: {
        marginBottom: spacing.large
    },
    bottomxLarge: {
        marginBottom: spacing.xLarge
    }
};
