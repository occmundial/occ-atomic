import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M6.5,6h13.7c0.1,0,0.2,0,0.4,0c0.8,0.2,1.3,1,1.1,1.8l-1.5,6C20,14.5,19.4,15,18.7,15H7.8
        	c-0.7,0-1.3-0.5-1.5-1.1l-2-8.1C4.3,5.3,3.9,5,3.4,5H2V3h1.4C4.8,3,6,3.9,6.3,5.3L6.5,6z"/>
        <circle fill="${color[0]}" cx="8.5" cy="18.5" r="2.5"/>
        <circle fill="${color[0]}" cx="17.5" cy="18.5" r="2.5"/>
        </svg>`
    )
};
