import colors from '../colors';
import spacing from '../spacing';

export default {
	width: spacing.base,
	height: spacing.base,
	display: 'inline-block',
	icon: (color = [colors.grey900]) =>
		`<svg viewBox="0 0 24 24" fill="${color[0]}" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.941 3v4.594c0 .65.527 1.178 1.178 1.178h4.546v-2h-2.32A7 7 0 0 1 19 12h2A9 9 0 0 0 5.941 5.345V3h-2zM20.06 16.406V21h-2v-2.345A9 9 0 0 1 3 12h2a7 7 0 0 0 11.655 5.229h-2.32v-2h4.546c.65 0 1.178.527 1.178 1.177z" fill="${color[0]}"/>
        </svg>`
};
