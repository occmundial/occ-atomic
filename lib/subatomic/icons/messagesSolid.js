import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M8,2.3c-3.3,0-6,2.7-6,6v4.1c0,3.1,2.5,5.5,5.5,5.5c0.5,0,0.9,0.4,0.9,0.9l0.1,2.6c0,0.4,0.3,0.8,0.7,0.8
        	c0.2,0,0.4-0.1,0.6-0.2l3.2-3.8c0.2-0.2,0.5-0.3,0.8-0.3H16c3.3,0,6-2.7,6-6V8.3c0-3.3-2.7-6-6-6C16,2.3,8,2.3,8,2.3z"/>
        </svg>`
    )
};
