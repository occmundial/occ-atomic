import spacing from '../subatomic/spacing';

export default {
  dense: {
    padding: spacing['size-1'],
    '& > span > svg': {
      marginLeft: spacing['size-1']
    }
  },
  avatarButton: {
    '& > span > svg': {
      transition: '0.3s all!important'
    },
    '&:hover, &:focus, &:active': {
      '& > span > svg': {
        transform: 'translateY(2px)'
      }
    }
  }
};
