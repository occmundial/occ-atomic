import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M19.9,6.7l1.9,0.5l-1.7,6.6C20,14.5,19.4,15,18.7,15H7.8c-0.7,0-1.3-0.5-1.5-1.1l-2-8.1C4.3,5.3,3.9,5,3.4,5H2
        	V3h1.4C4.8,3,6,3.9,6.3,5.3L8.2,13h10.1L19.9,6.7z"/>
        <path fill="${color[0]}" d="M8,22c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S9.7,22,8,22z M8,20c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1
        	S7.4,20,8,20z"/>
        <path fill="${color[0]}" d="M18,22c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S19.7,22,18,22z M18,20c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1
        	S17.4,20,18,20z"/>
        </svg>`
    )
};
