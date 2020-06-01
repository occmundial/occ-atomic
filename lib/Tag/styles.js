import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';
import spacing from '../subatomic/spacing';
import iconSizes from '../subatomic/iconSizes';
import hexToRgba from 'hex-rgba';
const {
	info,
	infoText,
	success,
	successText,
	warning,
	warningText,
	error,
	errorText,
	grey900,
	grey100,
	textLink
} = colors;
const { xTiny, tiny, small, gutter, medium } = spacing;
const { small: smallIcon } = iconSizes;

const paddingStandardTag = [2, tiny],
	paddingMediumTag = [tiny, gutter],
	paddingBigTag = [tiny, small],
	tagTextLineHeight = 1.4,
	tagTextStandardSize = 11,
	tagTextMediumSize = 15,
	tagTextBigSize = 17,
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
		fontWeight: '600',
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
	info: {
		color: infoText,
		backgroundColor: hexToRgba(info, 10)
	},
	success: {
		color: successText,
		background: hexToRgba(success, 10)
	},
	warning: {
		color: warningText,
		background: hexToRgba(warning, 10)
	},
	error: {
		color: errorText,
		background: hexToRgba(error, 10)
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
		position: 'relative',
		top: 0,
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
	infoIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([info])) : ''
	},
	successIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([success])) : ''
	},
	warningIcon: {
		background: props =>
			props.iconName
				? icons.base(icons[props.iconName].icon([warningText]))
				: ''
	},
	errorIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([error])) : ''
	},
	linkIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([textLink])) : ''
	}
};
