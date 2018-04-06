import React from 'react';
import PropTypes from 'prop-types';
import AvatarContent from './AvatarContent';

class Avatar extends React.Component {
    
    render() {
        const { classes, photo, gender, name, size, id, className, style } = this.props;
        return (
            <div id={id} className={`${classes.circle}${className ? ` ${className}` : ''}`} style={style}>
                <AvatarContent photo={photo} gender={gender} name={name} size={size} />
            </div>
        );
    }
}

Avatar.propTypes = {
    classes: PropTypes.object,
    photo: PropTypes.string,
    gender: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Avatar;