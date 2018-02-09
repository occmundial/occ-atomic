import React from 'react';
import injectSheet from 'react-jss';
import v from '../elements/globals';

const styles = {
    menu: {
        background:v.colors.blue,
        margin:'0 10px',
        paddingLeft:'0',
        listStyle:'none',
        textAlign:'center'
    },
    listItem: {
        width:'auto',
        margin:'7px 30px 0 0',
        textAlign:'center',
        padding:'5px 0 0 0',
        display:'inline-block',
        fontSize:'12px',
        cursor:'pointer',
        position:'relative',
        '&:hover $dashboard': {
            background:v.icons.base(v.icons.dashboard.iconHover)
        },
        '&:hover $publications': {
            background:v.icons.base(v.icons.publications.iconHover)
        },
        '&:hover $talent': {
            background:v.icons.base(v.icons.talent.iconHover)
        },
        '&:hover $listAnchor': {
            color:v.colors.darkBlueH
        }
    },
    activeItem: {
        '& $dashboard, &:hover $dashboard': {
            background:v.icons.base(v.icons.dashboard.iconActive)
        },
        '& $publications, &:hover $publications': {
            background:v.icons.base(v.icons.publications.iconActive)
        },
        '& $talent, &:hover $talent': {
            background:v.icons.base(v.icons.talent.iconActive)
        },
        '& $listAnchor, &:hover $listAnchor': {
            color:v.colors.white
        }
    },
    listAnchor: {
        padding:'0',
        marginTop:'-4px',
        marginBottom:'2px',
        textAlign:'center',
        lineHeight:'20px',
        color:v.colors.darkBlue,
        textDecoration:'none !important',
        position:'relative',
        display:'block',
        transition:'0.3s all'
    },
    dashboard: {
        width:v.icons.dashboard.width,
        height:v.icons.dashboard.height,
        display:v.icons.dashboard.display,
        background:v.icons.base(v.icons.dashboard.icon),
        transition:'0.3s all'
    },
    publications: {
        width:v.icons.publications.width,
        height:v.icons.publications.height,
        display:v.icons.publications.display,
        background:v.icons.base(v.icons.publications.icon),
        transition:'0.3s all'
    },
    talent: {
        width:v.icons.talent.width,
        height:v.icons.talent.height,
        display:v.icons.talent.display,
        background:v.icons.base(v.icons.talent.icon),
        transition:'0.3s all'
    },
    '@media (min-width: 768px)': {
        menu: {
            float:'left'
        },
        listItem: {
            float:'left'
        }
    },
    '@media (max-width: 767px)': {
        menu: {
            clear:'both',
            textAlign:'center',
            margin:'0'
        },
        listItem: {
            margin:'0 25px 0 0',
            '&:last-child': {
                marginRight:'0'
            }
        },
        activeItem: {
            '&:after': {
                content:'""',
                width:'4px',
                height:'4px',
                display:'block',
                borderRadius:'50%',
                background:v.colors.cyan,
                position:'absolute',
                bottom:'0',
                left:'50%',
                marginBottom:'8px',
                transform:'translateX(-50%)'
            },
            '& $listAnchor': {
                display:'none'
            },
            '& $icon': {
                marginBottom:'14px'
            }
        },
        listAnchor: {
        },
        icon: {
        }
    }
};

class HeadMenu extends React.Component {
    render() {
        const { classes, active } = this.props;
        return (
            <ul className={classes.menu}>
                <li className={`${classes.listItem} ${active == "dashboard" ? classes.activeItem : ''}`} id="actividad">
                    <i className={`${classes.dashboard} ${classes.icon}`} />
                    <a className={classes.listAnchor}>Mi actividad</a>
                </li>
                <li className={`${classes.listItem} ${active == "publicaciones" ? classes.activeItem : ''}`} id="publicaciones">
                    <i className={`${classes.publications} ${classes.icon}`} />
                    <a className={classes.listAnchor}>Publicaciones</a>
                </li>
                <li className={`${classes.listItem} ${active == "talento" ? classes.activeItem : ''}`} id="talento">
                    <i className={`${classes.talent} ${classes.icon}`} />
                    <a className={classes.listAnchor}>Talento</a>
                </li>
            </ul>
        );
    }
}

export default injectSheet(styles)(HeadMenu);