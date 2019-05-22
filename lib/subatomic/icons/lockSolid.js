import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M12,3c2.8,0,5,2.2,5,5v2h2v9c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2v-9h2V8C7,5.2,9.2,3,12,3z M12,5
        	c-1.7,0-3,1.3-3,3v2h6V8C15,6.3,13.7,5,12,5z M12,14c-0.6,0-1,0.4-1,1v1c0,0.6,0.4,1,1,1s1-0.4,1-1v-1C13,14.4,12.6,14,12,14z"/>
        </svg>`
    )
};
