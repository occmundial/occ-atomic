import grid from '../subatomic/grid';
import colors from '../tokens/colors.json';
import fonts from '../tokens/fonts.json';
import spacing from '../tokens/spacing.json';
import borderRadius from '../tokens/borderRadius.json';
import { parseFontValue } from '../Text/styles';

export default {
  container: {
    padding: spacing['size-3'],
    borderRadius: borderRadius['br-xs'],
    minHeight: '56px',
    alignItems: 'center',
    outlineOffset: '-1px',
    [`@media screen and (min-width:${grid.xs}px)`]: {
      padding: [spacing['size-2'], spacing['size-4']],
    },
  },
  noBorderRadius: {
    borderRadius: 0
  },
  info: {
    backgroundColor: colors.alert.info.bg,
    outline: `1px solid ${colors.alert.info.border}`,
  },
  warning: {
    backgroundColor: colors.alert.warning.bg,
    outline: `1px solid ${colors.alert.warning.border}`,
  },
  success: {
    backgroundColor: colors.alert.success.bg,
    outline: `1px solid ${colors.alert.success.border}`,
  },
  error: {
    backgroundColor: colors.alert.error.bg,
    outline: `1px solid ${colors.alert.error.border}`,
  },
  promote: {
    backgroundColor: colors.alert.neutral.bg,
    outline: `1px solid ${colors.alert.neutral.border}`,
  },
  textInfo: {
    color: colors.text.indigo.primary,
  },
  textWarning: {
    color: colors.text.warning,
  },
  textSuccess: {
    color: colors.text.success,
  },
  textError: {
    color: colors.text.error,
  },
  textPromote: {
    color: colors.text.white.primary,
  },
  linkInfo: {
    color: colors.text.indigo.primary,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(${colors.link.brand.bg.hover}, ${colors.link.brand.bg.hover})`,
    '&:active': {
      background: `linear-gradient(${colors.link.brand.bg.active}, ${colors.link.brand.bg.active})`
    },
  },
  linkWarning: {
    color: colors.text.warning,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(${colors.link.warning.bg.hover}, ${colors.link.warning.bg.hover})`,
    '&:active': {
      background: `linear-gradient(${colors.link.warning.bg.active}, ${colors.link.warning.bg.active})`
    },
  },
  linkSuccess: {
    color: colors.text.success,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(${colors.link.success.bg.hover}, ${colors.link.success.bg.hover})`,
    '&:active': {
      background: `linear-gradient(${colors.link.success.bg.active}, ${colors.link.success.bg.active})`
    },
  },
  linkError: {
    color: colors.text.error,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(${colors.link.error.bg.hover}, ${colors.link.error.bg.hover})`,
    '&:active': {
      background: `linear-gradient(${colors.link.error.bg.active}, ${colors.link.error.bg.active})`
    },
  },
  linkPromote: {
    color: colors.text.white.primary,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(${colors.link.white.bg.hover}, ${colors.link.white.bg.hover})`,
    '&:active': {
      background: `linear-gradient(${colors.link.white.bg.active}, ${colors.link.white.bg.active})`
    },
  },
  icon: {
    marginRight: spacing['size-2'],
    flexShrink: 0,
  },
  closeIconMargin: {
    marginLeft: spacing['size-4']
  },
  closeIconSmallMargin: {
    marginLeft: spacing['size-3']
  },
  cta: {
    textDecoration: 'underline',
    font: parseFontValue(fonts['alert-default']),
    cursor: 'pointer',
    textWrap: 'nowrap',
    margin: [spacing['size-2'], 0, 0],
    alignSelf: 'start',
    transition: 'all ease-out 150ms',
    backgroundSize: '0%',
    '&:hover': {
      backgroundSize: '100%',
      cursor: 'pointer',
    }
  },
  ctaAlert: {
    margin: [0, 0, 0, spacing['size-4']],
    alignSelf: 'center',
  },
  ctaBanner: {
    margin: [0, 0, 0, spacing['size-2']],
    alignSelf: 'center',
  },
  normalText: {
    font: parseFontValue(fonts['alert-default']),
    display: 'inline-block',
		margin: 0
  },
  textContainer: {
    flex: 1,
    alignSelf: 'center'
  },
  growText: {
    flexGrow: 1,
  },
  maxWidth: {
    maxWidth: '1200px',
    margin: [0, 'auto']
  },
};
