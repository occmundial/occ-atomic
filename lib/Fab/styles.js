
import colors from '../tokens/colors.json';
import shadows from '../tokens/shadows.json';

export default {
  fab: {
    background: `${colors.bg.surface.default} !important`,
    outline: `1px solid ${colors.border.default.default}`,
    outlineOffset: '-1px',
    boxShadow: shadows["elevation-elevation-4"],
    transition: '0.3s all, 0s outline, 0s outline-offset',
    '&:hover': {
      outlineColor: colors.border.default.bold,
      background: `${colors.bg.default} !important`,
    },
    '&:active, &:focus': {
      outline: `2px solid ${colors.border.default.bold}`,
      outlineOffset: '-2px',
      background: `${colors.bg.default} !important`,
    },
    '&$disabled': {
      color: colors.text.indigo.secondary,
      cursor: 'not-allowed',
      outlineColor: colors.border.default.subtle
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-corp'],
      outlineColor: colors.border.default.default,
    },
  },
  disabled: {
    cursor: 'default',
    pointerEvents: 'none',
  },
};
