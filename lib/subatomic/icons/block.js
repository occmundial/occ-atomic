import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M12,2C9.3,2,6.8,3,4.9,4.9S2,9.3,2,12c0,5.5,4.5,10,10,10c2.7,0,5.2-1,7.1-2.9S22,14.7,22,12
        	C22,6.5,17.5,2,12,2z M18.1,7.7C19,9,19.5,10.4,19.5,12c0,2-0.8,3.9-2.2,5.3c-1.4,1.4-3.3,2.2-5.3,2.2c-1.6,0-3.1-0.5-4.3-1.4
        	L18.1,7.7z M16.3,5.9L5.9,16.3C5,15.1,4.5,13.6,4.5,12c0-2,0.8-3.9,2.2-5.3S10,4.5,12,4.5C13.6,4.5,15.1,5,16.3,5.9z"/>
        </svg>`
    )
};
