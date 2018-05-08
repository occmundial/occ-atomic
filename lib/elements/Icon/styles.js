import icons from '../../subatomic/icons';

export default {
    icon: {
        boxSizing:'border-box',
        width: props => props.width ? `${props.width}px` : icons[props.iconName] ? icons[props.iconName].width : '',
        height: props => props.height ? `${props.height}px` : icons[props.iconName] ? icons[props.iconName].height : '',
        display: props => props.display ? props.display : icons[props.iconName] ? icons[props.iconName].display : '',
        border:'0',
        outline:'0',
        background: props => props.iconName ? icons.base(icons[props.iconName].icon(props.colors ? props.colors : undefined)) : '',
        transition: props => props.transition ? props.transition : '0.3s all'
    },
    click: {
        cursor:'pointer'
    }
};