import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';
import shadows from '../tokens/shadows.json';
import colors from '../tokens/colors.json';
import spacing from '../tokens/spacing.json';
import borderRadius from '../tokens/borderRadius.json';

const { checkbox, icon } = colors;

export default {
  cont: {
    width: spacing['size-5'],
    height: spacing['size-5'],
    boxSizing: 'border-box',
    outline: '0',
    marginBottom: '15px',
    display: 'flex',
    cursor: 'pointer',
    '&:after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    '&:focus $check': {
      boxShadow: shadows['focus-bright-blue'],
      borderWidth: 1
    },
    '&$active': {
      '&:hover $check, &:active $check': {
        background: checkbox['selected']['bg']['hover']
      }
    }
  },
  check: {
    boxSizing: 'border-box',
    flex: '0 0 20px',
    width: '20px',
    height: '20px',
    margin: '4px',
    borderRadius: '1px',
    border: `1px solid ${checkbox['unselected']['border']['default']}`,
    position: 'relative',
    float: 'left',
    borderRadius: borderRadius['br-xs'],
    background: checkbox['unselected']['bg']['default'],
    transition: '0.3s all',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '18px',
      height: '18px'
    }
  },
  active: {
    '& $check': {
      borderColor: checkbox['selected']['border']['default'],
      background: checkbox['selected']['bg']['default'],
      '&:after': {
        background: icons.base(icons.check.icon([icon['inverse']['default']]))
      }
    }
  },
  disabled: {
    pointerEvents: 'none',
    '&$active $check': {
      borderColor: checkbox['selected']['border']['default'],
      background: checkbox['selected']['bg']['disabled'],
      '&:after': {
        background: icons.base(icons.check.icon([icon['brand']['disabled']]))
      }
    },
    '&:not($active) $check': {
      borderColor: checkbox['unselected']['border']['default'],
      background: checkbox['unselected']['bg']['disabled']
    }
  },
  label: {
    fontFamily: fonts.body,
    fontSize: '16px',
    color: colors.grey7,
    paddingTop: '3px',
    paddingLeft: '5px',
    paddingRight: '10px',
    float: 'left',
    flex: '1',
    transition: '0.3s all'
  },
  right: {
    extend: 'label',
    flex: 'none',
    fontSize: '14px',
    color: colors.grey1,
    paddingRight: '0',
    float: 'right'
  }
};
