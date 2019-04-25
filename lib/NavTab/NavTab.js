import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid';
import Flexbox from '../Flexbox';
import NavItem from '../NavItem';
import NavTop from '../NavTop';
import Button from '../Button';
import Icon from '../Icon';
import colors from '../subatomic/colors';

class NavTab extends React.Component {

    renderItem(item) {
        if (item.type == 'link')
            return this.renderLink(item);
        else if (item.type == 'dropdownLink')
            return this.renderDropdownLink(item);
        else if (item.type == 'button')
            return this.renderButton(item);
        else if (item.type == 'icon')
            return this.renderIcon(item);
        else if (item.type == 'logo')
            return this.renderLogo(item);
        else if (item.type == 'custom')
            return this.renderCustom(item);
    }

    renderLink(item) {
        const { classes, blue } = this.props;
        return (
            <NavItem white={blue} {...item} className={classes.navItem}>
                {item.text}
            </NavItem>
        );
    }

    renderDropdownLink(item) {
        const { classes, blue } = this.props;
        return (
            <NavItem white={blue} {...item} selected={false} className={classes.navItem}>
                {item.text} <Icon iconName="arrowDown" className={`${classes.arrow}${item.selected ? ` ${classes.arrowUp}` : ''}`} colors={blue ? [colors.white] : [colors.grey900]} />
            </NavItem>
        );
    }

    renderButton(item) {
        const { classes, blue } = this.props;
        const theme = blue ? item.theme == 'primary' ? 'primary' : 'ghostWhite' : item.theme == 'primary' ? 'ghostPink' : 'ghostGrey';
        return (
            <Button className={classes.button} {...item} theme={theme}>
                {item.text}
            </Button>
        );
    }

    renderIcon(item) {
        const { classes, blue } = this.props;
        return (
            <div className={classes.iconWrap} key={item.key}>
                <Icon className={classes.icon} colors={blue ? [colors.bgWhite] : [colors.grey900]} {...item} />
            </div>
        );
    }

    renderLogo(item) {
        const { classes } = this.props;
        return (
            <div className={classes.logo}>
                {item.logo}
            </div>
        );
    }

    renderCustom(item) {
        return (
            <div key={item.key}>
                {item.custom}
            </div>
        );
    }

    render() {
        const { classes, blue, left, right, center, top } = this.props;
        return (
            <div className={classes.container}>
                {top && (
                    <NavTop blue={blue} top={top} />
                )}
                <div className={`${classes.nav} ${blue ? classes.blue : classes.white}`}>
                    <Grid className={classes.grid}>
                        <Flexbox display="flex" justifyContent="between" alignItems="center" className={classes.tab}>
                            <Flexbox display="flex" className={classes.left} alignItems="center">
                                {left && left.map(item => {
                                    return this.renderItem(item);
                                })}
                            </Flexbox>
                            <Flexbox flex="1" />
                            <Flexbox display="flex" className={classes.right} alignItems="center">
                                {right && right.map(item => {
                                    return this.renderItem(item);
                                })}
                            </Flexbox>
                            <Flexbox display="flex" className={classes.center} alignItems="center">
                                {center && center.map(item => {
                                    return this.renderItem(item);
                                })}
                            </Flexbox>
                        </Flexbox>
                    </Grid>
                </div>
            </div>
        );
    }
}

const positionPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        key: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        type: PropTypes.oneOf([
            'button',
            'link',
            'dropdownLink',
            'icon',
            'custom'
        ]),
        text: PropTypes.string,
        onClick: PropTypes.func,
        selected: PropTypes.bool,
        link: PropTypes.string,
        theme: PropTypes.string,
        iconName: PropTypes.string,
        custom: PropTypes.node
    })
);

NavTab.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    /** Array of items to display in the left position. */
    left: positionPropTypes,
    /** Array of items to display in the right position. */
    right: positionPropTypes,
    /** Array of items to display in the center position. */
    center: positionPropTypes,
    /** Array of items to display in the top position. */
    top: positionPropTypes,
    /** Defines the theme of the Navtab as blue. */
    blue: PropTypes.bool
};

export default NavTab;
