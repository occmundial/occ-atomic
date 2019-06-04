import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M12.3,16.2l-0.4-0.4c-0.3-0.3-0.8-0.3-1,0l-2.6,2.6l0-15.7C8.3,2.3,7.9,2,7.5,2H7C6.6,2,6.2,2.3,6.2,2.7l0,15.7l-2.6-2.6
        	c-0.3-0.3-0.8-0.3-1,0l-0.4,0.4c-0.3,0.3-0.3,0.7,0,1l4.5,4.5C6.9,21.9,7,22,7.2,22c0,0,0,0,0,0c0.2,0,0.4-0.1,0.5-0.2l4.5-4.5
        	c0.1-0.1,0.2-0.3,0.2-0.5C12.5,16.6,12.4,16.4,12.3,16.2z"/>
        <path fill="${color[0]}" d="M11.7,7.8l0.4,0.4c0.3,0.3,0.8,0.3,1,0l2.6-2.6l0,15.7c0,0.4,0.3,0.7,0.7,0.7H17c0.4,0,0.8-0.3,0.8-0.7l0-15.7l2.6,2.6
        	c0.3,0.3,0.8,0.3,1,0l0.4-0.4c0.3-0.3,0.3-0.7,0-1l-4.5-4.5C17.1,2.1,17,2,16.8,2c0,0,0,0,0,0c-0.2,0-0.4,0.1-0.5,0.2l-4.5,4.5
        	c-0.1,0.1-0.2,0.3-0.2,0.5C11.5,7.4,11.6,7.6,11.7,7.8z"/>
        </svg>`
    )
};
