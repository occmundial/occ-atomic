import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M19.6,22.2c-0.1,0-0.2,0-0.2,0l0,0c-3-0.3-6-1.4-8.6-3c-2.4-1.5-4.4-3.6-6-5.9c-1.7-2.6-2.7-5.5-3-8.6l0,0
			C1.7,4,2,3.2,2.5,2.7s1.2-0.9,2-0.9h2.9l0,0c1.3,0,2.4,1,2.6,2.3c0.1,0.9,0.3,1.7,0.6,2.5c0.4,1,0.1,2.1-0.6,2.8l-0.8,0.8
			c1.2,1.9,2.8,3.5,4.7,4.7l0.8-0.8c0.7-0.7,1.8-1,2.8-0.6c0.8,0.3,1.7,0.5,2.5,0.6c1.3,0.2,2.3,1.3,2.3,2.7v2.9c0,0.7-0.3,1.5-0.9,2
			C20.9,22,20.2,22.2,19.6,22.2z"/>
		</svg>`
    )
};
