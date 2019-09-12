import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M18.3,7.3l1.4,1.4l-8.7,9c-0.4,0.4-1,0.4-1.4,0.1l-4.3-3.6l1.3-1.5l3.6,3C10.2,15.6,18.3,7.3,18.3,7.3z"/>
		</svg>`
    )
};
