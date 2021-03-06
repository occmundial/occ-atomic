import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M9.8,22.1c-0.2,0.2-0.4,0.2-0.6,0.2c-0.4,0-0.7-0.4-0.7-0.8l-0.1-2.6c0-0.5-0.4-0.9-0.9-0.9
        	c-3,0-5.5-2.5-5.5-5.5V8.3c0-3.3,2.7-6,6-6h8c3.3,0,6,2.7,6,6v3.6c0,3.3-2.7,6-6,6h-2.2c-0.3,0-0.6,0.1-0.8,0.3L9.8,22.1z
        	 M10.4,18.3l1.1-1.3c0.6-0.7,1.4-1,2.3-1H16c2.2,0,4-1.8,4-4V8.3c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4v4.1c0,1.9,1.6,3.5,3.5,3.5
        	C8.9,15.9,10.1,16.9,10.4,18.3z"/>
        </svg>`
    )
};
