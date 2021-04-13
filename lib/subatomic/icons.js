import colors from './colors';

import {
	occHorizontalBlack,
	occHorizontalGrey,
	occHorizontalWhite,
	occHorizontalBlue
} from './icons/occHorizontal';
import {
	occVerticalBlack,
	occVerticalGrey,
	occVerticalWhite,
	occVerticalBlue
} from './icons/occVertical';
import {
	occDartBlack,
	occDartGrey,
	occDartWhite,
	occDartBlue
} from './icons/occDart';
import bars from './icons/bars';
import back from './icons/back';
import forward from './icons/forward';
import bullet from './icons/bullet';
import messages from './icons/messages';
import messagesSolid from './icons/messagesSolid';
import noMessages from './icons/noMessages';
import noMessagesSolid from './icons/noMessagesSolid';
import sendMessage from './icons/sendMessage';
import sendMessageSolid from './icons/sendMessageSolid';
import bell from './icons/bell';
import bellSolid from './icons/bellSolid';
import panel from './icons/panel';
import panelSolid from './icons/panelSolid';
import heart from './icons/heart';
import heartSolid from './icons/heartSolid';
import user from './icons/user';
import userSolid from './icons/userSolid';
import share from './icons/share';
import shareSolid from './icons/shareSolid';
import cart from './icons/cart';
import cartSolid from './icons/cartSolid';
import lock from './icons/lock';
import lockSolid from './icons/lockSolid';
import search from './icons/search';
import searchSolid from './icons/searchSolid';
import info from './icons/info';
import infoSolid from './icons/infoSolid';
import home from './icons/home';
import homeSolid from './icons/homeSolid';
import map from './icons/map';
import mapSolid from './icons/mapSolid';
import filter from './icons/filter';
import filterSolid from './icons/filterSolid';
import like from './icons/like';
import dislike from './icons/dislike';
import postulate from './icons/postulate';
import hire from './icons/hire';
import discard from './icons/discard';
import restore from './icons/restore';
import block from './icons/block';
import download from './icons/download';
import upload from './icons/upload';
import camera from './icons/camera';
import cameraSolid from './icons/cameraSolid';
import company from './icons/company';
import companySolid from './icons/companySolid';
import plusCircle from './icons/plusCircle';
import plusCircleSolid from './icons/plusCircleSolid';
import minusCircle from './icons/minusCircle';
import minusCircleSolid from './icons/minusCircleSolid';
import check from './icons/check';
import checkSolid from './icons/checkSolid';
import star from './icons/star';
import starSolid from './icons/starSolid';
import edit from './icons/edit';
import editSolid from './icons/editSolid';
import mail from './icons/mail';
import mailSolid from './icons/mailSolid';
import phone from './icons/phone';
import phoneSolid from './icons/phoneSolid';
import avatarSmile from './icons/avatarSmile';
import tag from './icons/tag';
import copy from './icons/copy';
import copySolid from './icons/copySolid';
import cross from './icons/cross';
import crossSolid from './icons/crossSolid';
import trash from './icons/trash';
import trashSolid from './icons/trashSolid';
import bulb from './icons/bulb';
import bulbSolid from './icons/bulbSolid';
import external from './icons/external';
import externalSolid from './icons/externalSolid';
import order from './icons/order';
import publications from './icons/publications';
import publicationsSolid from './icons/publicationsSolid';
import eye from './icons/eye';
import eyeClosed from './icons/eyeClosed';
import facebook from './icons/facebook';
import facebookSolid from './icons/facebookSolid';
import twitter from './icons/twitter';
import twitterSolid from './icons/twitterSolid';
import youtubeSolid from './icons/youtubeSolid';
import skype from './icons/skype';
import skypeSolid from './icons/skypeSolid';
import minus from './icons/minus';
import male from './icons/male';
import female from './icons/female';
import hourGlass from './icons/hourGlass';
import book from './icons/book';
import location from './icons/location';

export default {
	base: function (icon) {
		let encoded = Buffer.from(icon).toString('base64');
		return `url(data:image/svg+xml;base64,${encoded})`;
	},
	occHorizontalBlack,
	occHorizontalGrey,
	occHorizontalWhite,
	occHorizontalBlue,
	occVerticalBlack,
	occVerticalGrey,
	occVerticalWhite,
	occVerticalBlue,
	occDartBlack,
	occDartGrey,
	occDartWhite,
	occDartBlue,
	bars,
	back,
	forward,
	bullet,
	messages,
	messagesSolid,
	noMessages,
	noMessagesSolid,
	sendMessage,
	sendMessageSolid,
	bell,
	bellSolid,
	panel,
	panelSolid,
	heart,
	heartSolid,
	user,
	userSolid,
	share,
	shareSolid,
	cart,
	cartSolid,
	lock,
	lockSolid,
	search,
	searchSolid,
	info,
	infoSolid,
	home,
	homeSolid,
	map,
	mapSolid,
	filter,
	filterSolid,
	like,
	dislike,
	postulate,
	hire,
	discard,
	restore,
	block,
	download,
	upload,
	camera,
	cameraSolid,
	company,
	companySolid,
	plusCircle,
	plusCircleSolid,
	minusCircle,
	minusCircleSolid,
	check,
	checkSolid,
	star,
	starSolid,
	edit,
	editSolid,
	mail,
	mailSolid,
	phone,
	phoneSolid,
	avatarSmile,
	tag,
	copy,
	copySolid,
	cross,
	crossSolid,
	trash,
	trashSolid,
	bulb,
	bulbSolid,
	external,
	externalSolid,
	order,
	publications,
	publicationsSolid,
	eye,
	eyeClosed,
	facebook,
	facebookSolid,
	twitter,
	twitterSolid,
	youtubeSolid,
	skype,
	skypeSolid,
	minus,
	hourGlass,
	book,
	location,
	occatomic: {
		width: '45px',
		height: '45px',
		display: 'inline-block',
		icon: function (color = [colors.white]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 200.9 203" style="enable-background:new 0 0 200.9 203;" xml:space="preserve">
            <path fill="${color[0]}" d="M41.3,94.1c0.6-1.4,1.3-2.8,2-4.2c2.9-6,6.1-12,9.5-17.9c5.6-9.8,11.7-19,17.9-27.3c2.8-3.7,5.6-7.3,8.5-10.7
            	c0,0,0.1-0.1,0.1-0.1c-0.7-0.4-1.6-0.7-2.1-0.8c-1-0.3-1.9-0.5-2.9-0.8c-3.1-0.8-6.2-1.5-9.2-2.2c-31-6.5-52.8-2.7-61.1,10.8
            	c-9.1,14.7,0.3,36.5,24.8,59.5c0.3,5.9,1.3,11.7,3.1,17.3c1.2-3.6,2.6-7.3,4-11C37.6,102.4,39.4,98.3,41.3,94.1z M14.9,47.6
            	c4.6-7.4,20.3-9.6,41.6-6C44.1,50.7,35.1,63.8,31,79c-0.4,1.4-0.7,2.8-1,4.2C15.4,67.2,10.8,54.2,14.9,47.6z"/>
            <path fill="${color[0]}" d="M166.5,93.9c-0.3-0.3-0.6-0.6-1-0.9c0,0,0-0.1,0-0.1c-1.7-1.7-3.5-3.4-5.4-5c-2.2-2-4.5-3.9-6.9-5.9
            	c-0.8-0.7-1.6-1.3-2.4-2c-2.8-2.2-3.3-6.3-1-9.1c1.8-2.2,4.8-3,7.3-2c0.6,0.2,1.2,0.6,1.8,1c0.7,0.5,1.3,1.1,2,1.6
            	c2.4,2,4.8,4,7.2,6.1c1-3.4,1.9-6.4,2.1-7.1c1.2-4.2,2.5-9.7,3.9-16.3c4.4-25.4,0-43.3-12.3-50.5c-2.3-1.3-4.8-2.3-7.5-2.8
            	c-4.2-0.8-8.7-0.5-13.7,0.8c-12,3.2-25.8,12.7-39.4,26.6c-5.8,5.9-11.6,12.6-17.2,19.9c-6,7.8-11.8,16.4-17.2,25.5
            	c-0.8,1.3-1.5,2.6-2.3,3.9c-0.7,1.3-1.5,2.6-2.2,3.9c-2.6,4.6-5,9.4-7.3,14c-1.1,2.3-2.2,4.7-3.2,7c-1,2.3-2,4.7-3,7
            	c-0.7,1.8-1.4,3.6-2.1,5.4c-2,5.2-3.8,10.4-5.3,15.5c-0.4,1.4-0.8,2.7-1.1,4c-0.7,2.5-1.3,4.9-1.8,7.2c-5.9,26.1-3.4,45.1,6.8,54.5
            	c1.2,1.1,2.6,2.2,4.1,3c3.6,2.1,7.7,3.1,12.2,3.1c16.2,0,37.1-13.6,58-38.3c9.7,4.2,10.4,4.4,11.1,4.6c4.2,1.2,9.7,2.5,16.3,3.9
            	c6.5,1.1,12.4,1.7,17.9,1.7c12.6,0,22.3-3,28.4-8.7c1.7-1.6,3.1-3.3,4.2-5.3C206.6,144.3,195.1,119.6,166.5,93.9z M155.1,14.9
            	c5.7,3.3,8.3,12.9,7.4,26.2c-0.2,3.3-0.6,6.9-1.3,10.6c-1.1,5.3-2.2,9.9-3.2,13.6c-0.5-1-1-1.9-1.6-2.9
            	c-9.1-15.8-23.5-26.5-39.7-31.4c9.6-8.7,19-14.7,27-16.8c1.4-0.4,2.7-0.6,3.9-0.7C150.6,13.3,153.1,13.7,155.1,14.9z M122.3,140.2
            	c-7.7,4.5-16.3,6.7-25,6.7c-4.8,0-9.7-0.7-14.5-2.1c-10.9-3.2-20.1-9.8-26.5-18.9c1.7-4.8,3.5-9.7,5.6-14.6c0.9,2.1,1.9,4.1,3.1,6
            	c5.1,7.9,12.9,13.6,22.1,16.1c9.1,2.5,18.8,1.5,27.2-2.7c11.7-5.9,19.5-17.3,20.8-30.4c0.6-5.9,5.1-10.7,11-11.6l0.6-0.1l0.1,0.6
            	C149.9,109.8,140.2,129.8,122.3,140.2z M101.7,46.7c9.4,0.9,18.7,4.4,26.5,10.5l0.5,0.4l-0.4,0.5c-3.7,4.7-10.1,6.2-15.5,3.8
            	C106.2,59,99,58,92,58.9C95.2,54.6,98.5,50.5,101.7,46.7z M75.6,84.2c1.9-3.3,3.9-6.6,5.9-9.8c0,0,0,0,0,0
            	c9.6-6.6,22.2-6.2,31.3,0.9l0.5,0.4l-0.8,1c-3.2,4-8.3,6-13.5,5.1c-3.4-0.6-7,0.1-10,1.8c-3.7,2.2-6.3,5.8-7.2,10.1
            	c-0.9,4.3,0,8.6,2.6,12.2c4.1,5.6,11.7,7.7,18,4.9c3.8-1.7,6.6-4.7,8.1-8.6c2-5.2,6.4-9,11.7-9.8l0.6-0.1l0.1,0.6
            	c1.6,11-3.6,21.7-13.1,27.3c-4.1,2.4-8.7,3.6-13.3,3.6c-2.5,0-5-0.4-7.5-1.1c-7.1-2.1-12.8-6.8-16.2-13.4c-2.4-4.7-3.4-9.8-3-14.7
            	C71.7,91.1,73.6,87.6,75.6,84.2z M78.1,183.8c-9.9,5.8-17.8,7-22.4,4.3c-1.7-1-3.1-2.5-4.2-4.4c-4-7.1-4.5-20.3-1.1-36.9
            	c8.1,7.6,18,13.1,29,16c7.2,1.9,14.4,2.7,21.6,2.3C92.8,173.6,85,179.8,78.1,183.8z M149.3,159.9c-6.2-1.3-11.4-2.5-15.1-3.6
            	c-0.1-0.1-0.6-0.2-2-0.8c17.4-10.4,28.6-27.3,32.2-45.8c18,18,26.8,35.4,21.8,44.1c-0.1,0.2-0.2,0.4-0.4,0.6
            	c-3.4,5-12.1,7.4-24.1,6.9C157.8,161.2,153.7,160.7,149.3,159.9z"/>
            </svg>`;
		}
	},
	testing: {
		// Icon for testing in jest
		width: '5px',
		height: '5px',
		display: 'inline-block',
		icon: function (color = ['#000']) {
			return `testing - ${color[0]}`;
		}
	},
	plus: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = [colors.white]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M17.5,12.9h-4.6v4.6c0,0.3-0.2,0.5-0.5,0.5h-0.7c-0.3,0-0.5-0.2-0.5-0.5v-4.6H6.5c-0.3,0-0.5-0.2-0.5-0.5v-0.7
            	c0-0.3,0.2-0.5,0.5-0.5h4.6V6.5c0-0.3,0.2-0.5,0.5-0.5h0.7c0.3,0,0.5,0.2,0.5,0.5v4.6h4.6c0.3,0,0.5,0.2,0.5,0.5v0.7
            	C18,12.6,17.8,12.9,17.5,12.9z"/>
            </svg>`;
		}
	},
	close: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = ['#abb6bd']) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <polygon fill="${color[0]}" points="5.4,4 4,5.4 10.7,12.1 4.2,18.6 5.6,20 12.1,13.5 18.4,19.8 19.8,18.4 13.5,12.1 20,5.6 18.6,4.2
            	12.1,10.7 "/>
            </svg>`;
		}
	},
	warning: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = [colors.error]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M12,3c0.2,0,0.5,0.1,0.6,0.4l8.3,16.5c0.2,0.5-0.1,1.1-0.6,1.1H3.7c-0.5,0-0.8-0.6-0.6-1.1l8.3-16.5C11.5,3.1,11.7,3,12,3z
            	 M12,17c-0.6,0-1,0.4-1,1s0.4,1,1,1c0.6,0,1-0.4,1-1S12.6,17,12,17z M11,11v4c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1
            	C11.4,10,11,10.4,11,11z"/>
            </svg>`;
		}
	},
	moreOptions: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = [colors.bgWhite]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M10,19c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S10,17.9,10,19"/>
            <circle fill="${color[0]}" cx="12" cy="12" r="2"/>
            <circle fill="${color[0]}" cx="12" cy="5" r="2"/>
            </svg>`;
		}
	},
	money: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = [colors.black]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M12.2,19h-0.3c-0.4,0-0.8-0.4-0.8-0.8v-1C9.3,16.8,8,15.7,8,14h1.9c0,1.1,1,1.8,2.1,1.8c1.5,0,2.1-0.6,2.1-1.4
            	c0-0.9-0.3-1.3-2.1-1.8C9.9,12,8.2,11.5,8.2,9.6c0-1.5,1.3-2.4,2.8-2.7V5.8c0-0.4,0.4-0.8,0.8-0.8h0.3C12.6,5,13,5.4,13,5.8v1
            	c1.7,0.3,2.8,1.4,2.8,3H14c0-0.9-0.5-1.7-2-1.7c-1.3,0-2,0.7-2,1.4c0,1,1,1.2,2.5,1.6c2.6,0.8,3.4,1.6,3.4,3.3c0,1.4-1.1,2.5-3,2.7
            	v1C13,18.6,12.6,19,12.2,19z"/>
            </svg>`;
		}
	},
	go: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = ['#adb4bb']) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.7,0,12,0z M17.8,12.2l-4.7,4.8c0,0-0.1,0-0.2,0
            	c0,0,0,0,0,0l-0.1-0.1c0,0,0,0,0,0L12.2,16c0,0,0,0,0,0l-0.1-0.1c0,0,0-0.1,0-0.2l3-3h-9c0,0-0.1,0-0.1-0.1v-1.3c0,0,0-0.1,0.1-0.1
            	h9l-2.9-2.9c0,0,0,0,0,0l-0.1-0.1c0,0,0-0.1,0-0.2L12.1,8c0,0,0,0,0,0l0.8-0.8c0,0,0,0,0,0L13,7.1c0,0,0.1,0,0.2,0c0,0,0,0,0,0
            	l4.8,4.8C18,12,18,12,17.8,12.2L17.8,12.2z"/>
            </svg>`;
		}
	},
	arrowDown: {
		width: '14px',
		height: '14px',
		display: 'inline-block',
		icon: function (color = [colors.blue]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 14 14" style="enable-background:new 0 0 14 14;" xml:space="preserve">
            <path fill="${color[0]}" d="M11.5,4.2l0.3,0.4c0.1,0.1,0.1,0.2,0,0.3L7.1,9.8c-0.1,0.1-0.2,0.1-0.3,0c0,0,0,0,0,0L2.1,4.8
            	c-0.1-0.1-0.1-0.2,0-0.3l0.3-0.4c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0,0l4.1,4.4c0.1,0.1,0.2,0.1,0.3,0c0,0,0,0,0,0l4.1-4.4
            	C11.3,4.1,11.4,4.1,11.5,4.2C11.5,4.1,11.5,4.2,11.5,4.2z"/>
            </svg>`;
		}
	},
	arrowDownFilled: {
		width: '12px',
		height: '12px',
		display: 'inline-block',
		icon: function (color = [colors.blue]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 12 12" style="enable-background:new 0 0 12 12;" xml:space="preserve">
            <path fill="${color[0]}" d="M6,3.6h3.2C9.7,3.6,10,4,10,4.4c0,0.2-0.1,0.4-0.2,0.5L8.6,6.1l-2,2c-0.3,0.3-0.8,0.3-1.1,0l0,0l-2-2L2.2,5
            	C1.9,4.7,1.8,4.2,2.1,3.9c0.2-0.2,0.4-0.3,0.6-0.3C2.7,3.6,6,3.6,6,3.6z"/>
            </svg>`;
		}
	},
	loading: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = [colors.white]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <style type="text/css">
            	.st0{fill:url(#SVGID_1_);}
            </style>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="21" y1="12" x2="3" y2="12">
            	<stop  offset="0.1778" style="stop-color:${color[0]};stop-opacity:0"/>
            	<stop  offset="0.2271" style="stop-color:${color[0]};stop-opacity:0.1"/>
            	<stop  offset="0.3157" style="stop-color:${color[0]};stop-opacity:0.4"/>
            	<stop  offset="0.4525" style="stop-color:${color[0]};stop-opacity:0.7"/>
            	<stop  offset="0.5546" style="stop-color:${color[0]}"/>
            	<stop  offset="0.9278" style="stop-color:${color[0]}"/>
            </linearGradient>
            <path class="st0" d="M19.1,12c0.1,4-3.1,7.2-7.1,7.2S4.8,16,4.8,12S8,4.8,12,4.8V3c-5,0-9,4-9,9s4,9,9,9s9-4,9-9H19.1z"/>
            </svg>`;
		}
	},
	label: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = ['#ADB4BB']) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M13.7,9.8c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5C14.4,11.3,13.7,10.6,13.7,9.8
            	 M12.1,20.7l7.6-7.5c0.2-0.2,0.4-0.5,0.4-0.8V6.2C20,5.5,19.5,5,18.8,5h-6.1c-0.3,0-0.6,0.1-0.8,0.4l-7.6,7.5
            	c-0.5,0.5-0.5,1.2,0,1.7l6.1,6.1C10.9,21.1,11.6,21.1,12.1,20.7"/>
            </svg>`;
		}
	},
	unlock: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = ['#ADB4BB']) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M10.5,16.9c-0.9,0-1.6-0.8-1.6-1.7c0-0.9,0.7-1.7,1.6-1.7s1.6,0.8,1.6,1.7C12.1,16.1,11.4,16.9,10.5,16.9
            	 M16.5,3c-2.4,0-4.4,2-4.4,4.6v1.7H5.6C4.7,9.2,4,10,4,10.9v8.4C4,20.2,4.7,21,5.6,21h9.8c0.9,0,1.6-0.8,1.6-1.7v-8.4
            	c0-0.9-0.7-1.7-1.6-1.7h-0.8h-0.2V7.6c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2v0.4h2.2V7.6C20.9,5,18.9,3,16.5,3"/>
            </svg>`;
		}
	},
	bill: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = ['#ADB4BB']) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M12.1,16h-0.2c-0.3,0-0.5-0.2-0.5-0.5v-0.7c-1.1-0.2-1.9-0.9-1.9-2h1.2c0,0.7,0.6,1.2,1.3,1.2
            	c0.9,0,1.3-0.4,1.3-0.9c0-0.6-0.2-0.8-1.3-1.2c-1.3-0.4-2.4-0.7-2.4-2c0-1,0.8-1.6,1.8-1.8V7.5c0-0.3,0.2-0.5,0.5-0.5h0.2
            	c0.3,0,0.5,0.2,0.5,0.5v0.7c1.1,0.2,1.8,0.9,1.8,1.9h-1.1C13.3,9.5,13,9,12,9c-0.8,0-1.2,0.4-1.2,0.9c0,0.7,0.6,0.8,1.6,1.1
            	c1.6,0.5,2.2,1,2.2,2.1c0,0.9-0.7,1.6-1.9,1.7v0.7C12.6,15.8,12.4,16,12.1,16z M5,5C3.9,5,3,5.9,3,7v9c0,1.1,0.9,2,2,2h14
            	c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2H5z"/>
            </svg>`;
		}
	},
	clock: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = ['#ADB4BB']) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M12,2.7c5.2,0,9.3,4.2,9.3,9.3s-4.2,9.3-9.3,9.3S2.7,17.2,2.7,12S6.8,2.7,12,2.7z M12,19.5
            	c4.1,0,7.5-3.3,7.5-7.5S16.1,4.5,12,4.5S4.5,7.9,4.5,12C4.5,16.1,7.9,19.5,12,19.5z"/>
            <path fill="${color[0]}" d="M11.6,7.4H13v5.7l-4.9,3l-0.7-1.2l4.2-2.5V7.4z"/>
            </svg>`;
		}
	},
	studies: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = ['#ADB4BB']) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M6.1,13.1v3.3c0,0.2,0.1,0.3,0.2,0.4l5.7,3.2c0.1,0.1,0.3,0.1,0.4,0l5.7-3.2c0.1-0.1,0.2-0.2,0.2-0.4v-3.3
            	l-6,3.3c-0.1,0.1-0.3,0.1-0.4,0L6.1,13.1z"/>
            <path fill="${color[0]}" d="M12,4.1L3.2,8.9C3,9,2.9,9.3,3.1,9.5c0,0.1,0.1,0.1,0.2,0.2l8.8,4.9c0.1,0.1,0.3,0.1,0.4,0l7.8-4.3V16
            	c0,0.2,0.2,0.4,0.5,0.4h0.9c0.2,0,0.5-0.2,0.5-0.4V9.6c0-0.2-0.1-0.3-0.2-0.4l-9.3-5.1C12.3,4,12.2,4,12,4.1z"/>
            </svg>`;
		}
	},
	highlight: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = [colors.pink]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M14.7,13.7l-2.5-1.2l-2.5,1.2l0.5-2.6l-2-1.8L11,8.9l1.3-2.3l1.3,2.3l2.9,0.4L14.3,11L14.7,13.7z M5.3,2.5v18.6
            	c0,0.1,0,0.2,0.1,0.3c0.2,0.2,0.5,0.3,0.7,0.1l0,0l5.8-4c0.2-0.2,0.5-0.2,0.7,0l0,0l5.2,4c0.1,0.1,0.2,0.1,0.3,0.1
            	c0.3,0,0.5-0.2,0.5-0.4c0,0,0,0,0-0.1V2.5H5.3z"/>
            </svg>`;
		}
	},
	viewed: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = [colors.blue]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M13.6,7.8l-4.8,6.7l-3.4-2.7c-0.4-0.3-0.9-0.2-1.2,0.1C3.9,12.3,4,12.8,4.3,13c0,0,0,0,0,0l4.1,3.2
            	c0.2,0.1,0.4,0.2,0.6,0.2h0.1c0.2,0,0.4-0.2,0.6-0.4L15,8.8c0.3-0.4,0.2-0.9-0.2-1.1c0,0,0,0,0,0C14.4,7.4,13.9,7.5,13.6,7.8z"/>
            <path fill="${color[0]}" d="M18.4,7.8l-4.8,6.7l-1.3-1l-1,1.3l2,1.5c0.1,0.1,0.3,0.1,0.5,0.1h0.1c0.2,0,0.4-0.2,0.6-0.4l5.3-7.3
            	c0.3-0.4,0.2-0.9-0.2-1.1c0,0,0,0,0,0C19.2,7.4,18.7,7.5,18.4,7.8z"/>
            </svg>`;
		}
	},
	postulated: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		icon: function (color = [colors.green]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M15.6,11.1c-0.1-0.2-0.3-0.3-0.5-0.2c0,0,0,0,0,0c-0.2,0.1-0.3,0.3-0.2,0.5c0,0,0,0,0,0
            	c0.2,0.5,0.3,0.9,0.3,1.4c0.1,2.2-1.7,4-3.9,4.1c-2.2,0.1-4-1.7-4.1-3.9s1.7-4,3.9-4.1c0,0,0.1,0,0.1,0c0.5,0,1,0.1,1.5,0.3
            	c0.2,0.1,0.4,0,0.5-0.2c0,0,0,0,0,0c0.1-0.2,0-0.4-0.2-0.5c0,0,0,0,0,0c-0.5-0.2-1.1-0.3-1.7-0.3c-2.6,0-4.7,2-4.7,4.6
            	c0,2.6,2.1,4.6,4.7,4.6c0,0,0,0,0,0c2.6,0,4.7-2,4.7-4.6C15.9,12.2,15.8,11.6,15.6,11.1z"/>
            <path fill="${color[0]}" d="M17.8,10.9c-0.1-0.2-0.3-0.3-0.4-0.2c0,0,0,0,0,0c-0.2,0-0.3,0.2-0.3,0.4c0,0,0,0,0,0c0.2,0.5,0.2,1.1,0.2,1.7
            	c0,3.3-2.8,6-6.1,6c-3.3,0-6.1-2.7-6.1-6c0-3.3,2.8-6,6.1-6c0.6,0,1.1,0.1,1.7,0.2c0.2,0.1,0.4,0,0.4-0.2c0,0,0,0,0,0
            	c0.1-0.2,0-0.4-0.2-0.4c0,0,0,0,0,0c-0.6-0.2-1.2-0.3-1.9-0.3c-3.7,0-6.8,3-6.8,6.7c0,3.7,3.1,6.8,6.8,6.7c0,0,0,0,0,0
            	c3.7,0,6.8-3,6.8-6.7C18,12.2,17.9,11.5,17.8,10.9z"/>
            <path fill="${color[0]}" d="M13.7,12.6c0-0.2-0.2-0.3-0.4-0.3c-0.2,0-0.3,0.2-0.3,0.3v0.1c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8
            	s0.8-1.8,1.8-1.8c0,0,0,0,0,0h0.2c0.2,0,0.4-0.1,0.4-0.3c0-0.2-0.1-0.4-0.3-0.4c0,0,0,0,0,0h-0.2c-1.4,0-2.4,1.2-2.4,2.5
            	c0,1.4,1.2,2.4,2.5,2.4c1.3,0,2.4-1.1,2.4-2.5C13.7,12.7,13.7,12.6,13.7,12.6z"/>
            <path fill="${color[0]}" d="M19.6,6.9c-0.1-0.3-0.4-0.4-0.7-0.4h-1.3V5.2c0-0.3-0.2-0.5-0.4-0.7c-0.3-0.1-0.6-0.1-0.8,0.2l-2.1,2.1
            	C14.1,7,14,7.2,14,7.5v2l-2.9,2.9c-0.1,0.1-0.1,0.4,0,0.5c0,0,0,0,0,0c0.1,0.1,0.4,0.1,0.5,0c0,0,0,0,0,0l2.9-2.9h2
            	c0.3,0,0.6-0.1,0.8-0.3l2.1-2.1C19.6,7.5,19.7,7.2,19.6,6.9z M14.7,7.5c0-0.1,0-0.2,0.1-0.3l2.1-2v1.4l-2.2,2.2L14.7,7.5L14.7,7.5z
            	 M16.8,9.2c-0.1,0.1-0.2,0.1-0.3,0.1h-1.3l2.2-2.2h1.5L16.8,9.2z"/>
            </svg>`;
		}
	},
	android: {
		width: '12px',
		height: '12px',
		display: 'inline-block',
		icon: function (color = ['#A4C639']) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
            <path fill="${color[0]}" d="M15.1,6.6H5C4.7,6.6,4.6,6.8,4.6,7v8.5C4.6,15.8,4.7,16,5,16h1.8v2.9C6.8,19.5,7.3,20,8,20l0,0
            	c0.7,0,1.2-0.5,1.2-1.2V16h1.7v2.9c0,0.7,0.5,1.2,1.2,1.2l0,0c0.7,0,1.2-0.5,1.2-1.2V16h1.8c0.2,0,0.4-0.2,0.4-0.4V7
            	C15.5,6.8,15.4,6.6,15.1,6.6z"/>
            <path fill="${color[0]}" d="M2.8,6.6L2.8,6.6c-0.7,0-1.2,0.5-1.2,1.2v4.9c0,0.7,0.5,1.2,1.2,1.2l0,0c0.7,0,1.2-0.5,1.2-1.2V7.8
            	C4,7.2,3.5,6.6,2.8,6.6z"/>
            <path fill="${color[0]}" d="M17.3,6.6L17.3,6.6c-0.7,0-1.2,0.5-1.2,1.2v4.9c0,0.7,0.5,1.2,1.2,1.2l0,0c0.7,0,1.2-0.5,1.2-1.2V7.8
            	C18.5,7.2,17.9,6.6,17.3,6.6z"/>
            <path fill="${color[0]}" d="M5,6h10c0.3,0,0.5-0.2,0.4-0.5c-0.3-1.6-1.3-2.9-2.7-3.7l0.9-1.5c0.1-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2,0-0.3,0.1
            	l-0.9,1.6c-0.7-0.3-1.5-0.5-2.3-0.5c-0.8,0-1.6,0.2-2.3,0.5L6.9,0.1C6.8,0,6.7,0,6.6,0C6.5,0.1,6.4,0.2,6.5,0.3l0.9,1.5
            	C6,2.6,5,3.9,4.7,5.5C4.6,5.8,4.8,6,5,6z M13,3.7c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5
            	C12.8,3.3,13,3.5,13,3.7z M7.5,3.3C7.8,3.3,8,3.5,8,3.7C8,4,7.8,4.2,7.5,4.2C7.3,4.2,7.1,4,7.1,3.7S7.3,3.3,7.5,3.3z"/>
            </svg>`;
		}
	},
	playstore: {
		width: '12px',
		height: '12px',
		display: 'inline-block',
		icon: function (color = [colors.white]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M5.5,20.3C5.2,20.2,5,19.9,5,19.5V5.7C5,5.4,5.2,5.1,5.4,5l0,0l6.9,7.7L5.5,20.3L5.5,20.3z"/>
            <polygon fill="${color[0]}" points="6.4,20 14.7,15.4 12.7,13.1 6.4,20 "/>
            <polygon fill="${color[0]}" points="14.8,9.9 6.6,5.4 12.7,12.2 14.8,9.9 "/>
            <path fill="${color[0]}" d="M15.3,10.2l3.2,1.8c0.6,0.3,0.6,0.9,0,1.2l-3.3,1.8l-2.1-2.4L15.3,10.2L15.3,10.2z"/>
            </svg>`;
		}
	},
	apple: {
		width: '12px',
		height: '12px',
		display: 'inline-block',
		icon: function (color = ['#A8B1B8']) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
            <path fill="${color[0]}" d="M15.4,10.6c0-2.5,2.1-3.8,2.2-3.8c-1.2-1.7-3-2-3.7-2c-1.6-0.2-3,0.9-3.8,0.9s-2-0.9-3.3-0.9
            	c-1.7,0-3.3,1-4.1,2.5C0.9,10.5,2.2,15,3.9,17.5c0.8,1.2,1.8,2.6,3.2,2.5c1.3-0.1,1.7-0.8,3.3-0.8s2,0.8,3.3,0.8
            	c1.4,0,2.2-1.2,3.1-2.5c1-1.4,1.4-2.8,1.4-2.8C18.1,14.7,15.5,13.7,15.4,10.6z"/>
            <path fill="${color[0]}" d="M12.9,3.2c0.7-0.8,1.2-2,1-3.2c-1,0-2.2,0.7-2.9,1.5c-0.6,0.8-1.2,1.9-1.1,3.1C11.1,4.7,12.2,4,12.9,3.2z"/>
            </svg>`;
		}
	},
	appstore: {
		width: '12px',
		height: '12px',
		display: 'inline-block',
		icon: function (color = [colors.white]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path fill="${color[0]}" d="M15.4,7.6c1.9,0,3.1,1.8,3.1,1.8s-1.9,1-1.9,3.1c0,2.5,2.3,3.3,2.3,3.3S17.2,20,15.1,20c-1.2,0-1.2-0.7-2.8-0.7
            	c-1.3,0-1.8,0.7-2.8,0.7c-2,0-4.5-4.1-4.5-7.5C5,9,7.6,7.6,9.2,7.6c1.4,0,2,0.8,3.1,0.8C13.2,8.4,14,7.6,15.4,7.6z"/>
            <path fill="${color[0]}" d="M15.1,4c0.3,1.7-1.3,3.8-3.2,3.8C11.6,5.6,13.6,4.1,15.1,4z"/>
            </svg>`;
		}
	},
	sight: {
		width: '75px',
		height: '30px',
		display: 'block',
		icon: function (color = [colors.white]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 74.2 33.3" style="enable-background:new 0 0 74.2 33.3;" xml:space="preserve">
            <path fill="${color[0]}" d="M1.5,24.1l0.7-1.6c1.6,0.8,3.2,1.2,4.6,1.2s2.6-0.2,3.4-0.7c0.8-0.5,1.2-1.2,1.2-2.1c0-1.3-1.5-2.6-4.6-3.6
            	c-1.6-0.5-3-1.2-4-1.9c-1-0.8-1.5-1.8-1.5-3C1.3,10.9,1.9,9.8,3,9c1.1-1,2.6-1.4,4.6-1.4c0.8,0,1.7,0.1,2.7,0.4s1.8,0.6,2.4,1
            	L12,10.5c-0.7-0.3-1.4-0.6-2.1-0.9C9.2,9.5,8.4,9.4,7.5,9.4c-1.2,0-2.2,0.3-2.9,0.8c-0.8,0.5-1.2,1.2-1.2,2c0,0.7,0.4,1.3,1.2,1.8
            	s1.8,1,3.2,1.4c3.8,1.3,5.7,3.1,5.7,5.2c0,1.5-0.6,2.7-1.7,3.5c-1.2,0.8-2.8,1.3-5,1.3C6,25.4,5,25.3,4,25
            	C2.9,24.8,2.1,24.5,1.5,24.1"/>
            <polygon fill="${color[0]}" points="16.3,25 18.5,25 18.5,8.1 16.3,8.1 16.3,25 "/>
            <path fill="${color[0]}" d="M17.4,30.3c-0.5,0-0.9-0.2-1.2-0.5c-0.3-0.3-0.5-0.7-0.5-1.2s0.2-0.9,0.5-1.2c0.3-0.3,0.7-0.5,1.2-0.5
            	c0.4,0,0.8,0.2,1.2,0.5c0.3,0.3,0.5,0.7,0.5,1.2s-0.2,0.9-0.5,1.2C18.3,30.1,17.9,30.3,17.4,30.3L17.4,30.3z"/>
            <path fill="${color[0]}" d="M17.4,6.2c-0.5,0-0.9-0.2-1.2-0.5c-0.3-0.3-0.5-0.7-0.5-1.2s0.2-0.9,0.5-1.2c0.3-0.3,0.7-0.5,1.2-0.5
            	c0.4,0,0.8,0.2,1.2,0.5c0.3,0.3,0.5,0.7,0.5,1.2s-0.2,0.9-0.5,1.2C18.3,6,17.9,6.2,17.4,6.2L17.4,6.2z"/>
            <path fill="${color[0]}" d="M35.3,8.2l-0.5,1.3c-1.5-1.1-3-1.7-4.4-1.7c-1.6,0-3,0.4-4.2,1.2s-2.1,1.9-2.7,3.2c-0.7,1.4-1,2.9-1,4.6
            	c0,2.7,0.6,4.9,2,6.5s3.3,2.4,5.7,2.4c1.6,0,3-0.5,4.3-1.5v3.1c0,1.3-0.5,2.3-1.4,3c-0.9,0.7-2.1,1-3.6,1c-1.1-0.1-2-0.2-2.8-0.4
            	c-0.8-0.3-1.6-0.6-2.3-0.9l-0.7,1.6c0.7,0.4,1.6,0.7,2.8,1s2.2,0.4,3,0.4c1.4,0,2.7-0.3,3.8-0.8c1.1-0.5,1.9-1.2,2.5-2.1
            	c0.6-0.9,0.9-1.9,0.9-3v-19L35.3,8.2z M34.5,21.8c-1.2,1.2-2.7,1.8-4.4,1.9c-1.8,0-3.2-0.6-4.1-1.9s-1.4-3-1.4-5.2
            	c0.1-2.1,0.6-3.8,1.5-5.1c0.9-1.3,2.3-2,4.1-2c1,0,1.7,0.1,2.4,0.4c0.7,0.3,1.3,0.7,1.9,1.2V21.8z"/>
            <path fill="${color[0]}" d="M53.7,9.1c0.9,1,1.3,2.4,1.3,4.1v11.7h-2.2V13.6c0-2.8-1.1-4.2-3.3-4.2c-0.9,0-1.9,0.3-3.1,1
            	c-1.2,0.7-2.1,1.5-2.9,2.5v12h-2.2V0.7l2.2-0.3v10.2c0.7-0.8,1.7-1.5,2.9-2.1s2.3-0.9,3.4-0.9C51.5,7.6,52.8,8.1,53.7,9.1"/>
            <path fill="${color[0]}" d="M65,8l0.7,1.6h-3.8v10.6c0,0.9,0.2,1.6,0.6,2.1c0.4,0.5,1,0.8,1.8,0.8c0.5,0,0.9-0.1,1.4-0.3l0.4,1.8l-0.7,0.2
            	C65,24.9,64.5,25,63.8,25c-1.3,0-2.3-0.4-3-1.2c-0.7-0.8-1.1-1.9-1.1-3.3V9.6h-2.5V8h2.5V3.6l2.2-0.8V8C61.9,8,65,8,65,8z"/>
            <path fill="${color[0]}" d="M71.4,7.7c0-0.3-0.2-0.5-0.4-0.6c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.1-0.4-0.2-0.5c-0.2-0.1-0.4-0.2-0.8-0.2
            	c-0.3,0-0.6,0-0.9,0.1v2.3h0.5c0,0,0-0.9-0.1-0.9h0.3c0.3,0,0.5,0.1,0.5,0.4C70.9,8,71,8.3,71,8.3h0.6C71.5,8.2,71.5,8.1,71.4,7.7z
            	 M70.4,7h-0.3V6.3c0.1,0,0.2,0,0.3,0c0.3,0,0.5,0.2,0.5,0.4C70.9,6.9,70.7,7,70.4,7z"/>
            <path fill="${color[0]}" d="M70.5,4.7c-1.3,0-2.4,1.1-2.4,2.4c0,1.4,1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4S71.8,4.8,70.5,4.7z M70.4,9
            	c-1,0-1.8-0.9-1.8-1.9s0.8-1.9,1.8-1.9s1.8,0.9,1.8,1.9C72.2,8.2,71.4,9,70.4,9z"/>
            </svg>`;
		}
	},
	bubble: {
		width: '25px',
		height: '25px',
		display: 'block',
		icon: function (color = ['#DFEDFF']) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 50 41.9" style="enable-background:new 0 0 50 41.9;" xml:space="preserve">
            <path fill="${color[0]}" d="M25,0C11.2,0,0,9.1,0,20.3c0,4,1.5,7.8,4,10.9c0.3,0.4,1,1,0.8,1.8c-0.1,0.5-2.3,7.6-2.3,7.6
            	c-0.2,0.6,0.2,1.3,1,1.3c0.6,0,1-0.2,1-0.2s7.4-3,7.8-3.2c1-0.5,2.4-0.1,3,0.1c3,1,6.3,1.4,9.8,1.4C38.9,40,50,31.6,50,20.4
            	C50,9.1,38.8,0,25,0z"/>
            </svg>`;
		}
	},
	menu: {
		width: '16px',
		height: '16px',
		display: 'inline-block',
		icon: function (color = [colors.white]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
            <circle fill="${color[0]}" cx="7.9" cy="2.9" r="1.5"/>
            <circle fill="${color[0]}" cx="7.9" cy="12.9" r="1.5"/>
            <circle fill="${color[0]}" cx="7.9" cy="7.9" r="1.5"/>
            </svg>`;
		}
	},
	dashboard: {
		width: '25px',
		height: '20px',
		display: 'inline-block',
		icon: function (color = [colors.darkBlue]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 25 20" style="enable-background:new 0 0 25 20;" xml:space="preserve">
            <path fill="${color[0]}" d="M20.4,0H4.6C3.5,0,2.5,1,2.5,2.1v15.8c0,1.2,1,2.1,2.1,2.1h15.8c1.2,0,2.1-1,2.1-2.1V2.1C22.5,1,21.5,0,20.4,0z
            	 M9.3,14.9H7.2V7.4h2.1C9.3,7.4,9.3,14.9,9.3,14.9z M13.6,14.9h-2.1V4.2h2.1C13.6,4.2,13.6,14.9,13.6,14.9z M17.8,14.9h-2.1v-4.3
            	h2.1C17.8,10.6,17.8,14.9,17.8,14.9z"/>
            </svg>`;
		}
	},
	talent: {
		width: '25px',
		height: '20px',
		display: 'inline-block',
		icon: function (color = [colors.darkBlue]) {
			return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        	<path fill="${color[0]}" d="M49.2,45.6L41.6,38c3.2-4,5.1-9.1,5.1-14.6C46.7,10.4,36.3,0,23.3,0S0,10.4,0,23.3s10.4,23.3,23.3,23.3
        		c5.5,0,10.4-1.9,14.4-5.1l7.6,7.6c1.1,1.1,2.8,1.1,3.8,0C50.3,48.4,50.3,46.7,49.2,45.6z M5.1,23.3c0-10,8.3-18.2,18.2-18.2
        		s18.2,8.3,18.2,18.2c0,4.5-1.7,8.7-4.5,11.9h-0.2l0,0c0-3.6-2.8-6.6-6.6-6.6H16.1c-3.6,0-6.6,3-6.8,6.6C6.8,32,5.1,27.8,5.1,23.3z"
        		/>
        	<path fill="${color[0]}" d="M23.1,26.3c4,0,7.4-3.2,7.4-7.4c0-4-3.4-7.4-7.4-7.4c-4,0-7.4,3.4-7.4,7.4S19.1,26.3,23.1,26.3z"/>
            </svg>`;
		}
	},
	// Gender
	male,
	female
};
