import { fonts } from '@occmundial/occ-atomic';

export default {
    page: {
        padding:15
    },
    colorBlock: {
        width:285,
        maxWidth:'100%',
        borderRadius:10,
        fontFamily:fonts.body,
        fontSize:15,
        marginRight:24,
        marginBottom:24,
        overflow:'hidden',
        display:'inline-block'
    },
    colorRow: {
        width:'100%',
        display:'flex',
        alignItems:'center',
        padding:12,
        '&:hover': {
            '& $text': {
                opacity:0
            },
            '& $code': {
                opacity:1
            }
        }
    },
    colorName: {
        position:'relative',
        flex:1
    },
    text: {
        position:'absolute',
        top:0,
        left:0,
        opacity:1,
        transform:'translateY(-50%)',
        transition:'0.3s opacity'
    },
    code: {
        fontFamily:'monospace',
        position:'absolute',
        top:0,
        left:0,
        opacity:0,
        transform:'translateY(-50%)',
        transition:'0.3s opacity'
    },
    hex: {
        textTransform:'uppercase'
    }
};
