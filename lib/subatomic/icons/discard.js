import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M12,11.5c2.7,0,4.8-2.2,4.8-4.8S14.7,1.8,12,1.8S7.2,3.9,7.2,6.6S9.3,11.5,12,11.5z M16.6,12.1H7.5
        	c-2.4,0-4.3,1.8-4.3,4.3v5.8h17.6v-5.9C20.8,14.1,19,12.1,16.6,12.1z M14.7,19.2c0.4,0.4,0.4,1,0,1.4s-1,0.4-1.4,0L12,19.2l-1.4,1.4
        	c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l1.4-1.4l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4l1.4-1.4
        	c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-1.4,1.4L14.7,19.2z"/>
        </svg>`
    )
};
