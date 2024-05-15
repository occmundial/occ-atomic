import spacing from '../tokens/spacing.json';
import colors from '../tokens/colors.json';
import shadows from '../tokens/shadows.json';
import borderRadius from '../tokens/borderRadius.json';

export default {
	block: {
		background: colors['text-field'].bg.default,
		border: `1px solid ${colors['text-field'].border.default}`,
		borderRadius: borderRadius['br-xs'],
		overflow: 'hidden',
		padding: [spacing['size-2']],
		boxShadow: shadows['elevation-elevation-4']
	},
	group: {
		padding: [spacing['size-2'], spacing['size-4'], 0]
	},
	item: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: [spacing['size-3'], spacing['size-4']],
		transition: '0.1s all',
		borderRadius: borderRadius['br-xs'],
		position: 'relative',
		'&:hover': {
			background: colors.dropdown.bg.hover
		},
    '&:active, &:focus': {
			background: colors.dropdown.bg.active,
			'& > $right': {
				color: colors.text.corp.primary
			}
		}
	},
	itemPointer: {
		cursor: 'pointer'
	},
	disabled: {
		pointerEvents: 'none'
	},
	right: {
		float: 'right',
		transition: '0.1s all',
		marginLeft: spacing['size-4']
	},
	onFocus: {
		background: colors.dropdown.bg.active,
		'&:hover': {
			background: colors.dropdown.bg.active,
		}
	},
	icon: {
		marginRight: spacing['size-2'],
	},
	iconText: {
		display: 'inline-block',
	},
	extraText:{
		marginLeft: spacing['size-1']
	},
	highlighted: {
		background: colors.bg.action.secondary.default
	},
	itemContainer: {
		display: 'flex',
		alignItems: 'center'
	}
};
