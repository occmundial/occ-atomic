import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';
import hexToRgba from 'hex-rgba';
import borderRadius from '../tokens/borderRadius.json';
import spacing from '../tokens/spacing.json';
import fontsNew from '../tokens/fonts.json';
import colorsNew from '../tokens/colors.json';

const { tag, text, icon } = colorsNew;

export const objectToFontValue = (font) =>
    `${font.fontWeight} ${font.fontSize}/${font.lineHeight} ${fonts.body}`;

const { grey900, grey100, textLink, bgWhite } = colors;

export default {
	tag: {
		boxSizing: 'border-box',
		lineHeight: '12px',
		textAlign: 'center',
		borderRadius: borderRadius['br-full'],
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block'
	},
	standard: {
		padding: [spacing['size-0'], spacing['size-2']],
	},
	medium: {
		padding: [spacing['size-2'], spacing['size-3']],
	},
	big: {
		minHeight: spacing['size-6'],
		padding: [spacing['size-2'], spacing['size-4']],
	},
	tagText: {
		boxSizing: 'border-box',
		font: objectToFontValue(fontsNew['heading-tag']),
		fontStyle: 'normal',
		fontStretch: 'normal',
		letterSpacing: 'normal',
		textAlign: 'center',
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block',
		paddingRight: props => (props.iconName ? spacing['size-1'] : 0)
	},
	default: {
		color: grey900,
		background: grey100
	},
	basic: {
		color: grey900,
		background: bgWhite
	},
	link: {
		color: textLink,
		background: hexToRgba(textLink, 10)
	},

	featured: {
		color: text.white.primary,
		background: tag.featured.bg,
		border: `1px solid ${tag.featured.border}`,
	},
	promo: {
		color: text.white.primary,
		background: tag.promo.bg,
		border: `1px solid ${tag.promo.border}`,
	},
	success: {
		color: text.success,
		background: tag.success.bg,
		border: `1px solid ${tag.success.border}`,
	  },
	  info: {
		color: text.indigo.primary,
		background: tag.info.bg,
		border: `1px solid ${tag.info.border}`,
	  },
	  warning: {
		color: text.warning,
		background: tag.warning.bg,
		border: `1px solid ${tag.warning.border}`,
	  },
	  error: {
		color: text.error,
		background: tag.error.bg,
		border: `1px solid ${tag.error.border}`,
	  },
	/* Icon with themes */
	icon: {
		display: 'inline-block',
		marginRight: spacing['size-1'],
		content: '""',
		paddingBottom: 0,
		left: 0,
		backgroundRepeat: 'no-repeat'
	},
	standardIcon: {
		width: spacing['size-3'],
		height: spacing['size-3']
	},
	bigIcon: {
		width: spacing['size-4'],
		height: spacing['size-4']
	},
	defaultIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([grey900])) : ''
	},
	basicIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([grey900])) : ''
	},
	linkIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([textLink])) : ''
	},
	featuredIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([icon.inverse.default])) : ''
	},
	promoIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([icon.inverse.default])) : ''
	},

	successIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([icon.success])) : ''
	},
	infoIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([icon.brand.bold])) : ''
	},
	warningIcon: {
		background: props =>
			props.iconName
				? icons.base(icons[props.iconName].icon([icon.warning]))
				: ''
	},
	errorIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([icon.error])) : ''
	}
};
