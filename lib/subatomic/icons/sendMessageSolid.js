import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M6.3,4.4l14.9,6.1c1.3,0.5,1.3,2.4,0,2.9L6.4,19.6c-1,0.4-2.2-0.3-2.2-1.5v-3.4c0-0.8,0.6-1.4,1.3-1.6l6.5-1.1
        	c0.1,0,0.1-0.2,0-0.2l-6.5-1.1C4.7,10.7,4.2,10,4.2,9.3L4.1,5.9C4.1,4.8,5.3,4,6.3,4.4z"/>
        </svg>`
    )
};
