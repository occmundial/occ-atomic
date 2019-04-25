import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M7.9,9.4l7.2-4.2C15,5,15,4.7,15,4.5C15,2.6,16.6,1,18.5,1S22,2.6,22,4.5S20.4,8,18.5,8c-1,0-1.8-0.4-2.5-1
        	l-7.1,4.1C9,11.4,9,11.7,9,12c0,0.3,0,0.6-0.1,0.9l7.1,4.1c0.6-0.7,1.5-1.1,2.5-1.1c1.9,0,3.5,1.6,3.5,3.5S20.4,23,18.5,23
        	S15,21.4,15,19.5c0-0.2,0-0.4,0.1-0.7l-7.3-4.2c-0.6,0.5-1.4,0.9-2.3,0.9C3.6,15.5,2,13.9,2,12s1.6-3.5,3.5-3.5
        	C6.4,8.5,7.2,8.8,7.9,9.4z"/>
        </svg>`
    )
};
