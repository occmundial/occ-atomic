import spacing from '../subatomic/spacing';

let height = 0;
switch (props => props.size) {
  case 'sm':
    height = spacing.small; 
    break;
  case 'bs':
    height = spacing.base; 
    break;
  case 'md':
    height = spacing.medium; 
    break;
  case 'lg':
    height = spacing.large; 
    break;
  case 'xl':
    height = spacing.xLarge; 
    break;
  default:
    height = spacing.base;
    break;
}

export default {
  bulletContainer: {
    marginRight: spacing.tiny,
    height: props => props.svg ? height : '',
    display: 'inline-flex',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
  },
};
