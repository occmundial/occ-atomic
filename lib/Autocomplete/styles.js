import idx from 'idx';

import spacing from '../subatomic/spacing';

export default {
    autoComplete: {
        position: 'relative'
    },
    droplist: {
        position: 'absolute',
        zIndex: 2,
        top: props => idx(props, _ => _.textfieldProps.label) || idx(props, _ => _.textfieldProps.lockHeight) ? spacing.xLarge : 40,
        left: 0,
        width: '100%'
    }
};
