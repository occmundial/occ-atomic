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
		position: 'relative',
		'&:hover': {
			background: grey50
		}
	},
	itemPointer: {
		cursor: 'pointer'
	},
	right: {
		float: 'right',
		transition: '0.1s all',
		marginLeft: small
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
		marginLeft: tiny
	},
	extraTextColor:{
		color: textLink
	}
};
