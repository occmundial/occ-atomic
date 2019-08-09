import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M8.6,7.7l2.1-4.9c0.3-0.7,1.1-1,1.9-0.7c0.3,0.1,0.6,0.4,0.7,0.7l2.1,4.9l5.3,0.5c0.4,0,0.7,0.2,0.9,0.5
        	c0.5,0.6,0.4,1.5-0.1,2c0,0,0,0,0,0l-4,3.5l1.2,5.2c0.1,0.4,0,0.7-0.2,1c-0.4,0.7-1.3,0.9-1.9,0.5L12,18.1l-4.6,2.7
        	C7.1,21,6.7,21,6.4,21c-0.8-0.2-1.2-0.9-1-1.7c0,0,0,0,0,0l1.2-5.2l-4-3.5c-0.6-0.5-0.7-1.4-0.2-2c0.2-0.3,0.6-0.5,1-0.5L8.6,7.7
        	L8.6,7.7z M12,4.7L9.9,9.5L4.7,10l4,3.4l-1.2,5.1l4.5-2.7l4.5,2.7l-1.2-5.1l4-3.4l-5.2-0.4L12,4.7z"/>
        </svg>`
    )
};
