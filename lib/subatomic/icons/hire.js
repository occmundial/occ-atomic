import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M16.6,12.2H7.5c-2.4,0-4.3,1.9-4.3,4.3v5.8h17.6v-5.9C20.8,14.1,19,12.2,16.6,12.2z M15.5,15.8l-4.1,4.1
        	c0,0.1,0,0.1-0.2,0.1c-0.1,0.1-0.3,0.1-0.5,0.1h-0.1c-0.2,0-0.3-0.1-0.4-0.2l-1.7-1.7c-0.3-0.3-0.3-0.9,0-1.2s0.9-0.3,1.2,0l1.2,1.1
        	l3.4-3.4c0.3-0.3,0.9-0.3,1.2,0C15.8,15.1,15.8,15.5,15.5,15.8z"/>
        <path fill="${color[0]}" d="M12,11.5c2.7,0,4.8-2.2,4.8-4.8S14.7,1.8,12,1.8S7.2,3.9,7.2,6.6S9.3,11.5,12,11.5z"/>
        </svg>`
    )
};
