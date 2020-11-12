import spacing from '../subatomic/spacing';
import colors from '../subatomic/colors';

const { infoLight, warningLight, successLight, errorLight, grey900 } = colors;
const { radius, large, medium, small, tiny } = spacing;

export default {
    container: {
        padding: small,
        borderRadius: radius,
        alignItems: 'center'
    },
    noBorderRadius: {
        borderRadius: 0
    },
    info: {
        backgroundColor: infoLight
    },
    warning: {
        backgroundColor: warningLight
    },
    success: {
        backgroundColor: successLight
    },
    error: {
        backgroundColor: errorLight
    },
    promote: {
        backgroundColor: grey900
    },
    icon: {
        marginRight: tiny,
    },
    text: {
        maxWidth: '100%'
    },
    textWithIcon: {
        maxWidth: `calc(100% - ${medium}px)`
    },
    spacedClose: {
        marginRight: large
    },
    cta: {
        textDecoration: 'underline',
        cursor: 'pointer'
    }
};
