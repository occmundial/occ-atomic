import { colors } from '../../../build/index';

export default {
    navigation: {
        width: 230,
        overflowX:'auto',
        padding:15
    },
    ul: {
        paddingLeft:0,
        listStyle:'none'
    },
    li: {
        fontSize:15,
        padding:'3px 0'
    },
    a: {
        color:colors.textLink,
        textDecoration:'none',
        borderRadius:5,
        transition:'0.3s all',
        padding:'0 5px'
    }
};
