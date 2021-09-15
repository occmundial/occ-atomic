import colors from '../colors';
import spacing from '../spacing';

export default {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) => (
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="M6 6.39701C6 3.98553 7.92499 2 10.3362 2C12.7486 2 14.6724 3.98574 14.6724 6.39701V15.8084C14.6724 17.2771 13.4981 18.5 12.0117 18.5C10.5247 18.5 9.35005 17.2775 9.35005 15.8084V6.5571H11.3501V15.8084C11.3501 16.207 11.6631 16.5 12.0117 16.5C12.3589 16.5 12.6724 16.2075 12.6724 15.8084V6.39701C12.6724 5.05588 11.61 4 10.3362 4C9.06327 4 8 5.05609 8 6.39701V15.7673C8 18.0805 9.8421 20 12 20C14.1579 20 16 18.0805 16 15.7673V8.26467H18V15.7673C18 19.0785 15.3661 22 12 22C8.63389 22 6 19.0785 6 15.7673V6.39701Z"/>
    </svg>`
  )
};
