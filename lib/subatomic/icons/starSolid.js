import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M8.7,7.8l2.1-5c0.3-0.7,1.1-1,1.8-0.7c0.3,0.1,0.6,0.4,0.7,0.7l2.1,5l5.4,0.5c0.3,0,0.7,0.2,0.9,0.4
			c0.5,0.5,0.4,1.4-0.1,1.8c0,0,0,0,0,0l-4.1,3.6l1.2,5.3c0.1,0.3,0,0.7-0.2,1c-0.4,0.6-1.2,0.8-1.8,0.4L12,18l-4.7,2.8
			C7,21,6.7,21,6.3,21c-0.7-0.2-1.2-0.9-1-1.6c0,0,0,0,0,0l1.2-5.3l-4.1-3.6C2.2,10.3,2,10,2,9.7C1.9,8.9,2.5,8.3,3.2,8.2c0,0,0,0,0,0
			C3.2,8.2,8.7,7.8,8.7,7.8z"/>
		</svg>`
    )
};
