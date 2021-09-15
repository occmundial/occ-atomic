import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="M10.479 2.013c.62-.07 1.24.145 1.68.587l9.241 9.24c.8.8.8 2.096 0 2.895L14.735 21.4c-.8.8-2.095.8-2.895 0L2.6 12.16a2.047 2.047 0 0 1-.587-1.681l.677-5.893c.053-.46.26-.887.586-1.214l.096-.096a2.047 2.047 0 0 1 1.214-.586l5.893-.677zm-.613 7.853a1.5 1.5 0 1 0-2.122-2.122 1.5 1.5 0 0 0 2.122 2.122z"/>
        </svg>`
    )
};
