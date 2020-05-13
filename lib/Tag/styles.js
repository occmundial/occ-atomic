import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';
import spacing from '../subatomic/spacing';
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
const { xTiny, tiny, small, gutter } = spacing;
const iconHeight = 13;

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
		padding: [1, tiny, 2, tiny],
		height: small
	},
	medium: {
		padding: [6, 12, 8, 12],
		height: 32
	},
	big: {
		padding: [7, 16, 9, 16],
		height: 40
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
		paddingRight: props => (props.iconName ? xTiny : 0)
	},
	standardTagText: {
		lineHeight: `${iconHeight}px`,
		fontSize: 10
	},
	mediumTagText: {
		lineHeight: 1.6,
		fontSize: 15
	},
	bigTagText: {
		lineHeight: 1.41,
		fontSize: 17
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
		height: iconHeight
	},
	mediumIcon: {
		width: 17,
		height: 19
	},
	bigIcon: {
		width: 18,
		height: 20
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
