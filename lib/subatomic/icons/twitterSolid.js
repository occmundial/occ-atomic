import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M21.6,3.3c-0.9,0.6-1.8,1.1-2.8,1.4c-1.1-1.3-2.9-1.7-4.5-1.1s-2.6,2.1-2.6,3.8v0.9C8.4,8.4,5.4,6.9,3.5,4.2
        	c0,0-3.6,8.1,4.5,11.7c-1.9,1.3-4.1,1.9-6.3,1.8c8.1,4.5,18.1,0,18.1-10.4c0-0.3,0-0.5-0.1-0.7C20.6,5.7,21.3,4.6,21.6,3.3z"/>
        </svg>`
    )
};
