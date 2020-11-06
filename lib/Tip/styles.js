import hexToRgba from 'hex-rgba';
import spacing from '../subatomic/spacing';
import colors from '../subatomic/colors';

const { info, warning, success, error, grey900 } = colors;
const { radius, large, medium, small, tiny } = spacing;
const alpha = 10;

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
        backgroundColor: hexToRgba(info, alpha)
    },
    warning: {
        backgroundColor: hexToRgba(warning, alpha)
    },
    success: {
        backgroundColor: hexToRgba(success, alpha)
    },
    error: {
        backgroundColor: hexToRgba(error, alpha)
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
