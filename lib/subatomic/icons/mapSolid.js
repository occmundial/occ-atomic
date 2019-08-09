import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M9.7,8.5c0,1,0.8,1.9,1.8,1.9c1,0,1.9-0.9,1.9-1.9c0-1-0.8-1.8-1.9-1.8C10.5,6.7,9.7,7.5,9.7,8.5z M4.3,8.4
        	c0-4,3.2-7.2,7.2-7.2c4,0,7.3,3.2,7.3,7.2c0,1.8-0.7,3.4-2.2,5.5c-0.2,0.3-0.3,0.4-0.6,0.9c-0.1,0.2-0.3,0.4-0.4,0.6
        	c-1.4,2-2.5,4.4-3.1,7c-0.1,0.3-0.3,0.6-0.7,0.7c-0.5,0.1-1-0.2-1.2-0.7c-0.7-2.7-1.8-5-3.2-7L7,14.9c-1.3-1.8-1.7-2.5-2.1-3.4
        	C4.5,10.6,4.3,9.6,4.3,8.4z"/>
        </svg>`
    )
};
