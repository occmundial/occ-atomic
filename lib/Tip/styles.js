import hexToRgba from 'hex-rgba';
import spacing from '../subatomic/spacing';
import colors from '../subatomic/colors';

const alpha = 10;

export default {
    container: {
        padding: [spacing.tiny, spacing.small],
        borderRadius: 6
    },
    info: {
        backgroundColor: hexToRgba(colors.info, alpha)
    },
    warning: {
        backgroundColor: hexToRgba(colors.warning, alpha)
    },
    success: {
        backgroundColor: hexToRgba(colors.success, alpha)
    },
    error: {
        backgroundColor: hexToRgba(colors.error, alpha)
    },
    icon: {
        marginRight: spacing.tiny,
    }
};
