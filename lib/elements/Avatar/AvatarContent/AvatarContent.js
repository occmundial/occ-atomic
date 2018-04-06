import React from 'react';
import PropTypes from 'prop-types';

const capitalLetter = (name) => {
    if (name) {
        let capitals = name.toUpperCase().split(" ");
        capitals = capitals.filter(Boolean);
        return (<span>{capitals[0] ? capitals[0].charAt(0) : 'N' }{capitals[1] ? capitals[1].charAt(0) : 'O'}</span>);
    }
    return "";
};

const AvatarContent = ({ classes, photo, gender, name, size }) => (
    <div className={classes.wrap}>
        {gender && <div className={`${classes.cont} ${classes[gender]}`} />}
        {(!gender && name) && <div className={`${classes.cont} ${classes.capital}`} style={size ? {fontSize:size*0.4, lineHeight:`${size}px`} : {}}>{capitalLetter(name)}</div>}
        {photo && <div className={classes.cont} style={{background:`url('${photo}') no-repeat center center / cover`}} />}
    </div>
);

AvatarContent.propTypes = {
    classes: PropTypes.object,
    photo: PropTypes.string,
    gender: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number
};

export default AvatarContent;