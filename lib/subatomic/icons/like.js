import colors from '../colors';
import spacing from '../spacing';

export default {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) => (
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path fill="${color[0]}" fill-rule="evenodd" clip-rule="evenodd" d="M13.553 8.35v2h5.516l.036.052c.243.341.663.956.892 1.336a1.743 1.743 0 0 1-.052.301l-.008.027-.007.026c-.413 1.567-1.328 4.995-1.728 6.345-.095.322-.235.48-.32.556l-.008.007H9.115L9 18.917V9.64a3.54 3.54 0 0 0 .191-.104 2.84 2.84 0 0 0 1.063-1.075c.364-.664.556-1.458.68-1.972l.019-.076c.155-.635.256-1.026.395-1.321a9.1 9.1 0 0 1 .283-.56c.075-.133.117-.19.124-.2V4.33c.114-.137.2-.206.25-.24a.408.408 0 0 1 .111-.055c.073-.023.107-.024.33-.031L12.554 4c.343.007.542.132.702.3.143.152.242.331.297.465V8.35zM8.751 20.968A2 2 0 0 1 7 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.753c.302-.107.607-.244.747-.5.235-.428.374-1 .518-1.595.14-.571.283-1.163.521-1.667.238-.504.467-.93.675-1.182.843-1.02 1.695-1.04 2.208-1.053L12.526 2c1.97 0 2.84 1.645 3.027 2.467V8.35h3.694c.78 0 1.317.595 1.488.892.274.385.883 1.27 1.129 1.732.246.462.103 1.277 0 1.627-.41 1.557-1.334 5.018-1.744 6.404-.41 1.385-1.403 1.907-1.848 1.994H9.116c-.122 0-.244-.011-.364-.033zm9.02-1.897.005-.002-.004.002zM4 10h3v10H4V10z"/>
    </svg>`
  )
};
