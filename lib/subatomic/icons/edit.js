import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M16.1,5.8l2,2L18.9,7l1.3-1.3l-2-2L16.1,5.8z M17,8.9l-2-2L3.6,18.3c-0.1,0.1-0.1,0.2-0.1,0.4v1.8h1.8
        	c0.1,0,0.3-0.1,0.4-0.1L17,8.9z M17.4,2.3c0.4-0.4,1.1-0.4,1.6,0l2.6,2.6c0.4,0.4,0.4,1.1,0,1.6L20,8.1l-0.4,0.4L6.7,21.4
        	C6.4,21.8,5.8,22,5.3,22H2.5C2.2,22,2,21.8,2,21.5v-2.8c0-0.5,0.2-1,0.6-1.4L15.4,4.4l0.4-0.4L17.4,2.3L17.4,2.3z"/>
        </svg>`
    )
};
