import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';
import icons from '../subatomic/icons';


export default {
    cont: {
        paddingTop: spacing.tiny,
        paddingBottom: spacing.tiny,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'start',
        cursor: 'pointer',
        outline: 0
    },
    switch: {
        position: 'relative',
        display: 'inline-block',
        width: 38,
        height: spacing.base,
        background: colors.grey200,
        borderRadius: 34,
        transition: '0.3s all'
    },
    checked: {
        background: colors.prim,
        '& $slider': {
            left: 16,
        },
        '& $icon': {
            background: icons.base(icons.check.icon([colors.prim]))
        }
    },
    slider: {
        position: 'absolute',
        cursor: 'pointer',
        top: 2,
        left: 2,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: colors.bgWhite,
        transition: '0.3s all'
    },
    icon: {
        width: '100%',
        height: '100%',
        display: 'block',
        background: icons.base(icons.cross.icon([colors.grey400])),
        transition: '0.3s all'
    },
    disabled: {
        opacity:0.4,
        pointerEvents:'none'
    },
    label: {
        marginLeft:spacing.tiny
    },
};
