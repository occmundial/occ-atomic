import hexToRgba from 'hex-rgba';
import spacing from '../subatomic/spacing';
import colors from '../subatomic/colors';

export default {
    container: {
        backgroundColor:hexToRgba(colors.info, 10),
        padding: '8px 16px 8px 16px',
        borderRadius: '6px'
    },
    leftMargin: {
        marginLeft: spacing.tiny,
    }
};
