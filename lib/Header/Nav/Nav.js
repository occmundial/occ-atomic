import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';

import colors from '../../subatomic/colors';

class Nav extends React.Component {
    
    render() {
        const { classes, active, navigate, buttons } = this.props;
        return (
            <ul className={classes.menu}>
                {buttons.map(button => (
                    <li key={button.id} onClick={navigate} className={`${classes.listItem} ${active == button.id ? classes.activeItem : ''}`} id={button.id}>
                        <Icon iconName={button.icon} colors={active == button.id ? [colors.white] : [colors.darkBlue]} className={classes.icon} />
                        <a className={classes.listAnchor}>{button.label}</a>
                    </li>
                ))}
            </ul>
        );
    }
}

Nav.propTypes = {
    classes: PropTypes.object,
    active: PropTypes.string,
    navigate: PropTypes.func,
    buttons: PropTypes.array
};

export default Nav;