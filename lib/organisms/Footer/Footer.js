import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import $ from 'jquery';

import Container from '../../elements/layout/Container';

class Footer extends React.Component {
    
    showApps() {
        $('#showApps').fadeIn().click((e) => {
            e.stopPropagation();
        });
        $('#showApps a').click(function() {
            $('#showApps').fadeOut('fast');
        });
        $('body').click(function() {
            $('#showApps').fadeOut('fast');
        });
    }
    
    showProducts() {
        $('#showProducts').fadeIn('fast').click((e) => {
            e.stopPropagation();
        });
        $('#showProducts a').click(function() {
            $('#showProducts').fadeOut('fast');
        });
        $('body').click(function() {
            $('#showProducts').fadeOut('fast');
        });
    }
    
    render() {
        const { classes, config } = this.props;
        return (
            <Container fluid={true} className={classes.footer}>
                <ul className={classes.footerList}>
                    <li className={classes.listElement}>
                        <a id="lnk-footer-terms" className={classes.link} href={`${config.urlHome}${config.terminosCondiciones}`} target="_blank">Términos y condiciones</a>
                    </li>
                    <li className={classes.listElement}>
                        <a id="lnk-footer-privacy" className={classes.link} href={`${config.urlHome}${config.avisoPrivacidad}`} target="_blank">Aviso de privacidad</a>
                    </li>
                    <li className={classes.listElement}>
                        <a id="lnk-footer-privacy" className={classes.link} onClick={this.showApps}>APP Reclutador</a>
                        <ul id="showApps" className={classes.dropdownMenu} style={{width:'190px'}}>
                            <li className={classes.dropdownElement}>
                                <a className={classes.dropdownLink} href="https://play.google.com/store/apps/details?id=mx.com.occ.reclutadores" target="_blank"><i className={classes.androidIcon} /> Android</a>
                            </li>
                            <li className={classes.dropdownElement}>
                                <a className={classes.dropdownLink} href="https://itunes.apple.com/mx/app/recluta-movil/id1070287776?mt=8" target="_blank"><i className={classes.appleIcon} /> iPhone</a>
                            </li>
                        </ul>
                    </li>
                    <li className={classes.listElement}>
                        <a id="lnk-footer-amipci" className={classes.link} href="https://sellosdeconfianza.org.mx/MuestraCertificado.php?NUMERO_SERIE=MD_w088" target="_blank">AMIPCI</a>
                    </li>
                    <li className={classes.listElement}>
                        <a id="lnk-footer-privacy" className={classes.link} onClick={this.showProducts}>Más productos de OCC</a>
                        <ul id="showProducts" className={classes.dropdownMenu} style={{width:'210px'}}>
                            <li className={classes.dropdownElement}>
                                <a className={classes.dropdownLink} href="http://www.occejecutivo.com/" target="_blank">Publicar empleo en OCCEjecutivo</a>
                            </li>
                            <li className={classes.dropdownElement}>
                                <a className={classes.dropdownLink} href={config.urlCarrito} target="_blank">Listado de productos en carrito</a>
                            </li>
                            <li className={classes.dropdownElement}>
                                <a className={classes.dropdownLink} href={`${config.urlRecluta11}${config.infoRue}`} target="_blank">Red Universitaria de Empleo</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Container>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object,
    config: PropTypes.object,
};

export default Footer;