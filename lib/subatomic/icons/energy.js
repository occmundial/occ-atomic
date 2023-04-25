import colors from '../colors';
import spacing from '../spacing';

export default {
	width: spacing.base,
	height: spacing.base,
	display: 'inline-block',
	icon: (color = [colors.grey900]) =>
		`<svg viewBox="0 0 24 24" fill="${color[0]}" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.353 2.766A1 1 0 0 1 8.325 2h5.89a1 1 0 0 1 .979 1.204l-1 4.794H18a1 1 0 0 1 .834 1.552L10.88 21.552a1 1 0 0 1-1.833-.574l.164-7.336H6a1 1 0 0 1-.972-1.234l2.325-9.642zM9.113 4 7.27 11.642h2.963a1 1 0 0 1 1 1.023l-.11 4.9 5.015-7.567h-3.175a1 1 0 0 1-.978-1.204l1-4.794H9.113z" fill="${color[0]}"/>
        </svg>`
};
