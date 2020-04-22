import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';
const { gutter, tiny, small, base, xTiny } = spacing;
const { primLighter, grey50, grey200, bgWhite,textLink} = colors;
export default {
	block: {
		background: bgWhite,
		border: `1px solid ${grey200}`,
		borderRadius: xTiny,
		overflow: 'hidden'
	},
	group: {
		padding: [small, small, xTiny]
	},
	item: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: [tiny, small],
		transition: '0.1s all',
		cursor: 'pointer',
		position: 'relative',
		'&:hover': {
			background: grey50
		}
	},
	right: {
		float: 'right',
		transition: '0.1s all'
	},
	onFocus: {
		background: primLighter,
		'&:hover': {
			background: primLighter
		}
	},
	icon: {
		marginRight: tiny,
		position: 'absolute',
		top: gutter
	},
	iconText: {
		display: 'inline-block',
		marginLeft: base
	},
	extraText:{
		fontWeight: 600,
		color: textLink,
		marginLeft: tiny
	}
};
