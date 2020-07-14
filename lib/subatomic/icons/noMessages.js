import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M22.3,20.7L3.4,1.8L2,3.2l1.6,1.6C2.7,6,2.1,7.4,2.1,9v3.9C2.1,16.2,4.8,19,8,19l0,2.3C8,22.2,8.6,23,9.5,23.1
        	c0.1,0,0.1,0,0.2,0c0.4,0,0.9-0.2,1.3-0.6l2.9-3.5h2c0.6,0,1.2-0.1,1.7-0.3l3.3,3.3L22.3,20.7z M13.8,17c-0.6,0-1.1,0.3-1.5,0.7
        	L10,20.6l0-1.7c0-1-0.8-1.8-1.8-1.8c-2.2,0-4-1.9-4-4.2V9c0-1.1,0.3-2,0.9-2.8l10.8,10.8L13.8,17L13.8,17z M15.9,4.4
        	c2.5,0,4.5,2.1,4.5,4.6v3.4c0,1-0.3,1.9-0.9,2.7l1.4,1.4c0.9-1.1,1.4-2.6,1.4-4.1V9c0-3.7-2.9-6.6-6.5-6.6H8.6C8,2.4,7.5,2.5,7,2.6
        	l1.8,1.8C8.8,4.4,15.9,4.4,15.9,4.4z"/>
        </svg>`
    )
};
