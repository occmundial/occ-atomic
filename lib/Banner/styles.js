import spacing from '../subatomic/spacing';
import colors from '../subatomic/colors';
import grid from '../subatomic/grid';

export default {
  container: { padding: spacing.small, backgroundColor: colors.ink },
  textBanner: { display: 'inline-block' },
  textFlex: {
    textAlign: 'center',
    [`@media screen and (max-width:${grid.xs}px)`]: { textAlign: 'start' },
  },
  iconFlex: { [`@media screen and (max-width:${grid.xs}px)`]: { padding: spacing.small } },
  icon: { cursor: 'pointer' },
};
