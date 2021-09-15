import colors from '../colors';
import spacing from '../spacing';

export default {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) => (
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="M6.49989 5C6.49989 3.34372 7.8436 2 9.49989 2H14.4999C16.1562 2 17.4999 3.34372 17.4999 5V6H19C20.6569 6 22 7.34315 22 9V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V9C2 7.34315 3.34315 6 5 6H6.49989V5ZM15.4999 5V6H8.49989V5C8.49989 4.44828 8.94817 4 9.49989 4H14.4999C15.0516 4 15.4999 4.44828 15.4999 5ZM4.64149 8.06619L9.3621 12H14.638L19.3586 8.06621C19.2473 8.02344 19.1264 8 19 8H5C4.87365 8 4.75278 8.02343 4.64149 8.06619ZM20 10.1351L15.3621 14H8.638L4 10.135V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V10.1351Z"/>
    </svg>`
  )
};
