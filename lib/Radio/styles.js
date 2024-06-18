import spacing from '../tokens/spacing.json';
import colors from '../tokens/colors.json';
import shadows from '../tokens/shadows.json';

const { radio } = colors;

export default {
  cont: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    outline: '0',
    '&:focus-visible $radio:before': {
      borderColor: radio['selected']['border']['default'],
      boxShadow: shadows['focus-bright-blue']
    },
    '&$active': {
      '&:hover': {
        '& $radio:before': {
          borderColor: radio['selected']['border']['hover']
        },
        '& $radio:after': {
          background: radio['selected']['bg']['hover']
        }
      },
      '&:active': {
        '& $radio:before': {
          borderColor: radio['selected']['border']['hover'],
          borderWidth: '3px'
        },
        '& $radio:after': {
          background: radio['selected']['bg']['hover']
        }
      }
    },
    '&:not($active)': {
      '&:hover $radio:before': {
        borderColor: radio['unselected']['border']['hover']
      },
      '&:active $radio:before': {
        borderColor: radio['unselected']['border']['hover'],
        borderWidth: '2px'
      }
    },
  },
  radioWrap: {
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  radio: {
    width: spacing['size-5'],
    height: spacing['size-5'],
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    '&:before': {
      content: '""',
      boxSizing: 'border-box',
      width: 20,
      height: 20,
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: `1px solid ${radio['unselected']['border']['default']}`,
      background: radio['bg']['default'],
      transition: '0.3s all'
    },
    '&:after': {
      content: '""',
      boxSizing: 'border-box',
      width: 10,
      height: 10,
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      transition: '0.3s all',
      background: radio['bg']['default']
    }
  },
  active: {
    '& $radio': {
      '&:before': {
        borderWidth: 2,
        borderColor: radio['selected']['border']['default']
      },
      '&:after': {
        background: radio['selected']['bg']['default']
      }
    }
  },
  disabled: {
    pointerEvents: 'none',
    '& :not($radio)': {
      opacity: 0.4
    },
    '&$active': {
      '& $radio:before': {
        borderColor: radio['selected']['border']['disabled']
      },
      '& $radio:after': {
        background: radio['selected']['bg']['disabled']
      }
    },
    '&:not($active)': {
      '& $radio:before': {
        background: radio['bg']['disabled']
      },
      '& $radio:after': {
        background: radio['bg']['disabled']
      }
    }
  },
  labelWrap: {
    minHeight: 48,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4
  },
  label: {
    marginLeft: spacing['size-3'],
    pointerEvents: 'none',
    cursor: 'pointer',
    float: 'left',
    flex: '1',
  },
  right: {
    marginLeft: spacing['size-2'],
    float: 'right',
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
