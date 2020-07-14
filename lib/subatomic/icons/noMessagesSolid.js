import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M21.3,12.4V9c0-3.1-2.4-5.6-5.5-5.6H8.6c-0.2,0-0.4,0-0.6,0l12.3,12.3C20.9,14.8,21.3,13.7,21.3,12.4z"/>
        <path fill="${color[0]}" d="M22.3,20.7L3.4,1.8L2,3.2l2.3,2.3C3.6,6.5,3.1,7.7,3.1,9v3.9c0,2.8,2.3,5.2,5,5.2C8.6,18,9,18.4,9,18.9L9,21.3
        	c0,0.4,0.2,0.8,0.6,0.8c0.2,0,0.4,0,0.6-0.2l3-3.5c0.2-0.2,0.4-0.3,0.7-0.3h2c0.3,0,0.6,0,0.9-0.1l4.2,4.2
        	C20.9,22.1,22.3,20.7,22.3,20.7z"/>
        </svg>`
    )
};
