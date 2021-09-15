import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M12,5c5,0,9.3,3.1,11,7.5c-1.7,4.4-6,7.5-11,7.5s-9.3-3.1-11-7.5C2.7,8.1,7,5,12,5z M12,16.5c2.2,0,4-1.8,4-4
			s-1.8-4-4-4s-4,1.8-4,4S9.8,16.5,12,16.5z"/>
		</svg>`
    )
};
