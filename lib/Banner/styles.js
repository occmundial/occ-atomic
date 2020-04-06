import spacing from '../subatomic/spacing';
import colors from '../subatomic/colors';
import grid from '../subatomic/grid';

export default {
  container: { padding: spacing.small, backgroundColor: colors.ink },
  textBanner: { display: 'inline-block' },
  textFlex: {
    textAlign: 'start',
    [`@media screen and (min-width:${grid.xs}px)`]: { textAlign: 'center' },
  },
  iconFlex: { padding: spacing.small,
     [`@media screen and (min-width:${grid.xs}px)`]: { padding: 0 } },
  icon: { cursor: 'pointer' },
};
