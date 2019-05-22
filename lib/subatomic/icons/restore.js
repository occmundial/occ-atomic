import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M13,3c-4.9,0-9,3.9-9.1,8.8H1.2c-0.1,0-0.2,0-0.2,0.1s0,0.2,0.1,0.3c0,0,3.9,3.9,4,3.9s4.1-3.8,4.1-3.8
        	c0.1-0.1,0.1-0.2,0.1-0.3s-0.1-0.2-0.2-0.2H6.3C6.5,8.4,9.5,5.4,13,5.4c3.6,0,6.6,3,6.6,6.5s-3,6.5-6.6,6.5c-1.8,0-3.4-0.6-4.6-1.9
        	c-0.1-0.1-0.3-0.1-0.4,0l-1.4,1.4c-0.1,0.1-0.1,0.3,0,0.4c1.7,1.7,4,2.6,6.4,2.6c5,0,9.1-4,9.1-9C22.1,7,18,3,13,3z"/>
        <path fill="${color[0]}" d="M15.8,15.3L11.9,13c-0.1-0.1-0.1-0.2-0.1-0.3V8.3c0-0.2,0.1-0.3,0.3-0.3h1.2c0.2,0,0.3,0.1,0.3,0.3v3.4
        	c0,0.1,0.1,0.2,0.1,0.3l3,1.7c0.1,0.1,0.2,0.3,0.1,0.4l-0.6,1.1C16.2,15.4,16,15.4,15.8,15.3z"/>
        </svg>`
    )
};
