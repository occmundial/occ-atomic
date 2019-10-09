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
	toast: {
		borderRadius: spacing.radius,
		boxShadow: shadows.lvl5,
		padding: [spacing.tiny, spacing.small],
		pointerEvents: 'auto',
		zIndex: 1001,
		animation: 'slideToasterIn 0.3s ease-out',
		transition: '0.3s all ease-out',
		[`@media screen and (min-width:${grid.xs}px)`]: {
			maxWidth: 480,
			padding: spacing.small
		},
		[`@media screen and (max-width:${grid.xs-1}px)`]: {
			width: '100%'
		}
	},
	closing: {
		transform: 'translateX(-100%)',
		opacity: 0
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
	content: {
		[`@media screen and (max-width:${grid.xs-1}px)`]: {
			flexDirection: 'column',
		}
	},
	icon: {
		marginRight: spacing.small,
		width: iconSizes.small,
		height: iconSizes.small,
		[`@media screen and (min-width:${grid.xs}px)`]: {
			width: iconSizes.base,
			height: iconSizes.base
		},
		[`@media screen and (max-width:${grid.xs-1}px)`]: {
			display: 'none'
		}
	},
	action: {
		marginTop: spacing.xTiny,
		cursor: 'pointer',
		[`@media screen and (min-width:${grid.xs}px)`]: {
			margin: -spacing.small,
			marginLeft: spacing.small,
			padding: [0, spacing.small],
			borderRadius: [0, spacing.radius, spacing.radius, 0],
			borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
			transition: '0.3s all',
			'&:hover': {
				background: 'rgba(255, 255, 255, 0.15)'
			}
		},
		[`@media screen and (max-width:${grid.xs-1}px)`]: {
			alignSelf: 'flex-end'
		}
	},
	actionWrap: {
		height: '100%'
	},
	actionText: {
		textTransform: 'uppercase',
		whiteSpace: 'nowrap'
	}
};
