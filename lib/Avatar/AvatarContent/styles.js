import fonts from '../../subatomic/fonts';
import icons from '../../subatomic/icons';
import colors from '../../subatomic/colors';

export default {
	wrap: {
		position: 'relative',
		width: '100%',
		height: '100%'
	},
	cont: {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		borderRadius: '50%',
		overflow: 'hidden'
	},
	m: {
		background: icons.base(icons.male.icon())
	},
	f: {
		background: icons.base(icons.female.icon())
	},
	capital: {
		fontFamily: fonts.body,
		fontSize: '57px',
		lineHeight: '72px',
		fontWeight: '600',
		background: colors.grey100,
		color: colors.grey200,
		textAlign: 'center',
		letterSpacing: -2,
		fontStyle: 'normal'
	}
};
