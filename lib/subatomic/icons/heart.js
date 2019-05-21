import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M12,20.3l-0.7-0.6l-1.1-1c-4.3-3.7-5.4-4.9-6.4-6.6c-0.6-1-0.8-2-0.8-3C3,6.3,5.4,4,8.4,4
        	c1.2,0,2.5,0.4,3.5,1.1L12,5.3l0.2-0.1c1-0.7,2.2-1.1,3.5-1.1c3,0,5.4,2.3,5.4,5.2c0,1-0.3,2-0.9,3c-1,1.7-2.1,2.9-6.4,6.6L12,20.3z
        	 M12.5,17.3c4.1-3.5,5.1-4.6,5.9-6c0.4-0.7,0.6-1.4,0.6-2C19,7.4,17.5,6,15.6,6c-0.8,0-1.6,0.3-2.3,0.7l-1.3,1l-1.3-1
        	C10,6.3,9.2,6,8.4,6C6.5,6,5,7.4,5,9.2c0,0.7,0.2,1.3,0.6,2c0.8,1.4,1.8,2.5,5.9,6l0.5,0.4L12.5,17.3z"/>
        </svg>`
    )
};
