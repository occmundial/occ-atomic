import colors from '../subatomic/colors';
const { infoLight, infoText, info, white, grey900 } = colors;

export default {
	activator: {
		display: 'inline-block'
	},
	tooltip: {
		padding: '16px',
		borderRadius: '4px',
		fontSize: '14px',
		lineHeight: 1.5
	},
	info: {
		background: infoLight,
		color: infoText
	},
	dark: {
		background: grey900,
		color: white
	},
	light: {
		background: white,
		color: info
	},
	purple: {
		background: info,
		color: white
	}
};
