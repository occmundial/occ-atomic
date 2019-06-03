import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M5.7,19.7v-8.3c0-0.7-0.6-1.2-1.3-1.2H3.2C2.6,10.1,2,10.7,2,11.4v8.3c0,0.7,0.5,1.2,1.3,1.2h1.1
        	C5.1,21,5.7,20.4,5.7,19.7"/>
        <path fill="${color[0]}" d="M10,21h7.4c0.8,0,1.4-0.4,1.7-1.1l2.8-6.3c0.1-0.2,0.1-0.4,0.1-0.7v-1.8l0,0V11c0-1-0.8-1.8-1.8-1.8h-4.9
        	c-0.4,0-0.8-0.4-0.7-0.9l0.7-3.2V4.7c0-0.3-0.1-0.7-0.4-1l-0.4-0.4c-0.3-0.3-0.8-0.3-1,0L8,8.9c-0.3,0.3-0.6,0.8-0.6,1.2v8.3
        	C7.4,19.8,8.6,21,10,21"/>
        </svg>`
    )
};
