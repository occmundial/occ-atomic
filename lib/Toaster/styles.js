import grid from '../subatomic/grid';
import spacing from '../subatomic/spacing';

export default {
	container: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		padding: spacing.small,
		[`@media screen and (min-width:${grid.sm}px)`]: {
			padding: spacing.medium
		},
		pointerEvents: 'none'
	}
};
