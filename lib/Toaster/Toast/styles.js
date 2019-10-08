import colors from '../../subatomic/colors';
import spacing from '../../subatomic/spacing';
import shadows from '../../subatomic/shadows';
import grid from '../../subatomic/grid';
import iconSizes from '../../subatomic/iconSizes';

export default {
	'@keyframes slideToasterIn': {
		from: { transform: 'translateX(-100%)', opacity: 0 },
		to: { transform: 'translateX(0)', opacity: 1 }
	},
	'@keyframes slideToasterOut': {
		from: { transform: 'translateX(0)', opacity: 1 },
		to: { transform: 'translateX(-100%)', opacity: 0 }
	},
	toast: {
		borderRadius: spacing.radius,
		boxShadow: shadows.lvl5,
		padding: [spacing.tiny, spacing.small],
		pointerEvents: 'auto',
		zIndex: 1001,
		animation: 'slideToasterIn 0.3s ease-out',
		[`@media screen and (min-width:${grid.xs}px)`]: {
			padding: spacing.small
		},
	},
	closing: {
		animation: 'slideToasterIn 0.3s ease-out'
	},
	success: {
		background: colors.success
	},
	error: {
		background: colors.error
	},
	warning: {
		background: colors.warning
	},
	info: {
		background: colors.info
	},
	icon: {
		marginRight: spacing.small,
		width: iconSizes.small,
		height: iconSizes.small,
		[`@media screen and (min-width:${grid.xs}px)`]: {
			width: iconSizes.base,
			height: iconSizes.base
		}
	}
};
