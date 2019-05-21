import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M13,4.1L13,4.1C13,3.4,12.6,3,12,3s-1,0.4-1,1v0.1C11.3,4,11.7,4,12,4C12.3,4,12.7,4,13,4.1z M9,4.6V4
        	c0-1.7,1.3-3,3-3s3,1.3,3,3v0.6c2.5,1.1,4,3.6,4,6.7v4.4l1.6,1.6c0.2,0.2,0.4,0.5,0.4,0.9v0.7c0,0.7-0.5,1.2-1.2,1.2h-3.9
        	c-0.4,1.7-2,3-3.9,3s-3.4-1.3-3.9-3H4.2C3.5,20,3,19.5,3,18.8v-0.7c0-0.3,0.1-0.6,0.4-0.9L5,15.7v-4.4C5,8.2,6.5,5.7,9,4.6z
        	 M10.3,20c0.3,0.6,1,1,1.7,1s1.4-0.4,1.7-1H10.3z M17.6,17.1c-0.4-0.4-0.6-0.9-0.6-1.4v-4.4c0-2.6-1.4-4.6-3.7-5.1
        	C12.9,6,12.4,6,12,6s-0.9,0-1.3,0.1C8.4,6.7,7,8.6,7,11.3v4.4c0,0.5-0.2,1-0.6,1.4L5.5,18h13.1L17.6,17.1z"/>
        </svg>`
    )
};
