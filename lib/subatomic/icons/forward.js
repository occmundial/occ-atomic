import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M7,4.7l1.4-1.4l8,8c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-8,8L7,19.3l7.3-7.3L7,4.7z"/>
		</svg>`
    )
};
