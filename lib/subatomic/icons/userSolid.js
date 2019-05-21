import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M6.3,8c0-3.2,2.6-5.8,5.8-5.8s5.8,2.6,5.8,5.8s-2.6,5.8-5.8,5.8S6.3,11.2,6.3,8z M3,22.8
        	c-0.4,0-0.8-0.3-0.8-0.8v-1.1c0-3.3,4.1-5.6,9.8-5.6s9.8,2.4,9.8,5.6V22c0,0.4-0.3,0.8-0.8,0.8S3.4,22.8,3,22.8z"/>
        </svg>`
    )
};
