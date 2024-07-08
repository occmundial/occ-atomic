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
  linkInfo: {
    color: colors.text.indigo.primary,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(${colors.link.brand.bg.hover}, ${colors.link.brand.bg.hover})`,
    '&:active': {
      background: `linear-gradient(${colors.link.brand.bg.active}, ${colors.link.brand.bg.active})`
    },
  },
  linkWarning: {
    color: colors.text.warning,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(${colors.link.warning.bg.hover}, ${colors.link.warning.bg.hover})`,
    '&:active': {
      background: `linear-gradient(${colors.link.warning.bg.active}, ${colors.link.warning.bg.active})`
    },
  },
  linkSuccess: {
    color: colors.text.success,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(${colors.link.success.bg.hover}, ${colors.link.success.bg.hover})`,
    '&:active': {
      background: `linear-gradient(${colors.link.success.bg.active}, ${colors.link.success.bg.active})`
    },
  },
  linkError: {
    color: colors.text.error,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(${colors.link.error.bg.hover}, ${colors.link.error.bg.hover})`,
    '&:active': {
      background: `linear-gradient(${colors.link.error.bg.active}, ${colors.link.error.bg.active})`
    },
  },
  linkPromote: {
    color: colors.text.white.primary,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(${colors.link.white.bg.hover}, ${colors.link.white.bg.hover})`,
    '&:active': {
      background: `linear-gradient(${colors.link.white.bg.active}, ${colors.link.white.bg.active})`
    },
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
    transition: 'all ease-out 150ms',
    backgroundSize: '0%',
    '&:hover': {
      backgroundSize: '100%',
      cursor: 'pointer',
    },
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
