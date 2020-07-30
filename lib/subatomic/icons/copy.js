import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M19,1H8C6.9,1,6,1.9,6,3v14c0,1.1,0.9,2,2,2h11c1.1,0,2-0.9,2-2V3C21,1.9,20.1,1,19,1z M19,17H8V3h11V17z"/>
        <path fill="${color[0]}" d="M4,23c-1.1,0-2-0.9-2-2V7h2v14h12v2H4z"/>
        </svg>`
    )
};
