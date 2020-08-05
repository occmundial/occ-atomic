import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M17,5c0-1.7-1.3-3-3-3h-4C8.3,2,7,3.3,7,5H3v2h18V5H17z M10,4h4c0.6,0,1,0.4,1,1H9C9,4.4,9.4,4,10,4z"/>
        <path fill="${color[0]}" d="M5,8.5V20c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V8.5H5z M11,19H9v-7.5h2V19z M15,19h-2v-7.5h2V19z"/>
        </svg>`
    )
};
