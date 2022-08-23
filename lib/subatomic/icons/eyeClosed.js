import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="m17.971 18.871 3.12 3.12 1.415-1.413L4.121 2.193 2.707 3.607l3.434 3.434C4.284 8.465 2.825 10.545 2 13c1.573 4.683 5.455 8 10 8 2.21 0 4.264-.784 5.971-2.129zm-1.427-1.427-1.666-1.666a4.001 4.001 0 1 1-5.655-5.655L7.571 8.471C6.116 9.513 4.903 11.066 4.13 13c1.477 3.695 4.56 6 7.87 6 1.623 0 3.192-.555 4.544-1.556zm-5.907-5.907a2.001 2.001 0 1 0 2.826 2.826l-2.826-2.826zM22 13a13.4 13.4 0 0 1-1.373 2.899l-1.454-1.455c.26-.453.494-.936.697-1.444-1.477-3.695-4.56-6-7.87-6-.089 0-.178.002-.267.005L9.957 5.228A9.242 9.242 0 0 1 12 5c4.546 0 8.427 3.317 10 8z"/>
      </svg>`
    )
};
