import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Waypoint from 'react-waypoint';
import v from '../elements/globals';

import Container from '../elements/Container';
import Hidden from '../elements/Hidden';
import Visible from '../elements/Visible';
import SightLogo from '../elements/SightLogo';

import UserMenu from './UserMenu';
import HeadMenu from './HeadMenu';

const styles = {
    navbar: {
        border:'none',
        fontFamily:v.fonts.body
    },
    shadow: {
        boxShadow:'0 1px 10px 0 rgba(0, 0, 0, 0.25) !important'
    },
    master: {
        backgroundColor:v.colors.blue,
        padding:'0 15px 0 15px',
        minHeight:'60px',
        boxShadow:'0 1px 10px 0 rgba(0, 0, 0, 0.25)'
    },
    content: {
        borderBottom:'1px solid transparent',
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.75)'
    },
    title: {
        width:'calc(100% - 150px)',
        fontSize:'16px',
        color:v.colors.white,
        paddingTop:'17px',
        paddingBottom:'5px',
        float:'left',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap'
    },
    user: {
        paddingTop:'9px',
        float:'right !important'
    },
    messages: {
        cursor:'pointer',
        outline:'0',
        display:'inline-flex',
        transform:'translateY(30%)'
    },
    bubble: {
        width:v.icons.bubble.width,
        height:v.icons.bubble.height,
        display:v.icons.bubble.display,
        background:v.icons.base(v.icons.bubble.icon)
    },
    separate: {
        marginTop:'60px',
        zIndex:'9',
        position:'relative'
    },
    '@media (max-width: 767px)': {
        master: {
            position:'fixed',
            top:'0',
            left:'0',
            width:'100%',
            zIndex:'10',
            boxShadow:'none'
        },
        content: {
            borderTop:'1px solid transparent'
        }
    },
    '@media (min-width: 1200px)': {
        master: {
            padding:'0 45px 0 45px'
        }
    }
};

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
        const { classes, title, config, recruiterData, validEmail, showR11, navigate, active } = this.props;
        return (
            <div id="mainNav" className={classes.navbar}>
                <div className={`${classes.master} ${shadow ? classes.shadow : ''}`}>
                    <div className={classes.content}>
                        <Hidden xs>
                            <SightLogo />
                        </Hidden>
                        <Visible xs>
                            <div className={classes.title}>{title}</div>
                        </Visible>
                        <div className={classes.user}>
                            <a id="div-r12-header-messages" href={config.ulrChats} className={classes.messages}>
                                <i className={classes.bubble} />
                            </a>
                            <UserMenu {...this.props} />
                        </div>
                        <Hidden xs><HeadMenu active="actividad" navigate={navigate} /></Hidden>
                    </div>
                </div>
                <Visible xs>
                    <div className={classes.separate}>
                        <Waypoint topOffset={60} onEnter={this.removeShadow} onLeave={this.addShadow}>
                            <div className={!shadow ? classes.shadow : ''}>
                                <HeadMenu active={active} navigate={navigate} />
                            </div>
                        </Waypoint>
                    </div>
                </Visible>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
    config: PropTypes.object,
    recruiterData: PropTypes.object,
    validEmail: PropTypes.bool
};

export default injectSheet(styles)(Header);