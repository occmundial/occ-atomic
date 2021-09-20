import colors from '../colors';
import spacing from '../spacing';

export default {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) => (
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="M6.5 5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v1H19c.756 0 1.446.28 1.974.74l-.607.485L14.639 12H9.362L3.649 7.24l-.596-.522A2.988 2.988 0 0 1 5 6h1.5V5zM2.043 8.491A3.02 3.02 0 0 0 2 9v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9c0-.166-.014-.329-.04-.488l-.328.263L15.363 14H8.638L2.351 8.76l-.308-.269zM15.5 5v1h-7V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1z"/>
    </svg>`
  )
};
