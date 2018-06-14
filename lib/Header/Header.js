import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Waypoint from 'react-waypoint';

import Container from '../Container';
import Hidden from '../Hidden';
import Visible from '../Visible';
import SightLogo from '../SightLogo';

/**
* This header component should be filled with a logo section, a nav section and a user menu.
* For the nav section, use the Nav component of this library. In desktop it will be displayed rght next to the logo. In mobile it will appear below the logo and user menu.
* For the user menu, use the Menu component of this library.
* This header includes a Messages/Chat icon, which you can configure with the messageIcon property.
* (NOTE: The example will not work properly in mobile, since it uses fixed positioning, breaking the Header because is not in the top of the page.)
* The documentation for Nav and Menu is not included here, since they are completely dependant of Header. Use the example below to see how to implement them.
*/
class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            shadow: true
        };
        this.removeShadow = this.removeShadow.bind(this);
        this.addShadow = this.addShadow.bind(this);
    }
    
    removeShadow() {
        this.setState({
            shadow: false
        });
    }
    
    addShadow() {
        this.setState({
            shadow: true
        });
    }
    
    render() {
        const { shadow } = this.state;
        const { classes, logo, nav, menu, title, active, messagesIcon } = this.props;
        return (
            <div id="mainNav" className={classes.navbar}>
                <div className={`${classes.master} ${shadow ? classes.shadow : ''}`}>
                    <div className={classes.content}>
                        <Hidden xs>
                            {logo}
                        </Hidden>
                        <Visible xs>
                            <div className={classes.title}>{title}</div>
                        </Visible>
                        <div className={classes.user}>
                            {(messagesIcon.hasOwnProperty('active') && messagesIcon.active) && (
                                <a id={messagesIcon.id} href={messagesIcon.href} className={classes.messages}>
                                    <i className={classes.bubble} />
                                </a>
                                )}
                            {menu}
                        </div>
                        <Hidden xs>
                            {nav}
                        </Hidden>
                    </div>
                </div>
                <Visible xs>
                    <div className={classes.separate}>
                        <Waypoint topOffset={60} onEnter={this.removeShadow} onLeave={this.addShadow}>
                            <div className={!shadow ? classes.shadow : ''}>
                                {nav}
                            </div>
                        </Waypoint>
                    </div>
                </Visible>
            </div>
        );
    }
}

Header.defaultProps = {
    messagesIcon: {}
};

Header.propTypes = {
    classes: PropTypes.object,
    /** Send any content as the logo of your app. */
    logo: PropTypes.node,
    /** The title of the section you're in. This will be visible in mobile. */
    title: PropTypes.string,
    /** Nav component with the required props. */
    nav: PropTypes.node,
    /** Menu component with the required props. */
    menu: PropTypes.node,
    /** Object with the properties to display the message/chat icon. To show it, pass an object with active: true, an id and the href property. */
    messagesIcon: PropTypes.object
};

export default Header;