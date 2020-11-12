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
        borderRadius: spacing.xTiny,
        position: 'relative',
        overflow: 'hidden',
        background: '#f2f2f2',
        mixBlendMode: 'multiply',
        '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(90deg, rgba(204, 204, 204, 0), rgba(204, 204, 204, 0.7), rgba(204, 204, 204, 0))`,
            animation: 'progress 2s ease-in-out infinite'
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
