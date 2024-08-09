import spacing from '../subatomic/spacing';
import grid from '../subatomic/grid';
import colors from '../tokens/colors.json';

export default {
    '@keyframes progress': {
        '0%': {
            transform: 'translate3d(-100%, 0, 0)'
        },
        '100%': {
            transform: 'translate3d(100%, 0, 0)'
        }
    },
    placeholder: {
        width: props => props.width ? props.width : null,
        height: props => props.height ? props.height : !props.textSize ? 14 : null,
        borderRadius: spacing.xTiny,
        position: 'relative',
        overflow: 'hidden',
        '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            animation: 'progress 2s ease-in-out infinite'
        },
    },
    light: {
      background: colors.skeleton.bg.default.default,
      overflow: 'hidden',
      '&:after': {
        background: colors.skeleton.bg.default.gradient
      }
    },
    dark: {
      background: colors.skeleton.bg.inverse.default,
      overflow: 'hidden',
      '&:after': {
        background: colors.skeleton.bg.inverse.gradient
      }
    },
    round: {
        borderRadius: '50%'
    },
    display: {
      height: 48,
      margin: '2.4px 0',
      [`@media screen and (min-width:${grid.sm}px)`]: {
        height: 72,
        margin: '3.6px 0'
      }
    },
    h1: {
      height: 32,
      margin: '1.6px 0',
      [`@media screen and (min-width:${grid.sm}px)`]: {
        height: 48,
        margin: '2.4px 0'
      }
    },
    h2: {
      height: 28,
      margin: '1.4px 0',
      [`@media screen and (min-width:${grid.sm}px)`]: {
        height: 40,
        margin: '2px 0'
      }
    },
    h3: {
      height: 24,
      margin: '1.2px 0',
      [`@media screen and (min-width:${grid.sm}px)`]: {
        height: 30.8,
        margin: '1.4px 0'
      }
    },
    h4: {
      height: 20,
      margin: '1px 0',
      [`@media screen and (min-width:${grid.sm}px)`]: {
        height: 24,
        padding: '1.2px 0'
      }
    },
    h5: {
      height: 18,
      margin: '0.9px 0'
    },
    tag: {
      height: 10,
      margin: '2.5px 0'
    },
    bodyXLarge: {
      height: 20,
      margin: '5px 0'
    },
    bodyLargeStrong: {
      height: 18,
      margin: '4.5px 0'
    },
    bodyLarge: {
      height: 18,
      margin: '4.5px 0'
    },
    bodyRegularStrong: {
      height: 16,
      margin: '4px 0'
    },
    bodyRegular: {
      height: 16,
      margin: '4px 0'
    },
    bodySmallStrong: {
      height: 14,
      margin: '3.5px 0'
    },
    bodySmall: {
      height: 14,
      margin: '3.5px 0'
    },
    bodyXSmall: {
      height: 12,
      margin: '3px 0'
    },
    topxTiny: {
        marginTop: spacing.xTiny
    },
    toptiny: {
        marginTop: spacing.tiny
    },
    topsmall: {
        marginTop: spacing.small
    },
    topbase: {
        marginTop: spacing.base
    },
    topmedium: {
        marginTop: spacing.medium
    },
    toplarge: {
        marginTop: spacing.large
    },
    topxLarge: {
        marginTop: spacing.xLarge
    },
    bottomxTiny: {
        marginBottom: spacing.xTiny
    },
    bottomtiny: {
        marginBottom: spacing.tiny
    },
    bottomsmall: {
        marginBottom: spacing.small
    },
    bottombase: {
        marginBottom: spacing.base
    },
    bottommedium: {
        marginBottom: spacing.medium
    },
    bottomlarge: {
        marginBottom: spacing.large
    },
    bottomxLarge: {
        marginBottom: spacing.xLarge
    }
};
