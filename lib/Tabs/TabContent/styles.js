import spacing from '../../tokens/spacing.json';

export default {
  container: {
    padding: spacing['size-4'],
    transition: 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    opacity: 1
  },
  hide: {
    opacity: 0,
    display: 'none'
  }
};
