import colors from '../../tokens/colors.json';
import fonts from '../../tokens/fonts.json';
import spacing from '../../tokens/spacing.json';
import shadows from '../../tokens/shadows.json';
import borderRadius from '../../tokens/borderRadius.json';
import { parseFontValue } from '../../Text/styles';

export default {
  pill: {
    height: 32,
    padding: [spacing['size-1'], spacing['size-2']],
    marginBottom: spacing['size-2'],
    position: 'relative',
    zIndex: 0,
    border: 0,
    transition: '0.3s all',
    cursor: 'pointer',
    borderRadius: borderRadius['br-md'],
    maxWidth: '100%',
    outline: 0,
    display: 'inline-flex',
    alignItems: 'center',
    minWidth: 'auto',
    '&:not(:last-child)': {
      marginRight: spacing['size-2']
    },
    background: colors.pill.unselected.bg.default,
    '&:hover': {
      background: colors.pill.unselected.bg.hover
    },
    '&:active': {
      background: colors.pill.unselected.bg.active
    },
    '&:focus-visible': {
      boxShadow: shadows['focus-indigo']
    }
  },
  disabled: {
    background: colors.pill.unselected.bg.disabled,
    pointerEvents: 'none'
  },
  text: {
    flex: 1,
    overflow: 'hidden',
    font: parseFontValue(fonts['body-regular']),
    color: colors.text.indigo.primary,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: [0, spacing['size-1']]
  },
  textDisabled: {
    color: colors.text.indigo.secondary
  },
  closeCont: {
    width: spacing['size-5'],
    height: spacing['size-5'],
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing['size-1']
  },
};
