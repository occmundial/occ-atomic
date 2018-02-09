import React from 'react';
import injectSheet from 'react-jss';
import v from '../elements/globals';

const styles = {
    company: {
        marginTop:'12px',
        display:'inline',
        cursor:'pointer !important'
    },
    btnContainer: {
        position:'relative',
        display:'inline-block',
        verticalAlign:'middle'
    },
    btnMenu: {
        cursor:'pointer',
        background:'none',
        border:'none',
        padding:'5px 10px 2px 10px',
        marginLeft:'10px',
        color:v.colors.white,
        transition:'0.3s all',
        borderRadius:'3px',
        '&:hover': {
            color:v.colors.blue,
            background:v.colors.white
        },
        '&:hover $menuIcon': {
            background:v.icons.base(v.icons.menu.iconHover)
        }
    },
    btnMenuOpen: {
        color:v.colors.blue,
        background:v.colors.white,
        '& $menuIcon': {
            background:v.icons.base(v.icons.menu.iconHover)
        }
    },
    userName: {
        paddingRight:'5px',
        margin:'0',
        display:'inline-block',
        overflow:'hidden',
        textOverflow:'ellipsis',
        maxWidth:'65px',
        whiteSpace:'nowrap'
    },
    menuIcon: {
        width:v.icons.menu.width,
        height:v.icons.menu.height,
        display:v.icons.menu.display,
        transition:'0.3s all',
        background:v.icons.base(v.icons.menu.icon)
    },
    dropdownMenu: {
        position:'absolute',
        top:'100%',
        zIndex:'1000',
        display:'none',
        float:'left',
        minWidth:'160px',
        padding:'5px 0',
        fontSize:'14px',
        textAlign:'left',
        listStyle:'none',
        backgroundColor:v.colors.white,
        boxShadow:'0 6px 12px rgba(0,0,0,.175)',
        margin:'13px 0 0 -187px',
        right:'0'
    },
    dropdownMenuOpen: {
        display:'block'
    },
    listAnchor: {
        textDecoration:'none',
        display:'block',
        padding:'0 10px',
        margin:'5px 0 5px 0',
        clear:'both',
        fontWeight:'400',
        lineHeight:'1.42857143',
        whiteSpace:'nowrap',
        color:'#000',
        cursor:'pointer',
        '&:hover': {
            textDecoration:'none',
            color:v.colors.blue
        }
    },
    signOut: {
        color:`${v.colors.pink} !important`,
    },
    separator: {
        height: '1px',
        background:'#ebebeb'
    }
    
};

class UserMenu extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    
    toggleMenu() {
        this.setState({
            open: !this.state.open
        });
        if (!this.state.open) {
            document.getElementsByTagName('body')[0].addEventListener("click", this.closeMenu);
        }
    }
    
    closeMenu() {
        this.setState({
            open: false
        });
        document.getElementsByTagName('body')[0].removeEventListener("click", this.closeMenu);
    }
    
    render() {
        const { open } = this.state;
        const { classes, config, properties, recruiterData, validEmail, showR11, signOut } = this.props;
        let accesoVersion =[];
        if (properties.length) {
            accesoVersion = properties.filter(prop => prop.propdescription == 'AccesoVersionAnterior');
        }
        return (
            <div id="CompanyMenu" className={classes.company}>
                <div className={classes.btnContainer}>
                    <button className={`${classes.btnMenu} ${open ? classes.btnMenuOpen : ''}`} onClick={this.toggleMenu}>
                        <p className={classes.userName}>Diana</p>
                        <i className={classes.menuIcon} />
                    </button>
                    <ul className={`${classes.dropdownMenu} ${open ? classes.dropdownMenuOpen : ''}`}>
                        <li>
                            <a className={classes.listAnchor} id="lnk-user-menu-datos-personales" href={config.urlRecluta11+config.datosPersonales}>Datos personales</a>
                        </li>
                        {( validEmail && (recruiterData.isadmin && recruiterData.typeaccount == "OCC" && (recruiterData.levelaccount == "Administrator" || recruiterData.levelaccount == "SubAdministrator"))) && (
                            <li>
                                <a className={classes.listAnchor} id="lnk-user-menu-admin-cuenta" href={config.urlRecluta11+config.adminCuenta}>Usuarios y permisos</a>
                            </li>
                        )}
                        <li>
                            <a className={classes.listAnchor} id="lnk-user-menu-estado-cuenta" href={config.urlRecluta11+config.estadoCuenta}>Estado de cuenta</a>
                        </li>
                        <li>
                            <a className={classes.listAnchor} id="lnk-user-menu-estado-cuenta" href={config.urlRecluta11+config.reportesCuenta}>Reportes de uso</a>
                        </li>
                        <li>
                            <a className={classes.listAnchor} id="lnk-user-menu-cambiar-pass" href={config.urlRecluta11+config.cambiarPass}>Cambiar contraseña</a>
                        </li>
                        <li className={classes.separator} />
                        <li>
                            <a className={classes.listAnchor} id="lnk-user-menu-asistencia" href={config.centroAyuda} target="_blank">Ayuda</a>
                        </li>
                        {(recruiterData.isadmin && recruiterData.typeaccount == "OCC" && recruiterData.levelaccount == "Administrator" && (properties.length && !(accesoVersion.length && accesoVersion[0].propvalue == "False"))) && (
                            <li>
                                <a className={classes.listAnchor} id="lnk-user-r11" onClick={showR11}>Ir a la versión anterior</a>
                            </li>
                        )}
                        <li className={classes.separator} />
                        <li className="dropdown-cerrar-sesion">
                            <a  className={`${classes.listAnchor} ${classes.signOut}`} id="salir" onClick={signOut}>Cerrar sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default injectSheet(styles)(UserMenu);