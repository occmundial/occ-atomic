import colors from '../colors';
import spacing from '../spacing';

export default {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) => (
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="m16.656 21.893-3.79-1.02 1.37-.12a4.118 4.118 0 0 0 3.744-4.46L16.962 4.663a4.124 4.124 0 0 0-.212-.995l4.063.976a2.801 2.801 0 0 1 2.07 3.378l-2.836 11.804a2.801 2.801 0 0 1-3.379 2.069l-.012-.003zM12.632 2.416a2.615 2.615 0 0 1 2.836 2.38l.071.811.946 10.816a2.618 2.618 0 0 1-2.379 2.836l-4.788.419-4.05.354a2.618 2.618 0 0 1-2.835-2.38L1.416 6.025a2.618 2.618 0 0 1 2.38-2.836l8.836-.773zm-2.32 7.877a1.994 1.994 0 0 1-2.814.247 1.994 1.994 0 0 1-.246-2.814 1.994 1.994 0 0 1 2.814-.246 1.994 1.994 0 0 1 .246 2.813zm-4.905 6.038-.082-.946c-.094-1.072 1.315-2.173 3.806-2.39 2.49-.219 4.07.62 4.163 1.693l.083.946-7.97.697z"/>
    </svg>`
  )
};
