import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="M3.414 2.5 2 3.914l3.224 3.224A11.888 11.888 0 0 0 1 12.5C2.73 16.89 7 20 12 20c1.781 0 3.47-.395 4.984-1.102l3.4 3.401 1.415-1.414-3.023-3.023A11.888 11.888 0 0 0 23 12.5C21.27 8.11 17 5 12 5c-1.781 0-3.47.395-4.984 1.102L3.414 2.5zm5.14 7.968a4.001 4.001 0 0 0 5.477 5.477l-5.477-5.477zm6.892 4.064L9.968 9.054a4.001 4.001 0 0 1 5.477 5.477z"/>
		  </svg>`
    )
};
