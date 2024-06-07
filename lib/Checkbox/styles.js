import icons from '../subatomic/icons';
import spacing from '../tokens/spacing.json';
import shadows from '../tokens/shadows.json';
import colors from '../tokens/colors.json';
import borderRadius from '../tokens/borderRadius.json';


const { checkbox, icon } = colors;

export default {
  cont: {
    paddingTop: spacing['size-2'],
    paddingBottom: spacing['size-2'],
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'start',
    cursor: 'pointer',
    outline: '0',
    '&:after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    '&:focus $check:before': {
      boxShadow: shadows['focus-bright-blue'],
      borderWidth: 1
    },
    '&$active, &$undetermined': {
      '&:hover $check:before, &:active $check:before': {
        background: checkbox['selected']['bg']['hover']
      }
    },
    '&:not($active), &:not($undetermined)': {
      '&:hover $check:before, &:active $check:before': {
        borderColor: checkbox['unselected']['border']['hover']
      },
      '&:active $check:before': {
        borderWidth: 2
      }
    }
  },
  check: {
    width: spacing['size-5'],
    height: spacing['size-5'],
    position: 'relative',
    '&:before': {
      content: '""',
      boxSizing: 'border-box',
      width: 20,
      height: 20,
      borderRadius: borderRadius['br-xs'],
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: `1px solid ${checkbox['unselected']['border']['default']}`,
      background: checkbox['unselected']['bg']['default'],
      transition: '0.3s all'
    },
    '&:after': {
      content: '""',
      boxSizing: 'border-box',
      width: 20,
      height: 20,
      marginTop: -1,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      transition: '0.3s all',
      background: 'transparent'
    }
  },
  active: {
    '& $check:after': {
      background: icons.base(icons.check.icon([icon['inverse']['default']]))
    },
    '& $check:before': {
      borderColor: checkbox['selected']['border']['default'],
      background: checkbox['selected']['bg']['default']
    }
  },
  undetermined: {
    '& $check:before': {
      borderColor: checkbox['selected']['border']['default'],
      background: checkbox['selected']['bg']['default']
    },
    '& $check:after': {
      background: icons.base(icons.minus.icon([icon['inverse']['default']])),
      marginTop: 0
    }
  },
  disabled: {
    pointerEvents: 'none',
    '&$active, &$undetermined': {
      '& $check:before': {
        borderColor: checkbox['selected']['border']['default'],
        background: checkbox['selected']['bg']['disabled']
      }
    },
    '&$undetermined $check:after': {
      background: icons.base(icons.minus.icon([icon['brand']['disabled']]))
    },
    '&$active $check:after': {
      background: icons.base(icons.check.icon([icon['brand']['disabled']]))
    },
    '&:not($active), &:not($undetermined)': {
      '& $check:before': {
        borderColor: checkbox['unselected']['border']['default'],
        background: checkbox['unselected']['bg']['disabled']
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
    float: 'right',
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
