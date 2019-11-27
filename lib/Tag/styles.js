import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';
import spacing from '../subatomic/spacing';
import hexToRgba from 'hex-rgba';
const { info, success, warning, error, grey900, grey100 } = colors;
const { xTiny, tiny, small, gutter } = spacing;

export default {
	tag: {
		boxSizing: 'border-box',
		lineHeight: '12px',
		textAlign: 'center',
		borderRadius: small,
		paddingRight: props => (props.iconName ? gutter : tiny),
		paddingLeft: tiny,
		height: small,
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block'
	},
	tagText: {
		paddingTop: 2,
		boxSizing: 'border-box',
		fontFamily: fonts.body,
		fontWeight: '600',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: '12px',
		letterSpacing: 'normal',
		textAlign: 'center',
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block',
		fontSize: 10
	},
	default: {
		color: grey900,
		background: grey100
	},
	info: {
		color: info,
		backgroundColor: hexToRgba(info, 10)
	},
	success: {
		color: success,
		background: hexToRgba(success, 10)
	},
	warning: {
		color: warning,
		background: hexToRgba(warning, 10)
	},
	error: {
		color: error,
		background: hexToRgba(error, 10)
	},
	/* Icon with themes */
	icon: {
		display: 'inline-block',
		marginRight: xTiny,
		content: '""',
		width: gutter,
		height: gutter,
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
			props.iconName ? icons.base(icons[props.iconName].icon([warning])) : ''
	},
	errorIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([error])) : ''
	}
};
