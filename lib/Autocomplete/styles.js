import spacing from '../subatomic/spacing';

export default {
    autoComplete: {
        position: 'relative'
    },
    droplist: {
        position: 'absolute',
        zIndex: 2,
        top: `calc(100% - ${spacing.xTiny}px)`,
        left: 0,
        width: '100%'
    }
};
