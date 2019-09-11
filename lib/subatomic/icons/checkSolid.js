import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M12,1C6,1,1,5.9,1,12s5,11,11,11s11-4.9,11-11S18.1,1,12,1z M11,15.5c-0.3,0.3-0.7,0.3-1,0L7,13l0.9-1.1
			l2.5,2.1L16,8.2l1,1L11,15.5z"/>
		</svg>`
    )
};
