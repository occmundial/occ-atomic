import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

class Icon extends React.Component {
    
    render() {
        const { classes, className, style, id, onClick } = this.props;
        const IconType = onClick ? 'button' : 'span';
        return (
            <IconType id={id} className={`${classes.icon}${onClick ? ` ${classes.click}` : ''}${className ? ` ${className}` : ''}`} style={style} onClick={onClick} />
        );
    }
}

Icon.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
};

export default Icon;