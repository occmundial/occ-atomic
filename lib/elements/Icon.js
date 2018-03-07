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
        background: props => props.iconName ? icons.base(icons[props.iconName].icon(props.colors ? props.colors : undefined)) : ''
    }
};

class Icon extends React.Component {
    
    render() {
        const { classes, className, style, id } = this.props;
        return (
            <span id={id} className={`${classes.icon}${className ? ` ${className}` : ''}`} style={style} />
        );
    }
}

Icon.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object
};

export default injectSheet(styles)(Icon);