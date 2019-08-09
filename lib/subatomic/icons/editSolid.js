import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M19.3,8.7l-4.2-4.2l0.2-0.2l0.4-0.4l1.6-1.6c0.4-0.4,1.1-0.4,1.6,0l2.6,2.6c0.4,0.4,0.4,1.1,0,1.6L20,8.1
        	l-0.4,0.4C19.6,8.5,19.3,8.7,19.3,8.7z"/>
        <path fill="${color[0]}" d="M17.9,10.2L6.7,21.4C6.4,21.8,5.8,22,5.3,22H2.5C2.2,22,2,21.8,2,21.5v-2.8c0-0.5,0.2-1,0.6-1.4L13.8,6
        	L17.9,10.2L17.9,10.2z"/>
        </svg>`
    )
};
