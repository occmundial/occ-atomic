import { colors, spacing } from '@occmundial/occ-atomic';

export default {
    page: {
        padding: spacing.small
    },
    iconBlock: {
        display:'inline-block',
        margin:spacing.tiny,
        position: 'relative',
        '&:hover:after': {
            content: 'attr(alt)',
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: colors.prim,
            color: colors.white,
            padding: [spacing.xTiny, spacing.tiny],
            borderRadius: spacing.xTiny,
            zIndex: 5
        }
    },
    icon: {
        backgroundRepeat: 'no-repeat'
    }
};
