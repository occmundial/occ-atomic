import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M14,9c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h7c0.6,0,1,0.4,1,1v5c0,0.6-0.4,1-1,1H14z"/>
        <path fill="${color[0]}" d="M3,13c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h7c0.6,0,1,0.4,1,1v9c0,0.6-0.4,1-1,1H3z"/>
        <path fill="${color[0]}" d="M14,22c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1h7c0.6,0,1,0.4,1,1v9c0,0.6-0.4,1-1,1H14z"/>
        <path fill="${color[0]}" d="M3,22c-0.6,0-1-0.4-1-1v-5c0-0.6,0.4-1,1-1h7c0.6,0,1,0.4,1,1v5c0,0.6-0.4,1-1,1H3z"/>
        </svg>`
    )
};
