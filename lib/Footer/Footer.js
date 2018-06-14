import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import $ from 'jquery';

import Container from '../Container';
import Icon from '../Icon';

/**
* The Footer component handles an array of objects and sub-arrays to have a footer of two levels of depth.
* The items of frist level must have an id and a label. They also can have an href and target, or an onClick.
* If the item is going to have sub-items, they must be in sub. This is an array with a similar structure as the first level.
*/
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
    /** Array of objects. Each object must have all the properties wanted for that specific button and sub-buttons. */
    buttons: PropTypes.array
};

export default Footer;