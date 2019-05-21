import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <rect fill="${color[0]}" x="2" y="3" class="st0" width="20" height="2"/>
        <rect fill="${color[0]}" x="2" y="11" class="st0" width="20" height="2"/>
        <rect fill="${color[0]}" x="2" y="19" class="st0" width="20" height="2"/>
        </svg>`
    )
};
