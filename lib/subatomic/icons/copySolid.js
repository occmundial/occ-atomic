import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M19,1c1.1,0,2,0.9,2,2v14c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2H19z"/>
        <path fill="${color[0]}" d="M16.3,20.5H4.5V6.8H2v14C2,22,3,23,4.3,23h12V20.5z"/>
        </svg>`
    )
};
