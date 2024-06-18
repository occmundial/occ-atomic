import icons from '../subatomic/icons';
import spacing from '../tokens/spacing.json';
import colors from '../tokens/colors.json';
import shadows from '../tokens/shadows.json';
import borderRadius from '../tokens/borderRadius.json';

const { switch: toggle, icon } = colors;

export default {
    cont: {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'flex-start',
        cursor: 'pointer',
        outline: 0,
        '&:hover $switch$checked, &:active $switch$checked': {
            background: toggle['selected']['bg']['hover']
        },
        '&:focus-visible $switch$checked': {
            boxShadow: shadows['focus-bright-blue'],
        },
        '&:hover $switch:not($checked), &:active $switch:not($checked)': {
            background: toggle['unselected']['bg']['hover']
        },
        '&:focus-visible $switch:not($checked)': {
            boxShadow: shadows['focus-indigo']
        }
    },
    switchWrap: {
        width: 52,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0
    },
    switch: {
        position: 'relative',
        display: 'inline-block',
        width: 52,
        height: 32,
        flexShrink: 0,
        background: toggle['unselected']['bg']['default'],
        borderRadius: borderRadius['br-full'],
        border: `1px solid ${colors.switch.border.default}`,
        transition: '0.3s all'
    },
    checked: {
        background: toggle['selected']['bg']['default'],
        '& $slider': {
            left: `calc(100% - 28px)`,
        },
        '& $icon': {
            background: icons.base(icons.check.icon([icon.brand.bold]))
        }
    },
    slider: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: 4,
        width: 24,
        height: 24,
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
            borderColor: colors.switch.border.disabled,
            background: toggle['bg']['disabled']
        },
        '& $icon': {
            background: icons.base(icons.cross.icon([icon.default.disabled]))
        },
        '& $checked $icon': {
            background: icons.base(icons.check.icon([icon.default.disabled]))
        },
        pointerEvents: 'none'
    },
    labelWrap: {
        minHeight: 48,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 4,
        paddingBottom: 4,
        overflow: 'hidden'
    },
    label: {
        marginLeft: spacing['size-3'],
        cursor: 'pointer'
    },
};
