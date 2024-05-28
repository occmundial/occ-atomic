import idx from 'idx';

export default {
    autoComplete: {
        position: 'relative'
    },
    droplist: {
        position: 'absolute',
        zIndex: 2,
        top: props => idx(props, _ => _.textfieldProps.assistiveText) || idx(props, _ => _.textfieldProps.counter) && idx(props, _ => _.textfieldProps.maxLength) ? 'calc(100% - 21px)' : 'calc(100% + 8px)',
        left: 0,
        width: '100%'
    }
};
