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
	standard: {
		boxSizing: 'border-box',
		lineHeight: '12px',
		textAlign: 'center',
		borderRadius: small,
		padding: [1,tiny,2,tiny],
		height: small,
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block',
	},
	medium: {
		boxSizing: 'border-box',
		lineHeight: '12px',
		textAlign: 'center',
		borderRadius: small,
		padding: [8,12],
		height: 32,
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block',
	},	big: {
		boxSizing: 'border-box',
		lineHeight: '12px',
		textAlign: 'center',
		borderRadius: small,
		padding: [8,12],
		height: 32,
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block',
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
		background: hexToRgba(textLink, 10)
	},
	/* Icon with themes */
	standardIcon: {
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
	mediumIcon: {
		display: 'inline-block',
		marginRight: xTiny,
		content: '""',
		width: 17,
		height: 18,
		paddingBottom: 0,
		position: 'relative',
		top: 0,
		left: 0,
		backgroundRepeat: 'no-repeat'
	},
	bigIcon: {
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
			props.iconName ? icons.base(icons[props.iconName].icon([textLink])) : ''
	}
};
