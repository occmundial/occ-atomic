import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M8.1,11.6h0.7c-0.3-0.3-0.7-0.6-1.1-1H5.3c-1.9,0-3.3,1.3-3.3,3v4.2h1.8v-2.1c0-1.1,0.4-2.1,1.2-2.8
        	C5.9,12.1,7,11.6,8.1,11.6z"/>
        <path fill="${color[0]}" d="M11.9,13.7h0.7c-0.5-0.3-0.9-0.6-1.2-1.1H8.2c-1.9,0-3.3,1.3-3.3,3v4.2h2.5v-2c0-0.1,0-0.1,0-0.2
        	c0-1,0.4-2,1.2-2.8C9.5,14.2,10.7,13.7,11.9,13.7z"/>
        <path fill="${color[0]}" d="M18.8,14.8c0,0-7.4,0.1-7.6,0.1c-1.3,0.2-2.3,1-2.6,2.2c0.3,0.6,0.9,0.9,1.6,0.9H14l-1-1l0.9-0.9l2.5,2.4
        	L14,20.9L13.9,21l-0.1-0.1l-0.7-0.6L13,20.1l0.2-0.2l0.7-0.7h-3.7c-0.7,0-1.2-0.2-1.8-0.5V22H22v-4.3C22,16,20.6,14.8,18.8,14.8z"
        	/>
        <ellipse fill="${color[0]}" cx="15.4" cy="9.8" rx="3.7" ry="3.5"/>
        <path fill="${color[0]}" d="M6.8,8.7C6.7,8.4,6.7,8,6.7,7.7c0-2.5,2-4.5,4.5-4.7c-0.8-0.6-1.7-1-2.7-1c-2,0-3.7,1.6-3.7,3.5
        	C4.8,6.9,5.6,8.1,6.8,8.7z"/>
        <path fill="${color[0]}" d="M7.8,7.7c0,1.6,1.1,2.9,2.6,3.4c-0.1-0.4-0.2-0.9-0.2-1.3c0-2.2,1.5-4.1,3.6-4.8c-0.6-0.5-1.5-0.8-2.4-0.8
        	C9.5,4.2,7.8,5.8,7.8,7.7z"/>
        </svg>`
    )
};
