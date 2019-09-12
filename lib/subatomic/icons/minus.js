
import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g transform="translate(0.000000, -6.000000)">
                <rect id="Rectangle" fill="${color[0]}" x="4" y="16" width="10" height="2"></rect>
            </g>
        </svg>`
    )
};