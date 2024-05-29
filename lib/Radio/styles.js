import spacing from '../tokens/spacing.json';
import colors from '../tokens/colors.json';
import shadows from '../tokens/shadows.json';

const { radio } = colors;

export default {
  cont: {
    paddingTop: spacing['size-2'],
    paddingBottom: spacing['size-2'],
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'start',
    cursor: 'pointer',
    outline: '0',
    '&$active': {
      '&:focus $radio:before': {
        borderColor: radio['selected']['border']['default'],
        boxShadow: shadows['focus-bright-blue']
      },
      '&:hover': {
        '& $radio:before': {
          borderColor: radio['selected']['border']['hover'],
          boxShadow: 'initial'
        },
        '& $radio:after': {
          background: radio['selected']['bg']['hover']
        }
      },
      '&:active': {
        '& $radio:before': {
          borderColor: radio['selected']['border']['hover'],
          borderWidth: '3px',
          boxShadow: 'initial'
        },
        '& $radio:after': {
          background: radio['selected']['bg']['hover']
        }
      }
    },
    '&:not($active)': {
      '&:focus $radio:before': {
        borderColor: radio['unselected']['border']['default'],
        boxShadow: shadows['focus-bright-blue']
      },
      '&:hover $radio:before': {
        borderColor: radio['unselected']['border']['hover'],
        boxShadow: 'initial'
      },
      '&:active $radio:before': {
        borderColor: radio['unselected']['border']['hover'],
        borderWidth: '2px',
        boxShadow: 'initial'
      }
    },
  },
  radio: {
    width: spacing['size-5'],
    height: spacing['size-5'],
    position: 'relative',
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
      background: radio['bg']['default']
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
  label: {
    marginLeft: spacing['size-2'],
    cursor: 'pointer',
    float: 'left',
    flex: '1'
  },
  right: {
     marginLeft: spacing['size-2'],
    float: 'right'
  },
  overflow: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};
