import colors from '../../tokens/colors.json';
import fonts from '../../tokens/fonts.json';
import spacing from '../../tokens/spacing.json';
import borderRadius from '../../tokens/borderRadius.json';
import shadows from '../../tokens/shadows.json';
import grid from '../../subatomic/grid';
import { parseFontValue } from '../../Text/styles';

export default {
	'@keyframes slideToasterIn': {
		from: { transform: 'translateX(-100%)', opacity: 0 },
		to: { transform: 'translateX(0)', opacity: 1 }
	},
	toast: {
		borderRadius: borderRadius['br-xs'],
		boxShadow: shadows['elevation-elevation-5'],
		padding: spacing['size-3'],
		pointerEvents: 'auto',
		zIndex: 1001,
		animation: 'slideToasterIn 0.3s ease-out',
		transition: '0.3s all ease-out',
    outlineOffset: '-1px',
		[`@media screen and (min-width:${grid.xs}px)`]: {
			maxWidth: 480,
			minWidth: 400,
			padding: spacing['size-4']
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
    backgroundColor: colors.alert.success.bg,
		outline: `1px solid ${colors.alert.success.border}`,
	},
	error: {
    backgroundColor: colors.alert.error.bg,
		outline: `1px solid ${colors.alert.error.border}`,
	},
	warning: {
    backgroundColor: colors.alert.warning.bg,
		outline: `1px solid ${colors.alert.warning.border}`,
	},
	info: {
    backgroundColor: colors.alert.info.bg,
		outline: `1px solid ${colors.alert.info.border}`,
	},
	promote: {
    backgroundColor: colors.alert.neutral.bg,
		outline: `1px solid ${colors.alert.neutral.border}`,
	},
	textInfo: {
    color: colors.text.indigo.primary,
	},
  textWarning: {
    color: colors.text.warning,
	},
  textSuccess: {
    color: colors.text.success,
	},
  textError: {
    color: colors.text.error,
	},
  textPromote: {
    color: colors.text.white.primary,
	},
	title: {
    font: parseFontValue(fonts['alert-default']),
		margin: 0,
	},
	description: {
    font: parseFontValue(fonts['alert-description']),
		margin: [spacing['size-1'], 0, 0],
	},
	content: {
		flexDirection: 'column',
		[`@media screen and (min-width:${grid.xs}px)`]: {
			flexDirection: 'row',
		}
	},
	icon: {
		marginRight: spacing['size-2'],
		alignSelf: 'start'
	},
	actionWrap: {
		height: '100%'
	},
	actionText: {
    font: parseFontValue(fonts['link-small-strong']),
		whiteSpace: 'nowrap',
    textDecoration: 'underline',
    cursor: 'pointer',
		alignSelf: 'start',
		margin: [spacing['size-2'], 0, 0],
		[`@media screen and (min-width:${grid.xs}px)`]: {
			margin: [0, 0, 0, spacing['size-4']],
			alignSelf: 'center',
		},
	},
	closeIcon: {
		marginLeft: spacing['size-4'],
		alignSelf: 'center',
	},
};
