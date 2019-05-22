import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M15.1,18.8l-7.3-4.2c-0.6,0.5-1.4,0.9-2.3,0.9C3.6,15.5,2,13.9,2,12s1.6-3.5,3.5-3.5c0.9,0,1.7,0.3,2.4,0.9
        	l7.2-4.2C15,5,15,4.7,15,4.5C15,2.6,16.6,1,18.5,1S22,2.6,22,4.5S20.4,8,18.5,8c-1,0-1.8-0.4-2.5-1l-7.1,4.1C9,11.4,9,11.7,9,12
        	c0,0.3,0,0.6-0.1,0.9l7.1,4.1c0.6-0.7,1.5-1.1,2.5-1.1c1.9,0,3.5,1.6,3.5,3.5S20.4,23,18.5,23S15,21.4,15,19.5
        	C15,19.3,15,19.1,15.1,18.8z M5.5,13.5C6.3,13.5,7,12.8,7,12s-0.7-1.5-1.5-1.5S4,11.2,4,12S4.7,13.5,5.5,13.5z M18.5,6
        	C19.3,6,20,5.3,20,4.5S19.3,3,18.5,3S17,3.7,17,4.5S17.7,6,18.5,6z M18.5,21c0.8,0,1.5-0.7,1.5-1.5S19.3,18,18.5,18S17,18.7,17,19.5
        	S17.7,21,18.5,21z"/>
        </svg>`
    )
};
