import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M11,11.1v5.4h2v-5.4H11z M11,7.5v1.8h2V7.5H11z"/>
        </svg>`
    )
};
