import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';
import spacing from '../subatomic/spacing';

const {
	white,
	ink,
	info,
	success,
	warning,
	error,
	grey900,
	bgWhite,
	grey100
} = colors;
const { xTiny, tiny, small, gutter } = spacing;
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
		color: ink,
		background: grey100
	},
	info: {
		color: white,
		backgroundColor: info
	},
	success: {
		color: white,
		background: success
	},
	warning: {
		color: ink,
		background: warning
	},
	error: {
		color: white,
		background: error
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
			props.iconName ? icons.base(icons[props.iconName].icon([bgWhite])) : ''
	},
	successIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([bgWhite])) : ''
	},
	warningIcon: {
		background: props =>
			props.iconName ? icons.base(icons[props.iconName].icon([grey900])) : ''
	},
	errorIcon: {
		background: props =>
			props.iconName
				? icons.base(icons[props.iconName].icon([colors.bgWhite]))
				: ''
	}
};
