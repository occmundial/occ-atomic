import colors from '../colors';
import spacing from '../spacing';

export default {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) => (
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="M12 18C8.69048 18 5.60737 15.6947 4.12986 12C5.60737 8.30533 8.69048 6 12 6C15.3095 6 18.3926 8.30534 19.8701 12C18.3926 15.6947 15.3095 18 12 18ZM12 20C16.5455 20 20.4273 16.6827 22 12C20.4273 7.31733 16.5455 4 12 4C7.45455 4 3.57273 7.31733 2 12C3.57273 16.6827 7.45455 20 12 20ZM14 12C14 10.8963 13.1037 10 12 10C10.8963 10 10 10.8963 10 12C10 13.1037 10.8963 14 12 14C13.1037 14 14 13.1037 14 12ZM12 8C14.2083 8 16 9.79172 16 12C16 14.2083 14.2083 16 12 16C9.79172 16 8 14.2083 8 12C8 9.79172 9.79172 8 12 8Z"/>
    </svg>`
  )
};
