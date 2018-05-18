import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import $ from 'jquery';

import Container from '../../elements/layout/Container';
import Icon from '../../elements/Icon';

class Footer extends React.Component {
    
    showSub(button) {
        $('#'+button.sub.id).fadeIn('fast').click((e) => {
            e.stopPropagation();
        });
        $('#'+button.sub.id+' a').click(function() {
            $('#'+button.sub.id).fadeOut('fast');
        });
        $('body').click(function() {
            $('#'+button.sub.id).fadeOut('fast');
        });
    }
    
    render() {
        const { classes, buttons } = this.props;
        return (
            <Container fluid={true} className={classes.footer}>
                <ul className={classes.footerList}>
                    {
                        buttons.map(button => (
                            <li key={button.id} className={classes.listElement}>
                                <a className={classes.link} id={button.id} href={button.href} target={button.target} onClick={'sub' in button ? () => {this.showSub(button);} : button.onClick ? button.onClick : undefined}>{button.label}</a>
                                {button.sub && (
                                    <ul className={classes.dropdownMenu} id={button.sub.id} style={button.sub.style}>
                                        {button.sub.items.map(item => (
                                            <li key={item.id} className={classes.dropdownElement}>
                                                <a className={classes.dropdownLink} id={item.id} href={item.href} target={item.target}>{item.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))
                    }
                </ul>
            </Container>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object,
    buttons: PropTypes.array
};

export default Footer;