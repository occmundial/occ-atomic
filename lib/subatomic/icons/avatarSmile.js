import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M12,22C6.5,22,2,17.5,2,12C2,6.5,6.5,2,12,2c5.5,0,10,4.5,10,10C22,17.5,17.5,22,12,22z M12,4c-4.4,0-8,3.6-8,8
			s3.6,8,8,8s8-3.6,8-8S16.4,4,12,4z"/>
		<path fill="${color[0]}" d="M12,16c-2.3,0-4.4-1.6-4.9-3.8l1.9-0.5C9.4,13.1,10.6,14,12,14c1.4,0,2.5-0.9,2.9-2.3l1.9,0.6
			C16.2,14.5,14.3,16,12,16z"/>
		<circle fill="${color[0]}" cx="8.5" cy="8.5" r="1.5"/>
		<circle fill="${color[0]}" cx="15.5" cy="8.5" r="1.5"/>
		</svg>`
    )
};
