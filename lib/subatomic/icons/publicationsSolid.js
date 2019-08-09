import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M20.2,21.3H3.7c-0.8,0-1.5-0.7-1.5-1.5V10c0-0.8,0.7-1.5,1.5-1.5h16.5c0.8,0,1.5,0.7,1.5,1.5v9.7
        	C21.7,20.5,21,21.2,20.2,21.3C20.2,21.2,20.2,21.2,20.2,21.3z"/>
        <path fill="${color[0]}" d="M20,7.1H4c0-0.8,0.7-1.5,1.5-1.5h13C19.3,5.6,20,6.2,20,7.1z"/>
        <path fill="${color[0]}" d="M18,4H6c0-0.8,0.7-1.5,1.5-1.5h9.1C17.4,2.5,18,3.2,18,4z"/>
        </svg>`
    )
};
