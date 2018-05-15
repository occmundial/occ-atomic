import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import icons from '../subatomic/icons';

const styles = {
    icon: {
        boxSizing:'border-box',
        width: props => props.width ? `${props.width}px` : icons[props.iconName] ? icons[props.iconName].width : '',
        height: props => props.height ? `${props.height}px` : icons[props.iconName] ? icons[props.iconName].height : '',
        display: props => props.display ? props.display : icons[props.iconName] ? icons[props.iconName].display : '',
        border:'0',
        outline:'0',
        background: props => props.iconName ? icons.base(icons[props.iconName].icon(props.colors ? props.colors : undefined)) : '',
        transition: props => props.transition ? props.transition : '0.3s all',
        '&:hover': {
            background: props => (props.hover && props.iconName) ? icons.base(icons[props.iconName].icon(props.hover)) : undefined
        }
    },
    click: {
        cursor:'pointer'
    }
};

class Icon extends React.Component {
    
    render() {
        const { classes, className, style, id, onClick, alt } = this.props;
        const IconType = onClick ? 'button' : 'span';
        return (
            <IconType id={id} className={`${classes.icon}${onClick ? ` ${classes.click}` : ''}${className ? ` ${className}` : ''}`} style={style} onClick={onClick} alt={alt} />
        );
    }
}

Icon.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    alt: PropTypes.string
};

export default injectSheet(styles)(Icon);