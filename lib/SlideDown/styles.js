import spacing from '../subatomic/spacing';

export default {
    wrapper: {
        marginBottom:spacing.small
    },
    button: {
        cursor:'pointer'
    },
    content: {
        transition:'0.3s all ease-out',
    },
    hide: {
        opacity:0,
        marginTop:-spacing.small,
        marginBottom:spacing.small,
        pointerEvents:'none'
    },
    show: {
        opacity:1,
        marginTop:0,
        marginBottom:0
    },
    tag: {
        marginTop:spacing.xTiny,
        marginLeft:spacing.tiny,
        pointerEvents:'none'
    },
    icon: {
        marginTop:spacing.xTiny,
        marginLeft:spacing.tiny
    }
};
