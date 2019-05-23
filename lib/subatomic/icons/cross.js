import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M12.1,10.8l4.6-4.6L18,7.4L13.4,12l4.6,4.6L16.7,18l-4.6-4.6L7.4,18l-1.3-1.3l4.6-4.6L6.2,7.4l1.3-1.3L12.1,10.8z"/>
        </svg>`
    )
};
