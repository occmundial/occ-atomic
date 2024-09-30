import colors from '../subatomic/colors';
import spacing from '../tokens/spacing.json';

export default {
  link: {
    textDecoration: 'none',
    display: 'inline-block'
  },
  text: {
    opacity: 0.6,
    cursor: 'pointer',
    transition: '0.3s all',
    display: 'inline-block',
    '&:hover': {
      opacity: 1
    }
  },
  selected: {
    cursor: 'default',
    opacity: 1
  },
  notification: {
    display: 'inline-block',
    borderRadius: '50%',
    width: spacing['size-2'],
    height: spacing['size-2'],
    backgroundColor: colors.error,
    marginBottom: 1,
    marginLeft: spacing['size-1']
  }
};
