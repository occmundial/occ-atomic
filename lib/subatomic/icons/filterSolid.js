import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M5.1,18H2v-2h3.1c0.4-1.4,1.8-2.5,3.4-2.5s2.9,1.1,3.4,2.5H22v2H11.9c-0.4,1.4-1.8,2.5-3.4,2.5S5.6,19.4,5.1,18
        	z"/>
        <path fill="${color[0]}" d="M18.9,8c-0.4,1.4-1.8,2.5-3.4,2.5S12.6,9.4,12.1,8H2V6h10.1c0.4-1.4,1.8-2.5,3.4-2.5s2.9,1.1,3.4,2.5H22v2H18.9
        	z"/>
        </svg>`
    )
};
