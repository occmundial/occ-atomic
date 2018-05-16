import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

class Menu extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    
    toggleMenu(e) {
        e.stopPropagation();
        this.setState({
            open: !this.state.open
        });
        if (!this.state.open) {
            window.addEventListener("click", this.closeMenu);
        }
    }
    
    closeMenu() {
        this.setState({
            open: false
        });
        window.removeEventListener("click", this.closeMenu);
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

Menu.propTypes = {
    classes: PropTypes.object,
    config: PropTypes.object,
    properties: PropTypes.array,
    recruiterData: PropTypes.object,
    validEmail: PropTypes.bool,
    showR11: PropTypes.func,
    signOut: PropTypes.func
};

export default Menu;