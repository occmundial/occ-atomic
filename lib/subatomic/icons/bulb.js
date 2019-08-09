import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<polygon fill="${color[0]}" points="11.3,3 11.3,1 12.8,1 12.8,3 11.3,3 "/>
		<rect x="4.9" y="3.6" transform="matrix(0.7074 -0.7069 0.7069 0.7074 -1.6298 5.346)" fill="${color[0]}" width="1.5" height="2"/>
		<polygon fill="${color[0]}" points="2,11.8 2,10.3 4,10.3 4,11.8 2,11.8 "/>
		<rect x="17.4" y="3.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.1029 14.3588)" fill="${color[0]}" width="2" height="1.5"/>
		<polygon fill="${color[0]}" points="20,11.8 20,10.3 22,10.3 22,11.8 20,11.8 "/>
		<path fill="${color[0]}" d="M8.7,20.5h6.6c0,0.8-0.7,1.5-1.5,1.5h-0.2c-0.3,0.6-0.9,1-1.6,1c-0.7,0-1.2-0.4-1.6-1h-0.2
			C9.4,22,8.7,21.4,8.7,20.5z"/>
		<path fill="${color[0]}" d="M6.8,11c0-2.9,2.4-5.3,5.3-5.3c2.9,0,5.3,2.4,5.3,5.3c0,1.6-0.7,3-1.9,4c-0.8,0.6-1.3,1.5-1.5,2.5h-3.8
			c-0.2-0.9-0.7-1.8-1.4-2.4l0,0C7.5,14.1,6.8,12.6,6.8,11z M8.7,19h6.6v-0.7c0-0.8,0.4-1.6,1-2.1l0,0c1.5-1.3,2.4-3.2,2.4-5.2
			c0-3.7-3-6.8-6.8-6.8c-3.7,0-6.8,3-6.8,6.8c0,2,0.9,4,2.5,5.2c0.6,0.5,1,1.3,1,2.1C8.7,18.3,8.7,19,8.7,19z"/>
		</svg>`
    )
};
