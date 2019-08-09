import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M19.5,6.8c1.2,0,2.3,1,2.3,2.3v8.2c0,1.2-1,2.3-2.3,2.3h-15c-1.2,0-2.3-1-2.3-2.3V9.1c0-1.2,1-2.3,2.3-2.3h0.3
        	V6.6c0-0.3,0.2-0.5,0.5-0.5h0.6c0.3,0,0.5,0.2,0.5,0.5v0.2h1.1L8.1,5c0.2-0.6,0.7-1,1.4-1h5c0.6,0,1.2,0.4,1.4,1l0.6,1.8H19.5z
        	 M20.2,17.3l0.1-8.2c0-0.4-0.3-0.7-0.8-0.8h-3c-0.6,0-1.2-0.4-1.4-1l-0.6-1.8h-5L8.9,7.3c-0.2,0.6-0.8,1-1.4,1h-3
        	c-0.4,0-0.8,0.3-0.8,0.8v8.2c0,0.4,0.3,0.7,0.7,0.8c0,0,0,0,0,0h15C19.9,18,20.2,17.7,20.2,17.3z"/>
        <circle fill="${color[0]}" cx="18.5" cy="10" r="0.8"/>
        <path fill="${color[0]}" d="M12,17.3c-2.6,0-4.7-2.1-4.7-4.6C7.3,10.1,9.4,8,12,8c0,0,0,0,0,0c2.6,0,4.6,2.1,4.6,4.7
        	C16.6,15.2,14.6,17.3,12,17.3z M12,9.5c-1.7,0-3.2,1.4-3.2,3.1c0,1.7,1.4,3.2,3.1,3.2c0,0,0,0,0,0c1.7,0,3.1-1.4,3.1-3.2
        	C15.1,10.9,13.7,9.5,12,9.5z"/>
        </svg>`
    )
};
