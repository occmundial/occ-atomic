import spacing from '../tokens/spacing.json';
import shadows from '../tokens/shadows.json';
import colors from '../tokens/colors.json';
import borderRadius from '../tokens/borderRadius.json';


const { checkbox } = colors;
const transition = 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s';

export default {
  cont: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    outline: '0',
    '&:after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    '&:focus-visible $check': {
      boxShadow: shadows['focus-bright-blue'],
    },
    '&:hover $check $box': {
      boxShadow: `inset 0 0 0 1px ${checkbox.unselected.border.hover}`
    },
    '&:active $check $box': {
      boxShadow: `inset 0 0 0 2px ${checkbox.unselected.border.hover}`
    },
    '&$active, &$undetermined': {
      '&:hover $check $box': {
        boxShadow: `inset 0 0 0 1px ${checkbox.selected.border.default}`,
        background: checkbox.selected.bg.hover
      },
      '&:active $check $box': {
        boxShadow: `inset 0 0 0 2px ${checkbox.selected.border.default}`,
        background: checkbox.selected.bg.hover
      }
    },
  },
  checkWrap: {
    width: 52,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: borderRadius['br-xs'],
    transition,
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: borderRadius['br-xs'],
    boxShadow: `inset 0 0 0 1px ${checkbox.unselected.border.default}`,
    background: checkbox['unselected']['bg']['default'],
    transition,
    gridRowStart: 1,
    gridColumnStart: 1
  },
  icon: {
    gridRowStart: 1,
    gridColumnStart: 1,
    margin: 2
  },
  active: {
    '& $check $box': {
      boxShadow: `inset 0 0 0 1px ${checkbox.selected.border.default}`,
      background: checkbox.selected.bg.default
    }
  },
  undetermined: {
    '& $check $box': {
      boxShadow: `inset 0 0 0 1px ${checkbox.selected.border.default}`,
      background: checkbox.selected.bg.default
    },
  },
  disabled: {
    pointerEvents: 'none',
    '& $check $box': {
      boxShadow: `inset 0 0 0 1px ${checkbox.unselected.border.default}`,
      background: checkbox.unselected.bg.disabled
    },
    '&$active, &$undetermined': {
      '& $check $box': {
        boxShadow: `inset 0 0 0 1px ${checkbox.selected.border.default}`,
        background: checkbox.selected.bg.disabled
      }
    }
  },
  labelWrap: {
    minHeight: 48,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    overflow: 'hidden',
    flex: 1
  },
  label: {
    marginLeft: spacing['size-3'],
    cursor: 'pointer',
    flex: 1
  },
  right: {
    marginLeft: spacing['size-2'],
    pointerEvents: 'none'
  },
  overflow: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  alignLeft: {
    flex: 'none'
  }
};
