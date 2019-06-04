import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M16.5,8.5C17.3,8.5,18,7.8,18,7s-0.7-1.5-1.5-1.5C15.7,5.5,15,6.2,15,7S15.7,8.5,16.5,8.5z M19.9,8
        	c-0.4,1.4-1.8,2.5-3.4,2.5S13.6,9.4,13.1,8H2V6h11.1c0.4-1.4,1.8-2.5,3.4-2.5s2.9,1.1,3.4,2.5H22v2H19.9z"/>
        <path fill="${color[0]}" d="M4.1,17.8H2v-1.5h2.1c0.3-1.6,1.7-2.8,3.4-2.8c1.6,0,2.9,1.1,3.4,2.5H22v2H10.9c-0.4,1.4-1.8,2.5-3.4,2.5
        	C5.8,20.5,4.4,19.3,4.1,17.8z M7.5,18.5C8.3,18.5,9,17.8,9,17s-0.7-1.5-1.5-1.5S6,16.2,6,17S6.7,18.5,7.5,18.5z"/>
        </svg>`
    )
};
