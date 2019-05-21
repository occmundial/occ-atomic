import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M11.2,16.4c0.1,0.1,0.4,0.4,0.4,0.4h0.1h0.1c0.1,0,0.2,0,0.3,0s0.2,0,0.3,0h0.1h0.1c0,0,0.3-0.3,0.4-0.4
        	l4.4-4.4c0.5-0.5,0.5-1.3,0-1.7c-0.5-0.5-1.3-0.5-1.7,0l-2.4,2.4V3.2C13.2,2.5,12.6,2,12,2s-1.2,0.5-1.2,1.2v9.6l-2.3-2.4
        	c-0.5-0.5-1.3-0.5-1.8,0s-0.5,1.3,0,1.7L11.2,16.4z"/>
        <path fill="${color[0]}" d="M20.8,15.7c-0.6,0-1.2,0.5-1.2,1.2v2.8H4.4v-2.8c0-0.6-0.5-1.2-1.2-1.2S2,16.2,2,16.8v4C2,21.5,2.5,22,3.2,22
        	h17.6c0.6,0,1.2-0.5,1.2-1.2v-4C22,16.2,21.5,15.7,20.8,15.7z"/>
        </svg>`
    )
};
