import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
   <path fill="${color[0]}" d="M20.5,15.4l-2.8,2.1V5h-1.5v12.5l-2.8-2.1l-0.9,1.2l4,3c0.1,0.1,0.3,0.2,0.5,0.2s0.3,0,0.5-0.2l4-3L20.5,15.4z"/>
   <path fill="${color[0]}" d="M6.5,4.4l-4,3l0.9,1.2l2.8-2.1V19h1.5V6.5l2.8,2.1l0.9-1.2l-4-3C7.2,4.2,6.8,4.2,6.5,4.4z"/>
   </svg>`
    )
};
