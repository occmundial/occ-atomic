import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M5.61 4.475v8.3c0 .7-.5 1.2-1.3 1.2h-1.1c-.7.1-1.2-.6-1.2-1.2v-8.3c-.1-.7.5-1.3 1.2-1.3h1.1c.7 0 1.3.6 1.3 1.3zM9.911 3.175h7.4c.8 0 1.5.5 1.7 1.2l2.8 6.3c.1.2.1.4.1.7v1.8c0 1-.8 1.8-1.8 1.8h-4.9c-.4 0-.8.4-.7.9l.7 3.2v.3c0 .3-.1.7-.4 1l-.4.4c-.3.3-.8.3-1 0l-5.4-5.6c-.3-.3-.5-.8-.5-1.2v-8.2c-.1-1.4 1-2.6 2.4-2.6z"/>
        </svg>`
    )
};
