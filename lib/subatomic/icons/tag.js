import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M20.6,2H13c-0.4,0-0.8,0.1-1,0.4l-9.5,9.5c-0.6,0.6-0.6,1.5,0,2.1l0,0l7.6,7.6c0.6,0.6,1.5,0.6,2.1,0l9.4-9.4
        	c0.3-0.3,0.4-0.7,0.4-1V3.5C22.1,2.7,21.4,2,20.6,2z M17.8,7.7c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4
        	S18.6,7.7,17.8,7.7z"/>
        </svg>`
    )
};
