import React from 'react';
import PropTypes from 'prop-types';
import AvatarContent from './AvatarContent';

/**
* The Avatar component shows a rounded avatar with a profile picture, a gender icon or the first two capital letters of a name.
* You can use more than one property as a fallback in case one of the props is empty or wrong.
*/
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

Avatar.defaultProps = {
    size: 70
};

Avatar.propTypes = {
    classes: PropTypes.object.isRequired,
    /** A url to show a photo as the avatar. */
    photo: PropTypes.string,
    /** Use the values 'm' or 'f' to show a default avatar with an icon representing the gender. */
    gender: PropTypes.oneOf([
        'f', 'm'
    ]),
    /** Pass a name to show two initials. */
    name: PropTypes.string,
    /** The size of the avatar. */
    size: PropTypes.number,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Avatar;
