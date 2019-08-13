import hexToRgba from 'hex-rgba';
import spacing from '../subatomic/spacing';
import colors from '../subatomic/colors';

export default {
    container: {
        padding: [spacing.tiny, spacing.small],
        borderRadius: 6
    },
    info: {
        backgroundColor: hexToRgba(colors.info, 10)
    },
    warning: {
        backgroundColor: hexToRgba(colors.warning, 10)
    },
    success: {
        backgroundColor: hexToRgba(colors.success, 10)
    },
    error: {
        backgroundColor: hexToRgba(colors.error, 10)
    },
    icon: {
        marginRight: spacing.tiny,
    }
};
