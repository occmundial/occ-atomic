import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M21,22c0-0.8-0.7-1.5-1.5-1.5h-0.7v-17c0-0.8-0.7-1.5-1.5-1.5H6.7C5.9,2,5.2,2.7,5.2,3.5v17H4.5
        	C3.7,20.5,3,21.2,3,22H21z M17.3,11.4H6.7V8.2h10.6V11.4z M17.3,3.5v3.2H6.7V3.5C6.7,3.5,17.3,3.5,17.3,3.5z M6.7,12.9h10.6v7.6h-3
        	V16H9.8v4.5H6.7V12.9z"/>
        </svg>`
    )
};
