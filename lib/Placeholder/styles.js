import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';

export default {
    '@keyframes placeholderPulse': {
        '0%': {
            opacity:0.5
        },
        '50%': {
            opacity:1
        },
        '100%': {
            opacity:0.5
        }
    },
    placeholder: {
        width:props => props.width ? props.width : '100%',
        height:props => props.height ? props.height : 14,
        background: colors.grey100,
        animation: 'placeholderPulse 1s infinite ease-in-out',
        borderRadius: spacing.xTiny
    },
    round: {
        borderRadius:'50%'
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
            height: 16
        }
    },
    large: {
        height: 24,
        '& $placeholder': {
            height: 16
        }
    },
    standard: {
        height: 24,
        '& $placeholder': {
            height: 14
        }
    },
    small: {
        height: 16,
        '& $placeholder': {
            height: 12
        }
    },
    micro: {
        height: 16,
        '& $placeholder': {
            height: 10
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
