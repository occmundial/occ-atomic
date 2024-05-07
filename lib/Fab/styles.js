
import { colors, shadows } from "../tokens";

export default {
  fab: {
    height: '100%',
    background: `${colors.bg.surface.default} !important`,
    outlineOffset: '0px',
    outline: `1px solid ${colors.border.default.default}`,
    boxShadow: shadows["elevation-elevation-4"],
    '&:hover': {
      outlineColor: colors.border.default.bold,
      background: `${colors.bg.default} !important`,
    },
    '&:active, &:focus': {
      outline: `2px solid ${colors.border.default.bold}`,
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
