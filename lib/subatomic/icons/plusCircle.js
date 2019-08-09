import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M12,21c5,0,9-4,9-9s-4-9-9-9l0,0c-5,0-9,4-9,9S7,21,12,21z M12,1c6.1,0,11,4.9,11,11s-4.9,11-11,11S1,18.1,1,12
			S5.9,1,12,1z"/>
		<polygon fill="${color[0]}" points="17,11 17,13 13,13 13,17 11,17 11,13 7,13 7,11 11,11 11,7 13,7 13,11 "/>
		</svg>`
    )
};
