import React from 'react';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import icons from '../subatomic/icons';

const styles = {
    menu: {
        background:colors.blue,
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
            background:icons.base(icons.dashboard.iconHover)
        },
        '&:hover $publications': {
            background:icons.base(icons.publications.iconHover)
        },
        '&:hover $talent': {
            background:icons.base(icons.talent.iconHover)
        },
        '&:hover $listAnchor': {
            color:colors.darkBlueH
        }
    },
    activeItem: {
        '& $dashboard, &:hover $dashboard': {
            background:icons.base(icons.dashboard.iconActive)
        },
        '& $publications, &:hover $publications': {
            background:icons.base(icons.publications.iconActive)
        },
        '& $talent, &:hover $talent': {
            background:icons.base(icons.talent.iconActive)
        },
        '& $listAnchor, &:hover $listAnchor': {
            color:colors.white
        }
    },
    listAnchor: {
        padding:'0',
        marginTop:'-4px',
        marginBottom:'2px',
        textAlign:'center',
        lineHeight:'20px',
        color:colors.darkBlue,
        textDecoration:'none !important',
        position:'relative',
        display:'block',
        transition:'0.3s all'
    },
    dashboard: {
        width:icons.dashboard.width,
        height:icons.dashboard.height,
        display:icons.dashboard.display,
        background:icons.base(icons.dashboard.icon),
        transition:'0.3s all'
    },
    publications: {
        width:icons.publications.width,
        height:icons.publications.height,
        display:icons.publications.display,
        background:icons.base(icons.publications.icon),
        transition:'0.3s all'
    },
    talent: {
        width:icons.talent.width,
        height:icons.talent.height,
        display:icons.talent.display,
        background:icons.base(icons.talent.icon),
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
                background:colors.cyan,
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

export default injectSheet(styles)(HeadMenu);