import spacing from '../subatomic/spacing';
import grid from '../subatomic/grid';
import colors from '../subatomic/colors';

export default {
  '@global': {
    body: {
        overflow:'hidden'
    }
  },
  '@keyframes overlayFadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  '@keyframes asideShow': {
      from: { left: props => (props.width ? `-${props.width}px` : '-320px')},
      to: { left: '0px'}
  },
  '@keyframes asideShowRight': {
    from: { right: props => (props.width ? `-${props.width}px` : '-320px')},
    to: { right: '0px'}
  },
  overlay: {
      position:'fixed',
      width:'100%',
      height:'100%',
      background:'rgba(0, 0, 5, 0.85)',
      top:0,
      left:0,
      zIndex:1000,
      cursor:'pointer',
      opacity: 0,
      transition:'0.3s opacity',
      transitionDelay: '0.2s',
  },
  overlayShow: {
    animation:'0.3s overlayFadeIn linear',
    opacity: 1,
  },
  card: {
    cursor:'auto',
    height: '100%',
    padding: 'unset',
  },
  ShowElement: {
    height: '100%',
    width: '320px',
    maxWidth: 'calc(100% - 32px)',
    position: 'fixed',
    top: '0',
    backgroundColor: colors.bgWhite,
    overflow: 'hidden',
    left: '-320px',
    transition:'0.4s all',
    opacity: '1 !important',
  },
  customeWidth: {
    width: props => `${props.width}px !important`,
    left: props => `-${props.width}px`,
  },
  showRight: {
    left: 'unset',
    right:'-320px',
  },
  OpenElement: {
    animation:'0.5s asideShow linear',
    left: '0px !important',
  },
  OpenElementRight: {
    animation:'0.5s asideShowRight linear',
    right: '0px !important',
  },
  content: {
    backgroundColor: colors.bgWhite,
    padding: spacing.small,
    [`@media screen and (min-width:${grid.sm}px)`]: {
        padding: spacing.medium
    },
  },
  top: {
    backgroundColor: colors.bgGrey,
    padding: spacing.small,
    [`@media screen and (min-width:${grid.sm}px)`]: {
        padding: spacing.medium
    },
  }
};
