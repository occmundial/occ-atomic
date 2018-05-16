import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

class Nav extends React.Component {
    render() {
        const { classes, active, navigate } = this.props;
        return (
            <ul className={classes.menu}>
                <li onClick={navigate} className={`${classes.listItem} ${active == "actividad" ? classes.activeItem : ''}`} id="actividad">
                    <i className={`${classes.dashboard} ${classes.icon}`} />
                    <a className={classes.listAnchor}>Mi actividad</a>
                </li>
                <li onClick={navigate} className={`${classes.listItem} ${active == "publicaciones" ? classes.activeItem : ''}`} id="publicaciones">
                    <i className={`${classes.publications} ${classes.icon}`} />
                    <a className={classes.listAnchor}>Publicaciones</a>
                </li>
                <li onClick={navigate} className={`${classes.listItem} ${active == "talento" ? classes.activeItem : ''}`} id="talento">
                    <i className={`${classes.talent} ${classes.icon}`} />
                    <a className={classes.listAnchor}>Talento</a>
                </li>
            </ul>
        );
    }
}

Nav.propTypes = {
    classes: PropTypes.object,
    active: PropTypes.string,
    navigate: PropTypes.func
};

export default Nav;