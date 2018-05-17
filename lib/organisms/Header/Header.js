import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Waypoint from 'react-waypoint';

import Container from '../../elements/layout/Container';
import Hidden from '../../elements/layout/Hidden';
import Visible from '../../elements/layout/Visible';
import SightLogo from '../../elements/SightLogo';

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
        const { classes, logo, title, config, recruiterData, validEmail, showR11, navigate, active, nav, menu } = this.props;
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
                            <a id="div-r12-header-messages" href={config.ulrChats} className={classes.messages}>
                                <i className={classes.bubble} />
                            </a>
                            {menu}
                        </div>
                        <Hidden xs>{nav}</Hidden>
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

Header.propTypes = {
    classes: PropTypes.object,
    logo: PropTypes.node,
    title: PropTypes.string,
    config: PropTypes.object,
    recruiterData: PropTypes.object,
    validEmail: PropTypes.bool,
    showR11: PropTypes.func,
    navigate: PropTypes.func,
    active: PropTypes.string,
    nav: PropTypes.node
};

export default Header