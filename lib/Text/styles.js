import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import grid from '../subatomic/grid';
import newFonts from '../tokens/fonts.json';
import newColors from '../tokens/colors.json';
import newSpacing from '../tokens/spacing.json';

export default {
	text: {
		letterSpacing: 0,
		fontFamily: fonts.body,
		fontWeight: 300,
		fontStyle: 'normal',
		margin: 0
	},
	// Sizes
    display: {
        font: newFonts['mobile-display-clean-m'],
        letterSpacing: '0.02em',
        [`@media screen and (min-width:${grid.sm}px)`]: {
          letterSpacing: '0.02em',
          font: newFonts['display-display-clean']
        }
    },    
    h1: {
        font: newFonts['mobile-h1-m'],
        letterSpacing: '0.02em',
        [`@media screen and (min-width:${grid.sm}px)`]: {
          letterSpacing: '0.02em',
          font: newFonts['heading-h1']
        }
    },
    h2: {
        font: newFonts['mobile-h2-m'],
        [`@media screen and (min-width:${grid.sm}px)`]: {
          font: newFonts['heading-h2']
        }
    },
    h3: {
        font: newFonts['mobile-h3-m'],
        [`@media screen and (min-width:${grid.sm}px)`]: {
          font: newFonts['heading-h3']
        }
    },
    h4: {
        font: newFonts['mobile-h4-m'],
        [`@media screen and (min-width:${grid.sm}px)`]: {
            font: newFonts['heading-h4']
        }
    },
    h5: {
        font: newFonts['heading-h5']
    },
    tag: {
        font: newFonts['heading-tag']
    },
    bodyXLarge: {
        font: newFonts['body-x-large']
    },
    bodyLargeStrong: {
        font: newFonts['body-large-strong']
    },
    bodyLarge: {
        font: newFonts['body-large']
    },
    bodyRegularStrong: {
        font: newFonts['body-regular-strong']
    },
    bodyRegular: {
        font: newFonts['body-regular']
    },
    bodySmallStrong: {
        font: newFonts['body-small-strong']
    },
    bodySmall: {
        font: newFonts['body-small']
    },
    bodyXSmall: {
        font: newFonts['body-x-small']
    },
	// Weight
	strong: {
		fontWeight: 400
	},
	// Colors
    indigoPrimary: {
        color: newColors.text.indigo.primary
    },
    indigoSecondary: {
        color: newColors.text.indigo.secondary
    },
    pinkPrimary: {
        color: newColors.text.pink.primary
    },
	success: {
        color: newColors.text.success
	},
    warning: {
        color: newColors.text.warning
	},
	error: {
        color: newColors.text.error
	},
	info: {
		color: colors.infoText
	},
	disabled: {
		color: colors.inkLightest
	},
    whiteSecondary: {
        color: newColors.text.white.secondary
    },
    whitePrimary: {
        color: newColors.text.white.primary
    },
	link: {
		color: colors.textLink
	},
	// Emphasis
    corpPrimary: {
        color: newColors.text.corp.primary
    },
    corpSecondary: {
        color: newColors.text.corp.secondary
    },
    corpDisabled: {
        color: newColors.text.corp.disabled
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
    top0: {
        marginTop: newSpacing['size-0']
    },
    top1: {
        marginTop: newSpacing['size-1']
    },
    top2: {
        marginTop: newSpacing['size-2']
    },
    top3: {
        marginTop: newSpacing['size-3']
    },
    top4: {
        marginTop: newSpacing['size-4']
    },
    top5: {
        marginTop: newSpacing['size-5']
    },
    top6: {
        marginTop: newSpacing['size-6']
    },
    top7: {
        marginTop: newSpacing['size-7']
    },
    top8: {
        marginTop: newSpacing['size-8']
    },
    top9: {
        marginTop: newSpacing['size-9']
    },
    top10: {
        marginTop: newSpacing['size-10']
    },
    top11: {
        marginTop: newSpacing['size-11']
    },
    top12: {
        marginTop: newSpacing['size-12']
    },
    bottom0: {
        marginBottom: newSpacing['size-0']
    },
    bottom1: {
        marginBottom: newSpacing['size-1']
    },
    bottom2: {
        marginBottom: newSpacing['size-2']
    },
    bottom3: {
        marginBottom: newSpacing['size-3']
    },
    bottom4: {
        marginBottom: newSpacing['size-4']
    },
    bottom5: {
        marginBottom: newSpacing['size-5']
    },
    bottom6: {
        marginBottom: newSpacing['size-6']
    },
    bottom7: {
        marginBottom: newSpacing['size-7']
    },
    bottom8: {
        marginBottom: newSpacing['size-8']
    },
    bottom9: {
        marginBottom: newSpacing['size-9']
    },
    bottom10: {
        marginBottom: newSpacing['size-10']
    },
    bottom11: {
        marginBottom: newSpacing['size-11']
    },
    bottom12: {
        marginBottom: newSpacing['size-12']
    },
	titleCase: {
		textTransform: 'capitalize'
	}
};
