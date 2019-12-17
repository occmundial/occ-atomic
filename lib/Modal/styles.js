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
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        position:'relative',
        maxWidth:'100vw',
        maxHeight:'100vh',
        width: ({size}) => size === 'full' && '100%',
        [`@media screen and (max-width:${grid.xxs}px)`]: {
            width:'100%',
        }
    },
    cardBlock: {
        margin: spacing.gutter,
        [`@media screen and (max-width:${grid.xs}px)`]: {
            margin: ({size}) => size === 'full' && 0,
        },
        [`@media screen and (max-width:${grid.md}px)`]: {
            margin: ({size}) => size === 'full' && 0,
        },
        [`@media screen and (max-width:${grid.xl}px)`]: {
            margin: ({size}) => size === 'full' && 0,
        }
    },
    card: {
        maxWidth:'100%',
        cursor:'auto',
        transition:'0.3s opacity, 0.3s margin-top',
        padding:spacing.small,
        [`@media screen and (min-width:${grid.sm}px)`]: {
            padding:spacing.medium,
        }
    },
    cardShow: {
        animation:'0.3s modalFadeDown ease-out'
    },
    cardHide: {
        opacity:0,
        marginTop:-spacing.xLarge
    },
    full: {
        [`@media screen and (max-width:${grid.sm}px)`]: {
            padding:spacing.medium,
            minHeight: '100vh',
            borderRadius: '0px',
        }
    },
    xl: {
        width:1024
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
        background: ({ imgLeft }) => `url(${imgLeft.img}) no-repeat`,
        backgroundPosition: ({ imgLeft }) => `center ${imgLeft.position || 'center'}`,
        backgroundSize: ({ imgLeft }) => imgLeft.size === 'contain' ? '100% auto' : 'cover',
        backgroundColor: ({ imgLeft }) => imgLeft.color || null,
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
        background: ({ imgTop }) => `url(${imgTop.img}) no-repeat`,
        backgroundPosition: ({ imgTop }) => `${imgTop.position || 'center'} center`,
        backgroundSize: ({ imgTop }) => imgTop.size === 'contain' ? 'auto 100%' : 'cover',
        backgroundColor: ({ imgTop }) => imgTop.color || null,
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
