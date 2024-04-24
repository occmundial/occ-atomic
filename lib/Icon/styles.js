import icons from '../subatomic/icons';
import { oldToNewIcon, legacyIcons } from '../subatomic/mappedIcons';

export default {
    icon: {
        boxSizing:'border-box',
        display: props => props.display ? props.display : icons[oldToNewIcon[props.iconName]] ? icons[oldToNewIcon[props.iconName]].display : '',
        border:'0',
        outline:'0',
    },
    click: {
        cursor:'pointer'
    },
    oldIcon: {
        boxSizing:'border-box',
        width: props => props.width ? `${props.width}px` : icons[props.iconName] ? icons[props.iconName].width : '',
        height: props => props.height ? `${props.height}px` : icons[props.iconName] ? icons[props.iconName].height : '',
        display: props => props.display ? props.display : icons[props.iconName] ? icons[props.iconName].display : '',
        border:'0',
        outline:'0',
        background: props => props.iconName && legacyIcons[props.iconName] ? icons.base(icons[props.iconName].icon(props.colors ? props.colors : undefined)) : '',
        transition: props => props.transition ? props.transition : '0.3s all',
        '&:hover': {
            background: props => (props.hover && props.iconName) ? icons.base(icons[props.iconName].icon(props.hover)) : undefined
        }
    },
};