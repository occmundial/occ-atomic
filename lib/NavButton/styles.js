import spacing from '../tokens/spacing.json';
import colors from '../tokens/colors.json';

export default {
  cont: {
    width: props => props.width ? props.width : null,
    display: 'inline-block',
    height: spacing['size-9'],
    cursor: 'pointer',
    position: 'relative',
    '& $svg': {
      fill: props => props.white ? colors.text.white.secondary : colors.text.corp.secondary
    },
    '&:hover $svg, &:focus $svg, &:active $svg': {
      fill: props => props.white ? colors.text.white.primary : colors.text.corp.primary,
    },
    '&:hover $text, &:focus $text, &:active $text': {
      color: props => props.white ? colors.text.white.primary : colors.text.corp.primary,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 3,
      bottom: 0,
      left: 0,
      background: 'transparent',
      transition: '0.3s all'
    }
  },
  flex: {
    height: spacing['size-9'],
  },
  selected: {
    '& $svg, &:hover $svg': {
      fill: props => props.white ? colors.text.white.primary : colors.text.corp.primary,
    },
    '& $text, &:hover $text': {
      color: props => props.white ? colors.text.white.primary : colors.text.corp.primary
    },
    '&:after': {
      background: props => props.showBar ?  colors.border.accent : null  
    }
  },
  text: {
    color: props => props.white ?  colors.text.white.secondary : colors.text.corp.secondary,
    marginLeft: props => props.direction !== 'col' ? spacing['size-2'] : null,
    transition: '0.3s all'
  }
};
