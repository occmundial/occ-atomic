import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M14.9,21.3c-0.3,1.3-1.5,2.3-2.9,2.3s-2.6-1-2.9-2.3H14.9z"/>
        <path fill="${color[0]}" d="M10,4.3V2.8c0-1,0.9-1.8,2-1.8s2,0.8,2,1.8v1.5c3.1,0.8,5,3.6,5,7v4.4l1.6,1.6c0.2,0.2,0.4,0.5,0.4,0.9v0.7
        	c0,0.7-0.5,1.2-1.2,1.2H4.2C3.5,20,3,19.5,3,18.8v-0.7c0-0.3,0.1-0.6,0.4-0.9L5,15.7v-4.4C5,7.9,6.9,5.1,10,4.3z"/>
        </svg>`
    )
};
