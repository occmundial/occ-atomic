import spacing from '../tokens/spacing.json';
import colors from '../tokens/colors.json';
import shadows from '../tokens/shadows.json';
import borderRadius from '../tokens/borderRadius.json';

const { radio } = colors;
const transition = 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s';

export default {
  cont: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    outline: '0',
    '&:focus-visible $radio': {
      boxShadow: shadows['focus-bright-blue']
    },
    '&:hover $radio $radioOuter': {
      boxShadow: `inset 0 0 0 1px ${radio.unselected.border.hover}`
    },
    '&:active $radio $radioOuter': {
      boxShadow: `inset 0 0 0 2px ${radio.unselected.border.hover}`
    },
    '&$active': {
      '&:hover': {
        '& $radio $radioOuter': {
          boxShadow: `inset 0 0 0 2px ${radio.selected.border.hover}`
        },
        '& $radio $radioInner': {
          background: radio.selected.bg.hover
        }
      },
      '&:active': {
        '& $radio $radioOuter': {
          boxShadow: `inset 0 0 0 3px ${radio.selected.border.hover} !important`
        },
        '& $radio $radioInner': {
          background: radio.selected.bg.hover
        }
      }
    }
  },
  radioWrap: {
    width: 52,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: borderRadius['br-full'],
    transition,
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: borderRadius['br-full'],
    boxShadow: `inset 0 0 0 1px ${radio.unselected.border.default}`,
    background: radio.bg.default,
    transition,
    gridRowStart: 1,
    gridColumnStart: 1
  },
  radioInner: {
    width: 10,
    height: 10,
    margin: 5,
    borderRadius: borderRadius['br-full'],
    background: radio.bg.default,
    transition,
    gridRowStart: 1,
    gridColumnStart: 1
  },
  active: {
    '& $radio': {
      '& $radioOuter': {
        boxShadow: `inset 0 0 0 2px ${radio.selected.border.default}`
      },
      '& $radioInner': {
        background: radio.selected.bg.default
      }
    }
  },
  disabled: {
    pointerEvents: 'none',
    '& $radio $radioOuter': {
      background: radio.bg.disabled
    },
    '& $radio $radioInner': {
      background: radio.bg.disabled
    },
    '&$active': {
      '& $radio $radioOuter': {
        boxShadow: `inset 0 0 0 2px ${radio.selected.border.disabled}`
      },
      '& $radio $radioInner': {
        background: radio.selected.bg.disabled
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
    pointerEvents: 'none',
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
  tag: {
    marginLeft: spacing['size-2'],
    pointerEvents: 'none'
  },
  alignLeft: {
    flex: 'none'
  }
};
