import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import v from '../elements/globals';
import $ from 'jquery';

import Container from '../elements/Container';

const styles = {
    footer: {
        backgroundColor:v.colors.black,
        height:'25px',
        margin:'0',
        padding:'0 40px',
        fontSize:'12px',
        color:v.colors.grey2,
        fontFamily:v.fonts.title
    },
    footerList: {
        listStyle:'none',
        width:'auto',
        margin:'0',
        padding:'4px 0 0 0'
    },
    listElement: {
        listStyle:'none',
        float:'left',
        margin:'0 50px 0 0',
        padding:'0',
        position:'relative'
    },
    link: {
        color:v.colors.grey2,
        cursor:'pointer',
        textDecoration:'none',
        '&:hover': {
            color:v.colors.white,
            textDecoration:'none'
        }
    },
    '@media (max-width: 991px)': {
        footer: {
            display: 'none !important'
        }
    },
    dropdownMenu: {
        display:'none',
        background:v.colors.black,
        position:'absolute',
        bottom:'calc(100% + 10px)',
        left:'50%',
        transform:'translateX(-50%)',
        minWidth:'160px',
        padding:'5px 0',
        fontSize:'12px',
        textAlign:'left',
        listStyle:'none',
        borderRadius:'4px',
        boxShadow:'0 6px 12px rgba(0,0,0,.175)',
        zIndex:'2'
    },
    dropdownElement: {
        float:'left',
        listStyle:'none'
    },
    dropdownLink: {
        color:v.colors.grey2,
        textDecoration:'none',
        padding:'3px 18px',
        lineHeight:'1.42857143',
        display:'block',
        '&:hover': {
            color:v.colors.white,
            textDecoration:'none'
        }
    },
    androidIcon: {
        width:v.icons.android.width,
        height:v.icons.android.height,
        display:v.icons.android.display,
        background:v.icons.base(v.icons.android.icon)
    },
    appleIcon: {
        width:v.icons.apple.width,
        height:v.icons.apple.height,
        display:v.icons.apple.display,
        background:v.icons.base(v.icons.apple.icon)
    }
}

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
        const { classes, children, config } = this.props;
        return (
            <Container fluid={true} extraClasses={classes.footer}>
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
                                <a className={classes.dropdownLink} href="http://www.occejecutivo.com/" target="_blank">Crear vacante en OCCEjecutivo</a>
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
        )
    }
}

export default injectSheet(styles)(Footer);