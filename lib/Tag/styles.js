import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';
import spacing from '../subatomic/spacing';
import iconSizes from '../subatomic/iconSizes';
import hexToRgba from 'hex-rgba';
const {
	infoLight,
	infoText,
	successLight,
	successText,
	warningLight,
	warningText,
	errorLight,
	errorText,
	grey900,
	grey100,
	textLink,
	bgWhite
} = colors;
const { xTiny, tiny, small, gutter, medium } = spacing;
const { small: smallIcon } = iconSizes;

const paddingStandardTag = [1, tiny, 3, tiny],
	paddingMediumTag = [5, gutter, 7, gutter],
	paddingBigTag = [tiny, small],
	tagTextLineHeight = 1.5,
	tagTextStandardSize = 10,
	tagTextMediumSize = 16,
	tagTextBigSize = 16,
	bigTagHeight = 40;

export default {
	tag: {
		boxSizing: 'border-box',
		lineHeight: '12px',
		textAlign: 'center',
		borderRadius: small,
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block'
	},
	standard: {
		padding: paddingStandardTag,
		height: small
	},
	medium: {
		padding: paddingMediumTag,
		height: medium
	},
	big: {
		padding: paddingBigTag,
		height: bigTagHeight,
		borderRadius: medium
	},
	tagText: {
		boxSizing: 'border-box',
		fontFamily: fonts.body,
		fontWeight: '400',
		fontStyle: 'normal',
		fontStretch: 'normal',
		letterSpacing: 'normal',
		textAlign: 'center',
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block',
		lineHeight: tagTextLineHeight,
		paddingRight: props => (props.iconName ? xTiny : 0)
	},
	standardTagText: {
		fontSize: tagTextStandardSize
	},
	mediumTagText: {
		fontSize: tagTextMediumSize
	},
	bigTagText: {
		fontSize: tagTextBigSize
	},
	default: {
		color: grey900,
		background: grey100
	},
	basic: {
		color: grey900,
		background: bgWhite
	},
	info: {
		color: infoText,
		backgroundColor: infoLight
	},
	success: {
		color: successText,
		background: successLight
	},
	warning: {
		color: warningText,
		background: warningLight
	},
	error: {
		color: errorText,
		background: errorLight
	},
	link: {
		color: textLink,
		background: hexToRgba(textLink, 10)
	},
	/* Icon with themes */
	icon: {
		display: 'inline-block',
		marginRight: xTiny,
		content: '""',
		paddingBottom: 0,
		left: 0,
		backgroundRepeat: 'no-repeat'
	},
	standardIcon: {
		width: gutter,
		height: gutter
	},
	mediumIcon: {
		width: smallIcon,
		height: smallIcon
	},
	bigIcon: {
		width: smallIcon,
		height: smallIcon
	},
	defaultIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([grey900])) : ''
	},
	basicIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([grey900])) : ''
	},
	infoIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([infoText])) : ''
	},
	successIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([successText])) : ''
	},
	warningIcon: {
		background: props =>
			props.iconName
				? icons.base(icons[props.iconName].icon([warningText]))
				: ''
	},
	errorIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([errorText])) : ''
	},
	linkIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([textLink])) : ''
	}
};
