import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M21.9,20.4l-5.5-5.5c1.1-1.4,1.7-3.1,1.7-4.9c0-4.4-3.6-8-8-8s-8,3.6-8,8s3.6,8,8,8c1.8,0,3.5-0.6,4.9-1.7
        	l5.5,5.5L21.9,20.4z M10,16c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S13.3,16,10,16z"/>
        </svg>`
    )
};
