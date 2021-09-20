import colors from '../colors';
import spacing from '../spacing';

export default {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) => (
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="M5.75 6.39701C5.75 3.85171 7.78271 1.75 10.3362 1.75C12.891 1.75 14.9224 3.85197 14.9224 6.39701V15.8084C14.9224 17.4108 13.6405 18.75 12.0117 18.75C10.3824 18.75 9.10005 17.4113 9.10005 15.8084V6.5571H11.6001V15.8084C11.6001 16.0732 11.8054 16.25 12.0117 16.25C12.2165 16.25 12.4224 16.0738 12.4224 15.8084V6.39701C12.4224 5.18965 11.4676 4.25 10.3362 4.25C9.20555 4.25 8.25 5.18991 8.25 6.39701V15.7673C8.25 17.9558 9.99312 19.75 12 19.75C14.0069 19.75 15.75 17.9558 15.75 15.7673V8.26467H18.25V15.7673C18.25 19.2033 15.5171 22.25 12 22.25C8.48287 22.25 5.75 19.2033 5.75 15.7673V6.39701Z"/>
    </svg>`
  )
};
