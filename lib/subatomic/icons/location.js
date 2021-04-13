import colors from '../colors';
import spacing from '../spacing';

export default {
	width: spacing.base,
	height: spacing.base,
	display: 'inline-block',
	icon: (color = [colors.grey900]) =>
		`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24">
            <path fill="${color[0]}" d="M19.24,2.6A1.71,1.71,0,0,1,21,3l0,0,0,0a1.72,1.72,0,0,1,.34,1.73h0L15.07,20.41A1.67,1.67,0,0,1,13.5,21.5h-.05a1.67,1.67,0,0,1-1.58-1.17v0L10.17,14a1,1,0,0,0-.67-.68L3.75,11.77a1.63,1.63,0,0,1-.68-.37,2,2,0,0,1-.41-.54l0,0v0a1.65,1.65,0,0,1,1-2.18l15.6-6Z"/>
        </svg>`
};
