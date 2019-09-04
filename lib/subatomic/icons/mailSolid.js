import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M12.6,15.1c-0.2,0.1-0.4,0.2-0.6,0.2s-0.4-0.1-0.6-0.2L1.2,7.9V18c0,1.5,1.2,2.8,2.8,2.8h16
			c1.5,0,2.8-1.2,2.8-2.8V7.9L12.6,15.1z"/>
		<path fill="${color[0]}" d="M1.3,5.8L12,13.4l10.7-7.6l0,0c-0.1-1.5-1.3-2.6-2.7-2.6H4C2.5,3.2,1.3,4.4,1.3,5.8L1.3,5.8z"/>
		</svg>`
    )
};
