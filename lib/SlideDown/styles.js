import spacing from '../tokens/spacing.json';
import colors from '../tokens/colors.json';

export default {
  wrapper: {
    marginBottom: spacing['size-4']
  },
  button: {
    cursor: 'pointer',
  },
  normalPadding: {
    paddingTop: spacing['size-3'],
    paddingBottom: spacing['size-3']
  },
  largePadding: {
    paddingTop: spacing['size-4'],
    paddingBottom: spacing['size-4']
  },
  buttonPadding: {
    paddingLeft: spacing['size-4'],
    paddingRight: spacing['size-4']
  },
  text: {
    cursor: 'pointer'
  },
  tag: {
    marginTop: spacing['size-1'],
    marginLeft: spacing['size-2'],
    pointerEvents: 'none'
  },
  icon: {
    transition: 'rotate cubic-bezier(0.25,0.46,0.45,0.94) 0.2s'
  },
  leftIcon: {
    marginRight: spacing['size-2']
  },
  rotateIcon: {
    transform: 'rotate(-180deg)'
  },
  content: {
    overflow: 'hidden',
    transform: 'translateY(-10px)',
    transition: 'transform cubic-bezier(0.25,0.46,0.45,0.94) 0.2s'
  },
  showContent: {
    transform: 'translateY(0px)',
    transition: 'transform cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s',
    marginBottom: spacing['size-3']
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateRows: '0fr',
    transition:
      'grid-template-rows cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s, opacity cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    opacity: 0
  },
  showContentWrapper: {
    opacity: 1,
    gridTemplateRows: '1fr',
    transition:
      'grid-template-rows cubic-bezier(0.25,0.46,0.45,0.94) 0.2s, opacity cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s'
  },
  divider: {
    border: `1px solid ${colors.border.default.subtle}`,
    marginTop: `-${spacing['size-0']}`
  },
  flexContainer: {
    gap: spacing['size-4']
  }
};
