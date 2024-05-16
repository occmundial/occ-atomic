import spacing from '../tokens/spacing.json';
import colors from '../tokens/colors.json';
import shadows from '../tokens/shadows.json';
import fonts from '../tokens/fonts.json';
import borderRadius from '../tokens/borderRadius.json';
import { parseFontValue } from '../Text/styles';

export default {
	block: {
		background: colors['text-field'].bg.default,
		border: `1px solid ${colors['text-field'].border.default}`,
		borderRadius: borderRadius['br-xs'],
		overflow: 'hidden',
		padding: spacing['size-2'],
		boxShadow: shadows['elevation-elevation-4']
	},
	text: {
		margin: 0
	},
	group: {
		padding: [spacing['size-2'], spacing['size-4'], 0],
		display: 'inline-block'
	},
	groupText: {
		font: parseFontValue(fonts['text-field-label'])
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
			'& > $rightText': {
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
		marginLeft: spacing['size-4']
	},
	rightText: {
		font: parseFontValue(fonts['text-field-label']),
		color: colors.text.corp.secondary
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
	mainText: {
		display: 'inline-block',
		font: parseFontValue(fonts['text-field-placeholder']),
		color: colors.text.corp.primary
	},
	corpDisabled: {
		color: colors.text.corp.disabled
	},
	extraText:{
		marginLeft: spacing['size-1'],
		display: 'inline-block',
		font: parseFontValue(fonts['heading-tag']),
		color: colors.text.indigo.primary
	},
	highlighted: {
		background: colors.bg.action.secondary.default,
		font: parseFontValue(fonts['text-field-placeholder'])
	},
	itemContainer: {
		display: 'flex',
		alignItems: 'center'
	}
};
