import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import v from '../elements/globals';

import Container from '../elements/Container';
import Hidden from '../elements/Hidden';
import Visible from '../elements/Visible';
import SightLogo from '../elements/SightLogo';

import UserMenu from './UserMenu';
import HeadMenu from './HeadMenu';

const styles = {
    navbar: {
        marginTop:'80px',
        border:'none',
        fontFamily:v.fonts.body
    },
    master: {
        backgroundColor:v.colors.blue,
        padding:'0 15px 0 15px',
        minHeight:'60px',
        boxShadow:'0 1px 10px 0 rgba(0, 0, 0, 0.25)'
    },
    content: {
        borderTop:'1px solid transparent',
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
    '@media (max-width: 767px)': {
        master: {
            position:'fixed',
            top:'80px',
            left:'0',
            width:'100%',
            zIndex:'10'
        }
    },
    '@media (min-width: 1200px)': {
        master: {
            padding:'0 45px 0 45px'
        }
    }
};

class Header extends React.Component {
    render() {
        const { classes, title, config, recruiterData, validEmail, showR11 } = this.props;
        return (
            <div id="mainNav" className={classes.navbar}>
                <div className={classes.master}>
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
                        <Hidden><HeadMenu active="dashboard" /></Hidden>
                    </div>
                </div>
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