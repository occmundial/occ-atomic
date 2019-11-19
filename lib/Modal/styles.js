import spacing from '../subatomic/spacing';
import grid from '../subatomic/grid';
import colors from '../subatomic/colors';

export default {
    '@global': {
        body: {
            overflow:'hidden'
        }
    },
    '@keyframes modalFadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    '@keyframes modalFadeDown': {
        from: { opacity: 0, marginTop: -spacing.xLarge },
        to: { opacity: 1, marginTop: 0 }
    },
    overlay: {
        position:'fixed',
        width:'100%',
        height:'100%',
        background:'rgba(0, 0, 5, 0.85)',
        top:0,
        left:0,
        zIndex:1000,
        transition:'0.3s all',
        cursor:'pointer'
    },
    overlayShow: {
        animation:'0.3s modalFadeIn linear'
    },
    overlayHide: {
        opacity:0
    },
    noClose: {
        cursor:'default'
    },
    cardWrapper: {
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)',
        maxWidth:'100vw',
        maxHeight:'100vh',
        padding:spacing.gutter
    },
    card: {
        maxWidth:'100%',
        cursor:'auto',
        transition:'0.3s opacity, 0.3s margin-top',
        padding:spacing.small,
        [`@media screen and (min-width:${grid.sm}px)`]: {
            padding:spacing.medium
        },
    },
    cardShow: {
        animation:'0.3s modalFadeDown ease-out'
    },
    cardHide: {
        opacity:0,
        marginTop:-spacing.xLarge
    },
    lg: {
        width:820
    },
    md: {
        width:520,
        [`@media screen and (max-width:${grid.sm-1}px)`]: {
            width:322,
            maxWidth:'100%'
        }
    },
    sm: {
        width:322,
        maxWidth:'100%'
    },
    top: {
        marginBottom:spacing.small
    },
    title: {},
    closeIcon: {
        height:spacing.medium,
        display:'flex',
        alignItems:'center'
    },
    content: {
        maxHeight: props => `calc(100vh - ${props.imgTop ? 320 : 192}px)`,
        overflowX:'auto',
        marginLeft:-spacing.small,
        marginRight:-spacing.small,
        paddingLeft:spacing.small,
        paddingRight:spacing.small,
        transition:'0.1s height',
        [`@media screen and (min-width:${grid.sm}px)`]: {
            marginLeft:-spacing.medium,
            marginRight:-spacing.medium,
            paddingLeft:spacing.medium,
            paddingRight:spacing.medium,
        },
        '&::-webkit-scrollbar': {
            width:6,
        },
        '&::-webkit-scrollbar-thumb': {
            background:colors.grey200,
            borderRadius:3
        }
    },
    bottom: {
        textAlign:'right',
        marginTop:spacing.tiny
    },
    secBtn: {
        marginTop:spacing.small
    },
    mainBtn: {
        marginLeft:spacing.base,
        marginTop:spacing.small
    },
    imgLeft: {
        width: 200,
        background: props => `url(${props.imgLeft}) no-repeat center center / cover`,
        borderRadius: [spacing.radius, 0, 0, spacing.radius],
        marginLeft: -spacing.small,
        marginTop: -spacing.small,
        marginBottom: -spacing.small,
        marginRight: spacing.small,
        [`@media screen and (min-width:${grid.sm}px)`]: {
            marginLeft: -spacing.medium,
            marginTop: -spacing.medium,
            marginBottom: -spacing.medium,
            marginRight: spacing.medium
        }
    },
    imgTop: {
        position: 'relative',
        height: 128,
        background: props => `url(${props.imgTop}) no-repeat center center / cover`,
        borderRadius: [spacing.radius, spacing.radius, 0, 0],
        marginLeft: -spacing.small,
        marginTop: -spacing.small,
        marginBottom: spacing.small,
        marginRight: -spacing.small,
        [`@media screen and (min-width:${grid.sm}px)`]: {
            marginLeft: -spacing.medium,
            marginTop: -spacing.medium,
            marginBottom: spacing.medium,
            marginRight: -spacing.medium
        }
    },
    closePosition: {
        position: 'absolute',
        top: spacing.small,
        right: spacing.small,
        [`@media screen and (min-width:${grid.sm}px)`]: {
            top: spacing.medium,
            right: spacing.medium
        }
    }
};
