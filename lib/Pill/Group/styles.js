import colors from '../../tokens/colors.json';
import spacing from '../../tokens/spacing.json';
import shadows from '../../tokens/shadows.json';
import fonts from '../../tokens/fonts.json';
import borderRadius from '../../tokens/borderRadius.json';
import { parseFontValue } from '../../Text/styles';

export default {
  pillGroup: {
    display: 'flex',
    background: colors.pill.unselected.bg.default,
    borderRadius: borderRadius['br-full'],
    marginBottom: spacing['size-2']
  },
  pill: {
    color: colors.text.indigo.primary,
    background: 'none',
    font: parseFontValue(fonts['body-regular']),
    height: spacing['size-6'],
    padding: [0, spacing['size-4']],
    outline: 0,
    borderRadius: borderRadius['br-md'],
    position: 'relative',
    zIndex: 1,
    border: 0,
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    transition: '0.3s all',
    cursor: 'pointer',
    '&:hover': {
      background: colors.pill.unselected.bg.hover
    },
    '&:active': {
      background: colors.pill.unselected.bg.active
    },
    '&:focus-visible': {
      boxShadow: shadows['focus-indigo'],
      background: 'none'
    },
  },
  selected: {
    background: `${colors.pill.selected.bg.default} !important`,
    zIndex: 2,
    color: colors.text.white.primary
  },
  disabled: {
    color: colors.text.indigo.secondary,
    zIndex: 0,
    pointerEvents: 'none'
  },
};
