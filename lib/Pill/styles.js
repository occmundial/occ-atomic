import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

export default {
    container: {
        position: 'relative',
        marginBottom: 8
    },
    top: {
        height: 24,
        '&:after': {
            content: '""',
            clear: 'both'
        }
    },
    label: {
        fontFamily: fonts.body,
        fontSize: 12,
        lineHeight: '20px',
        color: colors.ink,
        transition: '0.3s all',
        '& a': {
            color: colors.blue,
            textDecoration: 'none',
            outline: 'none'
        }
    },
    left: {
        float: 'left'
    },
    disabled: {
        '& $label': {
            color: colors.inkLightest
        }
    },
    bottom: {
        height: 20,
        marginTop: 4
    },
    assistiveText: {
        color: colors.inkLighter
    },
    errorAssistiveText: {
        color: colors.errorText
    },
    errorIcon: {
        marginBottom: -2
    },
    choiceGroup: {
        display: 'flex',
        flexWrap: 'wrap'
    }
};
