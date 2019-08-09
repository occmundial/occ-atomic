import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M7.3,5V4.7C7.3,3.2,8.5,2,10,2l0,0h4c1.5,0,2.8,1.2,2.8,2.7c0,0,0,0,0,0V5H21v1.5h-1.5v12.8
        	c0,1.5-1.2,2.8-2.8,2.8H7.3c-1.5,0-2.8-1.2-2.8-2.8V6.5H3V5H7.3z M8.8,5h6.5V4.7c0-0.7-0.6-1.3-1.3-1.3h-4C9.3,3.5,8.8,4,8.8,4.7V5z
        	 M18,6.5H6v12.8c0,0.7,0.6,1.3,1.3,1.3h9.5c0.7,0,1.3-0.6,1.3-1.3V6.5z"/>
        <rect x="9" y="10" fill="${color[0]}" width="1.5" height="7"/>
        <rect x="13.5" y="10" fill="${color[0]}" width="1.5" height="7"/>
        </svg>`
    )
};
