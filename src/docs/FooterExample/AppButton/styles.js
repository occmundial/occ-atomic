import { colors, grid, spacing } from '@occmundial/occ-atomic';

export default {
  logoApp: {
    background: colors.ink,
    borderRadius: spacing.radius,
    height: 40,
    alignItems: 'center',
    [`@media screen and (min-width:${grid.xs}px)`]: {
      width: 120
    }
  },
  appImage: {
    width: 120,
    height: 32,
    position: 'relative',
    display: 'block'
  },
  hide: {
    display: 'none'
  }
};
