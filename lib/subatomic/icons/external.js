import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<polygon fill="${color[0]}" points="20.3,4.8 12.5,12.5 11.5,11.5 19.2,3.8 16,3.8 16,2.3 21.8,2.3 21.8,8 20.3,8 "/>
		<path fill="${color[0]}" d="M17.5,11.1L19,9.6V19c0,0.8-0.7,1.5-1.5,1.5h-13C3.7,20.5,3,19.9,3,19V6.5C3,5.7,3.7,5,4.5,5h9.9L13,6.5H4.5V19
			h13C17.5,19,17.5,11,17.5,11.1z"/>
		</svg>`
    )
};
