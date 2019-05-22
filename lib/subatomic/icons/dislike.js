import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M18.3,4.3v8.3c0,0.7,0.5,1.2,1.3,1.2h1.1c0.7,0.1,1.2-0.6,1.2-1.2V4.3C22,3.6,21.4,3,20.7,3h-1.1
        	C18.9,3,18.3,3.6,18.3,4.3"/>
        <path fill="${color[0]}" d="M14,3H6.6C5.8,3,5.1,3.5,4.9,4.2l-2.8,6.3C2,10.7,2,10.9,2,11.2v1.8l0,0V13c0,1,0.8,1.8,1.8,1.8h4.9
        	c0.4,0,0.8,0.4,0.7,0.9l-0.7,3.2v0.3c0,0.3,0.1,0.7,0.4,1l0.4,0.4c0.3,0.3,0.8,0.3,1,0l5.4-5.6c0.3-0.3,0.5-0.8,0.5-1.2V5.6
        	C16.5,4.2,15.4,3,14,3"/>
        </svg>`
    )
};
