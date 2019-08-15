import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M18.3,2h-3.1C12.3,2,10,4.3,10,7.2v3.1H6.8v4.2h3.1v8.3h4.2v-8.3h3.1l1-4.2H14V7.2c0-0.6,0.5-1,1-1h3.1V2H18.3z"/>
        </svg>`
    )
};
