import spacing from '../subatomic/spacing';

export default {
    wrap: {
        display:'inline-block',
        position:'relative'
    },
    button: {
        cursor:'pointer'
    },
    icon: {
        marginLeft:spacing.xTiny,
        marginTop:1
    },
    cardWrap: {
        position:'absolute',
        top:'100%',
        right:0,
        opacity:0,
        marginTop:-spacing.small,
        transition:'0.3s all',
        pointerEvents:'none'
    },
    card: {
        padding:`${spacing.tiny}px ${spacing.small}px`
    },
    show: {
        opacity:1,
        marginTop:0,
        pointerEvents:'auto'
    },
    option: {
        cursor:'pointer',
        whiteSpace:'nowrap'
    }
};
