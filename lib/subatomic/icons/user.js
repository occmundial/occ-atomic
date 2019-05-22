import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M8,8c0,2.2,1.8,4,4,4s4-1.8,4-4s-1.8-4-4-4S8,5.8,8,8z M6,8c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6S6,11.3,6,8z"
        	/>
        <path fill="${color[0]}" d="M4,22H2v-1.1C2,17.4,6.2,15,12,15s10,2.4,10,5.9V22h-2v-1.1c0-2.1-3.2-3.9-8-3.9s-8,1.8-8,3.9V22z"/>
        </svg>`
    )
};
