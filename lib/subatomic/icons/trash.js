import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M7.2,5.2V4c0-1.5,1.2-2.8,2.8-2.8h4c1.5,0,2.8,1.2,2.8,2.8v1.2H21v1.5h-1.2V20c0,1.5-1.2,2.8-2.8,2.8H7
			c-1.5,0-2.8-1.2-2.8-2.8V6.8H3V5.2H7.2z M8.8,5.2h6.5V4c0-0.7-0.6-1.2-1.2-1.2h-4C9.3,2.8,8.8,3.3,8.8,4V5.2z M18.2,6.8H5.8V20
			c0,0.7,0.6,1.2,1.2,1.2h10c0.7,0,1.2-0.6,1.2-1.2V6.8z"/>
		<rect x="9.2" y="10" fill="${color[0]}" width="1.5" height="8"/>
		<rect x="13.2" y="10" fill="${color[0]}" width="1.5" height="8"/>
		</svg>`
    )
};
