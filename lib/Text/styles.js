import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import grid from '../subatomic/grid';
import spacing from '../subatomic/spacing';

export default {
	text: {
		letterSpacing: 0,
		fontFamily: fonts.body,
		fontWeight: 300,
		fontStyle: 'normal',
		margin: 0
	},
	// Sizes
	hero: {
		fontSize: 32,
		lineHeight: 1.1,
		fontWeight: 400,
		letterSpacing: -0.64,
		[`@media screen and (min-width:${grid.sm}px)`]: {
			fontSize: 48,
			letterSpacing: -0.96
		}
	},
	headline: {
		fontSize: 28,
		lineHeight: 1.1,
		fontWeight: 400,
		[`@media screen and (min-width:${grid.sm}px)`]: {
			fontSize: 40
		}
	},
	heading: {
		fontSize: 24,
		lineHeight: 1.1,
		fontWeight: 400
	},
	subheading: {
		fontSize: 18,
		lineHeight: 1.1,
		fontWeight: 400
	},
	extraLarge: {
		fontSize: 20,
		lineHeight: 1.5
	},
	large: {
		fontSize: 18,
		lineHeight: 1.5
	},
	standard: {
		fontSize: 16,
		lineHeight: 1.5
	},
	small: {
		fontSize: 14,
		lineHeight: 1.5
	},
	micro: {
		fontSize: 12,
		lineHeight: 1.5
	},
	// Weight
	strong: {
		fontWeight: 400
	},
	// Colors
	primary: {
		color: colors.prim
	},
	secondary: {
		color: colors.sec
	},
	success: {
		color: colors.successText
	},
	error: {
		color: colors.errorText
	},
	warning: {
		color: colors.warningText
	},
	info: {
		color: colors.infoText
	},
	disabled: {
		color: colors.inkLightest
	},
	white: {
		color: colors.white
	},
	link: {
		color: colors.textLink
	},
	// Emphasis
	highEmphasis: {
		color: colors.ink
	},
	midEmphasis: {
		color: colors.inkLight
	},
	lowEmphasis: {
		color: colors.inkLighter
	},
	// Align
	left: {
		textAlign: 'left'
	},
	center: {
		textAlign: 'center'
	},
	right: {
		textAlign: 'right'
	},
	// Spacing
	topXTiny: {
		marginTop: spacing.xTiny
	},
	topTiny: {
		marginTop: spacing.tiny
	},
	topSmall: {
		marginTop: spacing.small
	},
	topBase: {
		marginTop: spacing.base
	},
	topMedium: {
		marginTop: spacing.medium
	},
	topLarge: {
		marginTop: spacing.large
	},
	topXLarge: {
		marginTop: spacing.xLarge
	},
	bottomXTiny: {
		marginBottom: spacing.xTiny
	},
	bottomTiny: {
		marginBottom: spacing.tiny
	},
	bottomSmall: {
		marginBottom: spacing.small
	},
	bottomBase: {
		marginBottom: spacing.base
	},
	bottomMedium: {
		marginBottom: spacing.medium
	},
	bottomLarge: {
		marginBottom: spacing.large
	},
	bottomXLarge: {
		marginBottom: spacing.xLarge
	},
	titleCase: {
		textTransform: 'capitalize'
	}
};
