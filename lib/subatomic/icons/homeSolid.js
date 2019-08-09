import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M20.8,11.5V21c0,0.7-0.6,1.3-1.3,1.3H15c-0.7,0-1.3-0.6-1.3-1.3v-3.6c0-1-0.8-1.8-1.8-1.8s-1.8,0.8-1.8,1.8V21
        	c0,0.7-0.6,1.3-1.3,1.3H4.5c-0.7,0-1.3-0.6-1.3-1.3v-9.5l-0.6,0.5l-1.3-1.5l10-8.8c0.4-0.3,0.9-0.3,1.3,0l10,8.8l-1.3,1.5L20.8,11.5
        	z"/>
        </svg>`
    )
};
