import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M21,11.8V21c0,0.8-0.7,1.5-1.5,1.5H15c-0.8,0-1.5-0.7-1.5-1.5v-3.6c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5V21
        	c0,0.8-0.7,1.5-1.5,1.5H4.5C3.7,22.5,3,21.8,3,21v-9.2l-0.3,0.3l-1.3-1.5l10-8.8c0.4-0.3,0.9-0.3,1.3,0l10,8.8l-1.3,1.5L21,11.8z
        	 M19,10l-7-6.2L5,10v10.5h3.5v-3.1c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5v3.1H19V10z"/>
        </svg>`
    )
};
