import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M20,3.3H4C2.5,3.3,1.3,4.5,1.3,6v12c0,1.5,1.2,2.8,2.8,2.8h16c1.5,0,2.8-1.2,2.8-2.8V6
			C22.8,4.5,21.5,3.3,20,3.3z M4,4.8h16c0.7,0,1.3,0.6,1.3,1.3v0.6L12,13.2L2.8,6.6V6C2.8,5.3,3.3,4.8,4,4.8z M20,19.3H4
			c-0.7,0-1.3-0.6-1.3-1.3V8.4l8.9,6.3h0.7l8.9-6.3V18C21.3,18.7,20.7,19.3,20,19.3z"/>
		</svg>`
    )
};
