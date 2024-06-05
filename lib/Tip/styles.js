import colors from '../tokens/colors.json';
import fonts from '../tokens/fonts.json';
import spacing from '../tokens/spacing.json';
import borderRadius from '../tokens/borderRadius.json';
import { parseFontValue } from '../Text/styles';

export default {
  container: {
    padding: [spacing['size-4']],
    borderRadius: borderRadius['br-xs'],
    minHeight: '56px',
    alignItems: 'center',
    outlineOffset: '-1px'
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
    color: colors.text.indigo.primary
  },
  textWarning: {
    color: colors.text.warning
  },
  textSuccess: {
    color: colors.text.success
  },
  textError: {
    color: colors.text.error
  },
  textPromote: {
    color: colors.text.white.primary
  },
  icon: {
    marginRight: spacing['size-2'],
    flexShrink: 0,
  },
  text: {
    maxWidth: '100%'
  },
  closeIcon: {
    marginLeft: spacing['size-4']
  },
  cta: {
    textDecoration: 'underline',
    font: parseFontValue(fonts['alert-default']),
    cursor: 'pointer',
    textWrap: 'nowrap',
  },
  ctaLarge: {
    marginLeft: spacing['size-4'],
    alignSelf: 'center',
  },
  ctaSmall: {
    margin: [spacing['size-2'], 0, 0],
    alignSelf: 'start',
  },
  normalText: {
    font: parseFontValue(fonts['alert-default']),
    display: 'inline-block',
		margin: 0
  },
  textContainer: {
    padding: [spacing['size-3'], 0]
  },
  small: {
    maxWidth: 360,
    padding: spacing['size-3'],
  }
};
