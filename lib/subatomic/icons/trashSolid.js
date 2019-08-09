import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M7,5c0-1.7,1.3-3,3-3h4c1.7,0,3,1.3,3,3h4v2H3V5H7z M9,5h6c0-0.6-0.4-1-1-1h-4C9.4,4,9,4.4,9,5z"/>
		<path fill="${color[0]}" d="M19,8.5v10.8c0,1.5-1.2,2.8-2.8,2.8H7.8C6.2,22,5,20.8,5,19.3V8.5H19z M9,11.5V19h1.5v-7.5H9z M13.5,11.5V19H15
			v-7.5H13.5z"/>
		</svg>`
    )
};
