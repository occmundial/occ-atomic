import spacing from '../subatomic/spacing';

export default {
  icon :{
    marginRight: spacing.tiny,
  },
  svg :{
    marginRight: spacing.tiny,
    backgroundImage: props => props.svg ? `url(${props.svg})` : '',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
};
