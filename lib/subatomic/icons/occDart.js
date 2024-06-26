import legacyColors from '../colors';
import colors from '../../tokens/colors.json';

const { icon: { brand } } = colors;
import iconSizes from '../iconSizes';

const { ink, inkLight, white } = legacyColors;

const icon = color => (
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
	<path fill="${color}" d="M44.5,19.9l6.9-1.3c0,0,1.3-0.2,3-1.3l5.4-4.1c0,0,0.8-0.9-1-1l-8.1-0.5c0,0-0.5,0-0.6,0.6c0,0,0.1,1-0.9,2
		l-5.4,5.4C43.7,19.7,43.7,20,44.5,19.9z"/>
	<path fill="${color}" d="M40.2,15.5l1.2-6.9c0,0,0.2-1.3,1.3-3l4.1-5.4c0,0,0.9-0.8,1.1,1l0.5,8.1c0,0,0,0.5-0.6,0.6c0,0-1-0.1-2,0.9
		l-5.4,5.4C40.4,16.3,40.1,16.4,40.2,15.5z"/>
	<path fill="${color}" d="M44.8,19.2c-0.1-0.1-0.2-0.2-0.3-0.3l-0.6,0.6l0,0l-2.1,2.1c-0.3,0.3-0.3,0.8-0.1,1.1c3.2,4.3,4.7,9.9,3.7,15.8
		c-1.5,8.8-8.7,15.5-17.5,16.7C14.6,57,3.3,45.9,4.7,32.7c0.9-8.6,8.8-16.8,17.3-18.1c5.7-0.8,11.1,0.7,15.3,3.7
		c0.3,0.3,0.8,0.2,1.1-0.1l2.7-2.7l0,0c-0.1-0.1-0.2-0.2-0.4-0.3c-5.4-4.2-12.5-6.4-20.1-5C10.4,12,2.2,20.1,0.4,30.3
		c-3.1,17.3,11.9,32.3,29.2,29.2c10.3-1.8,18.5-9.9,20.2-20.2C51.2,31.7,49.1,24.6,44.8,19.2z"/>
	<path fill="${color}" d="M37.4,26.1l-2.1,2.1c-0.3,0.3-0.3,0.7-0.1,1c1.1,1.8,1.6,4,1.5,6.3c-0.3,5.7-4.8,10.4-10.5,10.9
		C19,47,13,41,13.6,33.8c0.5-5.7,5.2-10.2,10.9-10.5c2.3-0.1,4.5,0.4,6.3,1.5c0.3,0.2,0.7,0.1,1-0.1l2.1-2.1c0.4-0.4,0.3-1.1-0.2-1.4
		c-2.7-1.7-5.9-2.7-9.4-2.5c-8.5,0.4-15.3,7.5-15.4,16C9,43.7,16.3,51,25.2,51c8.5,0,15.7-6.8,16-15.3c0.2-3.5-0.8-6.7-2.5-9.4
		C38.4,25.8,37.8,25.7,37.4,26.1z"/>
	<path fill="${color}" d="M30.9,32.3l-2.6,1.2c-0.4,0.2-0.6,0.6-0.5,1c0.1,0.3,0.1,0.7,0,1.1c-0.2,1-1.1,1.9-2.2,2
		c-1.8,0.3-3.4-1.3-3.1-3.1c0.2-1.1,1-1.9,2.1-2.2c0.4-0.1,0.7-0.1,1.1,0s0.8-0.1,0.9-0.5l1.2-2.6c0.2-0.5,0-1-0.5-1.2
		c-1-0.3-2.2-0.4-3.4-0.2c-3.1,0.5-5.6,3.1-5.9,6.3c-0.5,4.4,3,8.2,7.4,8.1c3.7-0.1,6.7-3,7-6.6c0.1-1,0-1.9-0.3-2.7
		C31.9,32.3,31.4,32.1,30.9,32.3z"/>
	</svg>`
);

const sharedProperties = {
    width: iconSizes.medium,
    height: iconSizes.medium,
    display: 'inline-block'
};

export const occDartBlack = {
	...sharedProperties,
	icon: () => icon(ink)
};

export const occDartGrey = {
    ...sharedProperties,
    icon: () => icon(inkLight)
};

export const occDartWhite = {
    ...sharedProperties,
    icon: () => icon(white)
};

export const occDartBlue = {
    ...sharedProperties,
    icon: () => icon(brand.default)
};
