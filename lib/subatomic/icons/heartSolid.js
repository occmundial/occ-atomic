import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M13.3,18.9c4.7-4.1,5.9-5.4,6.9-7.2c0.5-1,0.8-1.9,0.8-2.9C21,6.1,18.8,4,16.1,4c-1.1,0-2.3,0.4-3.2,1.1L12,5.7
        	l-0.9-0.6C10.2,4.4,9.1,4,7.9,4C5.2,4,3,6.1,3,8.8c0,1,0.3,1.9,0.8,2.9c1,1.8,2.2,3.1,6.9,7.2L12,20L13.3,18.9z"/>
        </svg>`
    )
};
