import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import icons from '../subatomic/icons';

const avatarStyles = {
    wrap: {
        position:'relative',
        width:'100%',
        height:'100%'
    },
    cont: {
        position:'absolute',
        top:'0',
        left:'0',
        width:'100%',
        height:'100%',
        borderRadius:'50%',
        overflow:'hidden'
    },
    m: {
        background:icons.base(icons.male.icon())
    },
    f: {
        background:icons.base(icons.female.icon())
    },
    capital: {
        fontFamily:fonts.body,
        fontSize:70*0.4,
        lineHeight:'70px',
        fontWeight:'600',
        background:'#dae1e5',
        color:'#afb8c0',
        textAlign:'center',
    }
};

const capitalLetter = (name) => {
    if (name) {
        let capitals = name.toUpperCase().split(" ");
        capitals = capitals.filter(Boolean);
        return ({capitals[0] ? capitals[0].charAt(0) : 'N' }{capitals[1] ? capitals[1].charAt(0) : 'O'});
    }
    return "";
};

const AvatarLayout = ({ classes, photo, gender, name, size }) => (
    <div className={classes.wrap}>
        {gender && <div className={`${classes.cont} ${classes[gender]}`} />}
        {(!gender && name) && <div className={`${classes.cont} ${classes.capital}`} style={size ? {fontSize:size*0.4, lineHeight:`${size}px`} : {}}>{capitalLetter(name)}</div>}
        {photo && <div className={classes.cont} style={{background:`url('${photo}') no-repeat center center / cover`}} />}
    </div>
);

AvatarLayout.propTypes = {
    classes: PropTypes.object,
    photo: PropTypes.string,
    gender: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number
};

const AvatarContent = injectSheet(avatarStyles)(AvatarLayout);

const styles = {
    circle: {
        position:'relative',
        width: props => props.size ? props.size : 70,
        height: props => props.size ? props.size : 70,
        borderRadius:'50%',
        overflow:'hidden'
    }
};

class Avatar extends React.Component {
    
    render() {
        const { classes, photo, gender, name, size, id, className, style } = this.props;
        return (
            <div className={classes.circle}>
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

export default injectSheet(styles)(Avatar);