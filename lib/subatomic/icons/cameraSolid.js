import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M12,9.5c1.7,0,3.2,1.4,3.2,3.1c0,1.7-1.4,3.2-3.1,3.2c0,0,0,0,0,0c-1.7,0-3.1-1.4-3.1-3.2
        	C8.9,10.9,10.3,9.5,12,9.5z"/>
        <path fill="${color[0]}" d="M19.5,6.8c1.2,0,2.3,1,2.3,2.3v8.2c0,1.2-1,2.3-2.3,2.3h-15c-1.2,0-2.3-1-2.3-2.3V9.1c0-1.2,1-2.3,2.3-2.3h0.3
        	V6.6c0-0.3,0.2-0.5,0.5-0.5h0.6c0.3,0,0.5,0.2,0.5,0.5v0.2h1.1L8.1,5c0.2-0.6,0.7-1,1.4-1h5c0.6,0,1.2,0.4,1.4,1l0.6,1.8
        	C16.5,6.8,19.5,6.8,19.5,6.8z M12,17.3c2.6,0,4.7-2.1,4.7-4.6S14.6,8,12,8c0,0,0,0,0,0c-2.6,0-4.6,2.1-4.6,4.7
        	C7.4,15.2,9.4,17.3,12,17.3z M18.5,10.8c0.4,0,0.8-0.3,0.8-0.8s-0.3-0.8-0.8-0.8s-0.8,0.3-0.8,0.8S18.1,10.8,18.5,10.8z"/>
        </svg>`
    )
};
