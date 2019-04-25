import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M10,15.5c3,0,5.5-2.5,5.5-5.5S13,4.5,10,4.5S4.5,7,4.5,10S7,15.5,10,15.5z M16.5,14.7l5.6,5.6L20.3,22l-5.6-5.6
        	c-1.3,1-2.9,1.5-4.7,1.5c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8C18,11.8,17.4,13.4,16.5,14.7z"/>
        </svg>`
    )
};
