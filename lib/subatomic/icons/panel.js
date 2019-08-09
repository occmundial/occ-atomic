import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M9.7,16.5H3.5v4h6.3v-4H9.7z M9.7,15L9.7,15c0.8,0,1.5,0.7,1.5,1.5v4c0,0.8-0.7,1.5-1.5,1.5H3.5C2.7,22,2,21.3,2,20.5l0,0
        	v-4C2,15.7,2.7,15,3.5,15H9.7z"/>
        <path fill="${color[0]}" d="M9.7,3.5H3.5V12h6.3C9.7,12,9.7,3.5,9.7,3.5z M9.7,2L9.7,2c0.8,0,1.5,0.7,1.5,1.5V12c0,0.8-0.7,1.5-1.5,1.5H3.5
        	C2.7,13.5,2,12.8,2,12V3.5C2,2.7,2.7,2,3.5,2H9.7z"/>
        <path fill="${color[0]}" d="M20.5,3.5h-6.3v4h6.3V3.5z M20.5,2L20.5,2C21.3,2,22,2.7,22,3.5l0,0v4C22,8.3,21.3,9,20.5,9l0,0h-6.3
        	c-0.8,0-1.5-0.7-1.5-1.5v-4c0-0.8,0.7-1.5,1.5-1.5H20.5z"/>
        <path fill="${color[0]}" d="M20.5,12h-6.3v8.5h6.3V12z M20.5,10.5c0.8,0,1.5,0.7,1.5,1.5v8.5c0,0.8-0.7,1.5-1.5,1.5h-6.3c-0.8,0-1.5-0.7-1.5-1.5V12
        	c0-0.8,0.7-1.5,1.5-1.5H20.5z"/>
        </svg>`
    )
};
