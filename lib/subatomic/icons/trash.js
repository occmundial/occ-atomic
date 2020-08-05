import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M17,5.5V5c0-1.7-1.3-3-3-3h-4C8.3,2,7,3.3,7,5v0.5H3v2h1V19c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V7.5h1v-2H17z
                M9,5c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v0.5H9V5z M18,19c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V7.5h12V19z"/>
        <rect x="9" y="10" fill="${color[0]}" width="2" height="7"/>
        <rect x="13" y="10" fill="${color[0]}" width="2" height="7"/>
        </svg>`
    )
};
