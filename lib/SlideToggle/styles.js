import icons from '../subatomic/icons';
import spacing from '../tokens/spacing.json';
import colors from '../tokens/colors.json';
import shadows from '../tokens/shadows.json';

const { switch: toggle, icon } = colors;

export default {
    cont: {
        paddingTop: spacing['size-2'],
        paddingBottom: spacing['size-2'],
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'start',
        cursor: 'pointer',
        outline: 0,
        '&:hover $switch$checked, &:active $switch$checked': {
            background: toggle['selected']['bg']['hover']
        },
        '&:focus $switch$checked': {
            boxShadow: shadows['focus-bright-blue'],
            background: toggle['selected']['bg']['default']
        },
        '&:hover $switch:not($checked), &:active $switch:not($checked)': {
            background: toggle['unselected']['bg']['hover']
        },
        '&:focus $switch:not($checked)': {
            background: toggle['unselected']['bg']['default'],
            boxShadow: shadows['focus-indigo']
        }
    },
    switch: {
        position: 'relative',
        display: 'inline-block',
        width: 38,
        flexShrink: 0,
        height: spacing['size-5'],
        background: toggle['unselected']['bg']['default'],
        borderRadius: 34,
        transition: '0.3s all'
    },
    checked: {
        background: toggle['selected']['bg']['default'],
        '& $slider': {
            left: 16,
        },
        '& $icon': {
            background: icons.base(icons.check.icon([icon.brand.bold]))
        }
    },
    slider: { 
        position: 'absolute',
        top: 2,
        left: 2,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: toggle['bg']['default'],
        transition: '0.3s all'
    },
    icon: {
        width: '100%',
        height: '100%',
        display: 'block',
        background: icons.base(icons.cross.icon([icon.brand.disabled])),
        transition: '0.3s all'
    },
    disabled: {
        '& $switch': {
            background: toggle['bg']['disabled']
        },
        '& $icon': {
            background: icons.base(icons.cross.icon([icon.default.disabled]))
        },
        pointerEvents: 'none'
    },
    label: {
        marginLeft: spacing['size-2'],
        cursor: 'pointer'
    },
};
