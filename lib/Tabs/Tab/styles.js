import colors from '../../tokens/colors.json';
import spacing from '../../tokens/spacing.json';
import fonts from '../../tokens/fonts.json';
import { parseFontValue } from '../../Text/styles';
import shadows from '../../tokens/shadows.json';

export default {
  button: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing['size-2'],
    background: 'transparent',
    border: 0,
    transition: 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    whiteSpace: 'nowrap',
    alignItems: 'center'
  },
  enabled: {
    color: colors.text.corp.secondary,
    cursor: 'pointer',
    '&:hover': {
      color: colors.text.corp.primary,
      '& $icon': {
        fill: colors.icon.default.bold
      }
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `inset ${shadows['focus-bright-blue']}`
    }
  },
  small: {
    font: parseFontValue(fonts['button-small']),
    padding: [spacing['size-3'], spacing['size-4']]
  },
  medium: {
    font: parseFontValue(fonts['button-medium']),
    padding: [spacing['size-3'], spacing['size-5']]
  },
  large: {
    font: parseFontValue(fonts['button-large']),
    padding: [spacing['size-4'], spacing['size-7']]
  },
  selected: {
    color: colors.text.corp.primary
  },
  disabled: {
    color: colors.text.corp.disabled,
    cursor: 'default'
  },
  icon: {
    fill: colors.icon.default.default
  },
  iconDisabled: {
    fill: colors.icon.default.disabled
  },
  iconSelected: {
    fill: colors.icon.default.bold
  }
};
