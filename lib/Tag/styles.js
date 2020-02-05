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
	link,
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
		paddingRight: tiny,
		paddingLeft: tiny,
		height: small,
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block',
		paddingTop: 1,
		paddingBottom: 2
	},
	tagText: {
		boxSizing: 'border-box',
		fontFamily: fonts.body,
		fontWeight: '600',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: `${iconHeight}px`,
		letterSpacing: 'normal',
		textAlign: 'center',
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block',
		fontSize: 10,
		paddingRight: props => (props.iconName ? xTiny : 0)
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
		background: hexToRgba(link, 10)
	},
	/* Icon with themes */
	icon: {
		display: 'inline-block',
		marginRight: xTiny,
		content: '""',
		width: gutter,
		height: iconHeight,
		paddingBottom: 0,
		position: 'relative',
		top: 0,
		left: 0,
		backgroundRepeat: 'no-repeat'
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
			props.iconName ? icons.base(icons[props.iconName].icon([link])) : ''
	}
};
