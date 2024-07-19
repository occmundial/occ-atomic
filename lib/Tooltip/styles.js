import colors from '../subatomic/colors';
import newColors from '../tokens/colors.json'
import fonts from '../tokens/fonts.json';
import spacing from '../tokens/spacing.json';
import borderRadius from '../tokens/borderRadius.json';

import { parseFontValue } from '../Text/styles';

const { infoLight, infoText, info, white } = colors;

export default {
	activator: {
		display: 'inline-block'
	},
	tooltip: {
		padding: [spacing['size-2'], spacing['size-3']],
		borderRadius: borderRadius['br-xs'],
		display: 'flex',
		alignItems: 'center',
		gap: spacing['size-1']
	},
	bottom: {
		position: 'inherit',
		bottom: '100%',
		left: '50%',
		transform: 'translateY(1px)'
	},
	bottomStart: {
		position: 'inherit',
		bottom: '100%',
		transform: 'translateY(1px)'
	},
	bottomEnd: {
		position: 'inherit',
		transform: 'translateY(1px)',
		bottom: '100%',
		left: '50%'
	},
	right: {
		position: 'inherit',
		bottom: '50%',
		transform: 'translateX(calc(-50% - 3.5px)) translateY(50%) rotate(-90deg)',
		left: '0%'
	},
	top: {
		position: 'inherit',
		marginTop: '-1px',
		left: '50%',
		transform: 'rotate(180deg)'
	},
	topStart: {
		position: 'inherit',
		marginTop: '-1px',
		transform: 'rotate(180deg)'
	},
	topEnd: {
		position: 'inherit',
		marginTop: '-1px',
		right: '0%',
		transform: 'rotate(180deg)'
	},
	left: {
		position: 'inherit',
		bottom: '50%',
		transform: 'translateX(calc(50% + 3.5px)) translateY(50%) rotate(90deg)',
		right: '0%'
	},
	info: {
		background: infoLight,
		color: infoText
	},
	dark: {
		background: newColors.bg.neutral,
		color: white,
		boxShadow: `inset 0 0 0 1px ${newColors.border.inverse.subtle}`
	},
	light: {
	background: newColors.bg.surface,
		color: info,
		'&:after': {
			boxShadow: `inset -2px -2px 0 -1px ${newColors.border.default.subtle}`
		},
		boxShadow: `inset 0 0 0 1px ${newColors.border.default.subtle}`

	},
	purple: {
		background: info,
		color: white
	},
	text: {
		font: parseFontValue(fonts['body-x-small']),
		margin: 0
	}
};
