import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M14.7,22.8H9.4V15H6.5V9.8h2.9V7.6c0-3.1,2.4-5.6,5.6-5.6h3.8v5.3H15c-0.2,0-0.3,0.2-0.3,0.3v2.1h4L17.4,15h-2.7V22.8z
			 M10.9,21.3h2.3v-7.7h3.1l0.6-2.3h-3.6V7.6c0-1,0.8-1.8,1.8-1.8h2.2V3.5h-2.3c-2.3,0-4.1,1.8-4.1,4.1v3.6H8v2.3h2.9V21.3z"/>
		</svg>`
    )
};
