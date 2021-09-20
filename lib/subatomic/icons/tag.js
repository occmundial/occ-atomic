import colors from '../colors';
import spacing from '../spacing';

export default {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) => (
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="M12.867 1.893a3.047 3.047 0 0 0-2.502-.873l-5.893.676a3.048 3.048 0 0 0-1.807.873l-.096.096a3.048 3.048 0 0 0-.873 1.807l-.676 5.893a3.047 3.047 0 0 0 .873 2.502l9.24 9.24a3.048 3.048 0 0 0 4.31 0l6.665-6.664a3.047 3.047 0 0 0 0-4.31l-9.241-9.24zm-2.274 1.114c.317-.037.634.074.86.3l9.24 9.24a1.047 1.047 0 0 1 0 1.481l-6.665 6.665a1.047 1.047 0 0 1-1.48 0l-9.241-9.24a1.047 1.047 0 0 1-.3-.86L3.683 4.7c.027-.235.133-.454.3-.621l.096-.096c.167-.167.386-.273.62-.3l5.894-.676zm-.727 6.859a1.5 1.5 0 1 0-2.122-2.122 1.5 1.5 0 0 0 2.122 2.122z"/>
    </svg>`
  )
};
