import colors from '../colors';
import spacing from '../spacing';

export default {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) => (
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
    </svg>`
  )
};
