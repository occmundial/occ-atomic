import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" fill-rule="evenodd" d="M19.75,19.07,12,3.55,4.22,19.07Zm-6-16.42a2,2,0,0,0-3.58,0L2.43,18.18a2,2,0,0,0,1.79,2.89H19.75a2,2,0,0,0,1.79-2.89ZM11,13.57V9.07h2v4.5Zm0,1.5v2h2v-2Z"/>
        </svg>`
    )
};
