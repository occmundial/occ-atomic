
import colors from '../tokens/colors.json';
import shadows from '../tokens/shadows.json';

export default {
  fab: {
    background: `${colors.bg.surface.default} !important`,
    outlineOffset: '0px',
    outline: `1px solid ${colors.border.default.default}`,
    outlineOffset: '-1px',
    boxShadow: shadows["elevation-elevation-4"],
    transition: 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
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
  },
  disabled: {
    cursor: 'default',
    pointerEvents: 'none',
  },
};
