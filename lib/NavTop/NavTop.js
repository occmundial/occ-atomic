import React from 'react';
import PropTypes from 'prop-types';

import Flexbox from '../Flexbox';
import Grid from '../Grid';
import NavItem from '../NavItem';

class NavTop extends React.Component {

    renderTopLink(item) {
        const { classes, blue } = this.props;
        return (
            <NavItem small white={blue} {...item} className={`${classes.navItem}${blue ? ` ${classes.whiteItem}` : ''}`}>
                {item.text}
            </NavItem>
        );
    }

    render() {
        const { classes, blue, top, isFluid } = this.props;
        return (
            <div className={`${classes.top} ${blue ? classes.blue : classes.white}`}>
                <Grid className={classes.fullHeight} fluid={isFluid}>
                    <Flexbox display="flex" alignItems="center" className={classes.fullHeight}>
                        <div>
                            {top && top.map(item => {
                                return this.renderTopLink(item);
                            })}
                        </div>
                    </Flexbox>
                </Grid>
            </div>
        );
    }
}

NavTop.propTypes = {
    classes: PropTypes.object.isRequired,
    top: PropTypes.array,
    blue: PropTypes.bool
};

export default NavTop;
