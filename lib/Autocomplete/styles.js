export default {
    autoComplete: {
        position:'relative'
    },
    droplist: {
        position:'absolute',
        zIndex:'2',
        top:props => (props.inputProps && props.inputProps.theme == 'flat') ? '70px' : '49px',
        left:'0',
        width:'100%'
    },
    labels: {
        marginTop:'-18px',
        width:'100%'
    }
};