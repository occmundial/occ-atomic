import shadows from '../tokens/shadows.json';

const transition = 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s';

export default {
    circle: {
        position:'relative',
        borderRadius:'50%',
        overflow:'hidden',
        outline: 'none'
    },
    editable: {
        cursor: 'pointer',
        transition,
        '&:focus-visible': {
            boxShadow: shadows['focus-bright-blue']
        }
    },
    disabled: {
        pointerEvents: 'none'
    }
};