import spacing from '../tokens/spacing.json';
import colors from '../tokens/colors.json';
import shadows from '../tokens/shadows.json';
import borderRadius from '../tokens/borderRadius.json';

const { switch: toggle } = colors;
const transition = 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s';

export default {
    cont: {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'flex-start',
        cursor: 'pointer',
        outline: 0,
        '&:hover $switch $switchBg, &:active $switch $switchBg': {
            background: toggle.unselected.bg.hover
        },
        '&:focus-visible $switch': {
            boxShadow: shadows['focus-indigo']
        },
        '&:hover $switch$checked $switchBg, &:active $switch$checked $switchBg': {
            background: toggle.selected.bg.hover
        },
        '&:active $switch $switchBg': {
            boxShadow: `inset 0 0 0 2px ${colors.switch.border.default}`,
        },
        '&:focus-visible $switch$checked': {
            boxShadow: shadows['focus-bright-blue'],
        },
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
        borderRadius: borderRadius['br-full'],
        transition
        },
        switchBg: {
        width: 52,
        height: 32,
        background: toggle.unselected.bg.default,
        boxShadow: `inset 0 0 0 1px ${colors.switch.border.default}`,
        borderRadius: borderRadius['br-full'],
        transition
    },
    checked: {
        '& $switchBg': {
            background: toggle.selected.bg.default
        },
        '& $slider': {
            left: `calc(100% - 28px)`,
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
        background: toggle.bg.default,
        transition: '0.3s all'
    },
    icon: {
        margin: 4
    },
    disabled: {
        '& $switch $switchBg': {
            boxShadow: `inset 0 0 0 1px ${colors.switch.border.disabled}`,
            background: toggle.bg.disabled
        },
        pointerEvents: 'none'
    },
    labelWrap: {
        minHeight: 48,
        display: 'flex',
        alignItems: 'center',
        paddingTop: spacing['size-1'],
        paddingBottom: spacing['size-1'],
        overflow: 'hidden'
    },
    label: {
        marginLeft: spacing['size-3'],
        cursor: 'pointer'
    },
};
