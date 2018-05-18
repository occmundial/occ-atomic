export default {
    circle: {
        position:'relative',
        width: props => props.size ? props.size : 70,
        height: props => props.size ? props.size : 70,
        borderRadius:'50%',
        overflow:'hidden'
    }
};