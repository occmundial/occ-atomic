import spacing from '../subatomic/spacing';
export default {
  bulletContainer: {
    marginRight: spacing.tiny,
    height: props => props.svg ? spacing[props.size] : '',
    display: 'inline-flex',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
  },
};
