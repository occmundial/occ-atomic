import colors from '../tokens/colors.json';
import borderRadius from '../tokens/borderRadius.json';
import shadows from '../tokens/shadows.json';

export default {
  contentWrapper: {
    width: 280,
    backgroundColor: colors.bg.surface.default,
    borderRadius: borderRadius['br-sm'],
    border: `1px solid ${colors.border.default.default}`,
    boxShadow: shadows['elevation-elevation-5']
  },
};
