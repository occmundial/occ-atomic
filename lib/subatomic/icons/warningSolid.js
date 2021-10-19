import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.error]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M12,3c0.2,0,0.5,0.1,0.6,0.4l8.3,16.5c0.2,0.5-0.1,1.1-0.6,1.1H3.7c-0.5,0-0.8-0.6-0.6-1.1l8.3-16.5C11.5,3.1,11.7,3,12,3z
             M12,17c-0.6,0-1,0.4-1,1s0.4,1,1,1c0.6,0,1-0.4,1-1S12.6,17,12,17z M11,11v4c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1
            C11.4,10,11,10.4,11,11z"/>
        </svg>`
    )
};
