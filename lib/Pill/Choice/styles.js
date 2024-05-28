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
    }
  },
  enabled: {
    background: colors.pill.unselected.bg.default,
    '&:hover': {
      background: colors.pill.unselected.bg.hover
    },
    '&:active, &:focus': {
      background: colors.pill.unselected.bg.active
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-indigo'],
      background: colors.pill.unselected.bg.default
    }
  },
  disabled: {
    background: colors.pill.unselected.bg.disabled,
    pointerEvents: 'none'
  },
  selected: {
    background: `${colors.pill.selected.bg.default} !important`,
    zIndex: 1,
    color: colors.text.white.primary,
    '&:hover': {
      background: colors.pill.selected.bg.hover
    },
    '&:active, &:focus': {
      background: colors.pill.selected.bg.active
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-indigo']
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-bright-blue']
    }
  },
  selectedDisabled: {
    background: colors.pill.selected.bg.disabled,
    pointerEvents: 'none'
  },
  text: {
    flex: 1,
    overflow: 'hidden',
    font: parseFontValue(fonts['body-regular']),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: [0, spacing['size-1']],
    marginLeft: spacing['size-1'],
    marginRight: spacing['size-1']
  },
  textSelectedDisabled: {
    color: colors.text.white.secondary
  },
  textSelected: {
    color: colors.text.white.primary
  },
  textDisabled: {
    color: colors.text.indigo.secondary
  },
  textEnabled: {
    color: colors.text.indigo.primary
  }
};
