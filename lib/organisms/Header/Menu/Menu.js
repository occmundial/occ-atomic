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
        const { classes, id, label, buttons } = this.props;
        return (
            <div id={id} className={classes.menu}>
                <div className={classes.btnContainer}>
                    <button className={`${classes.btnMenu} ${open ? classes.btnMenuOpen : ''}`} onClick={this.toggleMenu}>
                        <p className={classes.userName}>{label}</p>
                        <i className={classes.menuIcon} />
                    </button>
                    <ul className={`${classes.dropdownMenu} ${open ? classes.dropdownMenuOpen : ''}`}>
                        {buttons.map((button, index) => {
                            if (button == 'separator') {
                                return <li key={index} className={classes.separator} />;
                            } else {
                                return (<li key={button.id}>
                                    <a className={`${classes.listAnchor}${button.type == "signOut" ? ` ${classes.signOut}` : ''}`} {...button}>{button.label}</a>
                                </li>);
                            }
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object,
    config: PropTypes.object,
    label: PropTypes.string,
    buttons: PropTypes.array
};

export default Menu;