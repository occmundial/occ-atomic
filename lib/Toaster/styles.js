import grid from '../subatomic/grid';
import spacing from '../subatomic/spacing';

export default {
	container: {
		position: 'fixed',
		zIndex: 1001,
		bottom: 0,
		left: 0,
		padding: spacing.small,
		[`@media screen and (min-width:${grid.xs}px)`]: {
			padding: spacing.medium
		},
		[`@media screen and (max-width:${grid.xs-1}px)`]: {
			width: '100vw'
		},
		pointerEvents: 'none'
	}
};
