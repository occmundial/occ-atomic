import spacing from '../tokens/spacing.json';
import borderRadius from '../tokens/borderRadius.json';
import colors from '../tokens/colors.json';

export default {
  root: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    borderRadius: borderRadius['br-xs']
  },
  paddingVertical: {
    paddingTop: spacing['size-4'],
    paddingBottom: spacing['size-4']
  },
  paddingVerticalDense: {
    paddingTop: spacing['size-3'],
    paddingBottom: spacing['size-3']
  },
  paddingHorizontal: {
    paddingRight: spacing['size-3'],
    paddingLeft: spacing['size-3']
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  alignItemsStart: {
    alignItems: 'start'
  },
  containerAnchor: {
    textDecoration: 'none'
  },
  activatable: {
    '&:hover, &:focus': {
      background: colors.bg.action.tertiary.hover,
      outline: 'none'
    },
    '&:active': {
      background: colors.bg.action.tertiary.active
    }
  },
  selected: {
    background: colors.bg.action.tertiary.active
  }
};
