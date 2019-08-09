import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M16.8,6l3.5-3.5l1.4,1.4l-3.1,3.1c2,1.3,3.5,3.2,4.3,5.4c-1.7,4.4-6,7.5-11,7.5c-1.8,0-3.5-0.4-5.1-1.2
			l-3.5,3.5L2,20.9l3.1-3.1c-1.8-1.3-3.3-3.2-4.1-5.3C2.7,8.1,7,5,12,5C13.7,5,15.4,5.4,16.8,6z M9.8,15.9c1.9,1.2,4.3,0.6,5.5-1.2
			c0.8-1.3,0.8-3,0-4.3C15.4,10.3,9.8,15.9,9.8,15.9z M8.5,14.4L13.9,9C12,7.9,9.5,8.7,8.5,10.6C7.8,11.8,7.8,13.2,8.5,14.4z"/>
		</svg>`
    )
};
