import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M21,22H3c-0.6,0-1-0.4-1-1V11c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v10C22,21.5,21.6,22,21,22z M4,20h16v-8H4V20z"/>
        <path fill="${color[0]}" d="M19,8H5C4.5,8,4,7.5,4,7s0.4-1,1-1h14c0.6,0,1,0.4,1,1S19.5,8,19,8z"/>
        <path fill="${color[0]}" d="M17,4H7C6.5,4,6,3.5,6,3s0.5-1,1-1h10c0.6,0,1,0.4,1,1S17.5,4,17,4z"/>
        </svg>`
    )
};
