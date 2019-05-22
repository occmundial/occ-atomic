import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <polygon fill="${color[0]}" points="14.4,5.4 18.4,9.5 8.1,19.7 4.2,15.8 	"/>
        <path fill="${color[0]}" d="M21.5,4.4l-1.9-1.8c-0.7-0.7-1.9-0.7-2.6,0l-1.6,1.8l4,4l2-2C22,5.8,22,5.1,21.5,4.4L21.5,4.4z"/>
        <path fill="${color[0]}" d="M2,21.4c-0.1,0.1,0,0.4,0.3,0.6c0.1,0,0.1,0,0.1,0L7,20.9l-4-4L2,21.4z"/>
        </svg>`
    )
};
