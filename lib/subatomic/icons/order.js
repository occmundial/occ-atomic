import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
         <style type="text/css">
            .st0{fill:none;stroke:${color[0]};stroke-width:1.5;stroke-linejoin:round;}
            .st1{fill:none;stroke:${color[0]};stroke-width:1.5;}
         </style>
         <polyline id="Path-2" class="st0" points="13,16 17,19 21,16 "/>
         <line id="Path" class="st1" x1="17" y1="5" x2="17" y2="19"/>
         <polyline id="Path-2-Copy" class="st0" points="11,8 7,5 3,8 "/>
         <line id="Path-Copy" class="st1" x1="7" y1="19" x2="7" y2="5"/>
         </svg>`
    )
};
