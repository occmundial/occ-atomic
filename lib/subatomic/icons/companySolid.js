import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M19.5,20.5c0.8,0,1.5,0.7,1.5,1.5c0,0,0,0,0,0H3c0-0.8,0.7-1.5,1.5-1.5c0,0,0,0,0,0h0.7v-7.6h13.6v7.6H19.5z
        	 M14.3,20.5V16H9.8v4.5H14.3z"/>
        <path fill="${color[0]}" d="M18.8,6.7H5.2V3.5C5.2,2.7,5.9,2,6.7,2h10.6c0.8,0,1.5,0.7,1.5,1.5C18.8,3.5,18.8,6.7,18.8,6.7z"/>
        <rect x="5.2" y="8.2" fill="${color[0]}" width="13.6" height="3.2"/>
        </svg>`
    )
};
