import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <polygon fill="${color[0]}" points="12.7,12.7 11.3,11.3 18.6,4 16,4 16,2 22,2 22,8 20,8 20,5.4 "/>
        <path fill="${color[0]}" d="M17,11.1V19H5V7h8l2-2H4.5C3.7,5,3,5.7,3,6.5v13C3,20.3,3.7,21,4.5,21h13c0.8,0,1.5-0.7,1.5-1.5V9L17,11.1z"/>
        </svg>`
    )
};
