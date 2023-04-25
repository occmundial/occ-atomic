import colors from '../colors';
import spacing from '../spacing';

export default {
	width: spacing.base,
	height: spacing.base,
	display: 'inline-block',
	icon: (color = [colors.grey900]) =>
		`<svg viewBox="0 0 24 24" fill="${color[0]}" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.593 6.594h1.93v2.25h-4.49c-.72 0-1.305-.585-1.305-1.305V3h2.25v2.012A9.225 9.225 0 0 1 21.225 12h-2.25A6.975 6.975 0 0 0 7.593 6.594zm12.68 9.867V21h-2.25v-2.012A9.225 9.225 0 0 1 2.775 12h2.25a6.975 6.975 0 0 0 11.382 5.406h-1.931v-2.25h4.49c.721 0 1.305.585 1.305 1.305z" fill="${color[0]}"/>
        </svg>`
};
