import hexToRgba from 'hex-rgba';
import spacing from '../subatomic/spacing';
import colors from '../subatomic/colors';

const {info, warning, success, error} = colors;
const {radius, small, tiny} = spacing;
const alpha = 10;

export default {
    container: {
        padding: small,
        borderRadius: radius
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
    icon: {
        marginRight: tiny,
    }
};
