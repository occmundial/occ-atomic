import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid';
import Flexbox from '../Flexbox';
import NavItem from '../NavItem';
import NavButton from '../NavButton';
import NavTop from '../NavTop';
import Button from '../Button';
import Icon from '../Icon';
import WindowSize from '../WindowSize';
import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';
import grid from '../subatomic/grid';

class NavTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      currentScroll: 0
    };
    this.determineVisibility = this.determineVisibility.bind(this);
  }

  componentDidMount() {
    const { fixed, hideOnScroll } = this.props;
    if (fixed && hideOnScroll) {
      this.getInitialScrollPosition();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.determineVisibility);
  }

  getInitialScrollPosition() {
    window.addEventListener('scroll', this.determineVisibility);
    this.setState({
      currentScroll: window.pageYOffset
    });
  }

  determineVisibility() {
    const { currentScroll } = this.state;
    this.setState({
      show: window.pageYOffset <= spacing.xLarge || window.pageYOffset <= currentScroll,
      currentScroll: window.pageYOffset
    });
  }

  renderItem(item) {
    if (item.type == 'link')
      return this.renderLink(item);
    else if (item.type == 'dropdownLink')
      return this.renderDropdownLink(item);
    else if (item.type == 'button')
      return this.renderButton(item);
    else if (item.type == 'navButton')
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
        {item.text} <Icon iconName="arrowDown" width={18} height={18} className={`${classes.arrow}${item.selected ? ` ${classes.arrowUp}` : ''}`} colors={blue ? [colors.white] : [colors.grey900]} />
      </NavItem>
    );
  }

  renderButton(item) {
    const { classes, blue } = this.props;
    return (
      <Button
        theme={blue ? "ghostWhite": "ghostGrey"}
        size={item.icon || item.iconRight ? 'lg' : 'md'}
        className={classes.button} 
        {...item}
      >
        {item.text}
      </Button>
    );
  }

  renderIcon(item) {
    const { classes, blue } = this.props;
    return (
      <div className={classes.iconWrap} key={item.key}>
        <NavButton className={classes.icon} white={blue} {...item} />
      </div>
    );
  }

  renderLogo(item) {
    const { classes } = this.props;
    return (
      <div data-testid={item.testId} className={classes.logo} key={item.key}>
        {item.logo}
      </div>
    );
  }

  renderCustom(item) {
    return (
      <div data-testid={item.testId} key={item.key}>
        {item.custom}
      </div>
    );
  }

  render() {
    const { show, currentScroll } = this.state;
    const { classes, blue, left, right, center, flexCenter, top, fixed, bottom, className, winWidth, zIndex, isResponsive } = this.props;
    const isFluid = winWidth < grid.xl;
    return (
      <div
        className={`${classes.container}${fixed ? ` ${classes.fixed} ${show ? classes.show : classes.hide}${currentScroll > 0 ? ` ${classes.isScrolled}` : ''}${bottom ? ` ${classes.bottom}` : ''}` : ''}${className ? ` ${className}` : ''}`}
        style={zIndex ? { zIndex } : null}
      >
        {top && (
          <NavTop blue={blue} top={top} isFluid={isFluid} />
        )}
        <div className={`${classes.nav} ${blue ? classes.blue : classes.white}`}>
          <Grid className={classes.grid + (isResponsive ? ` ${classes.gridFluid}` : '')} fluid={isFluid}>
            <Flexbox display="flex" justifyContent="between" alignItems="center" className={classes.tab}>
              {left && (
                <Flexbox display="flex" className={classes.left} alignItems="center">
                  {left.map(item => {
                    return this.renderItem(item);
                  })}
                </Flexbox>
              )}
              {flexCenter ? (
                <Flexbox display="flex" flex="1" className={classes.flexCenter} alignItems="center" justifyContent="between">
                  {flexCenter.map(item => {
                    return this.renderItem(item);
                  })}
                </Flexbox>
              ) : (
                <Flexbox flex="1" />
              )}
              {right && (
                <Flexbox display="flex" className={classes.right} alignItems="center">
                  {right.map(item => {
                    return this.renderItem(item);
                  })}
                </Flexbox>
              )}
              {center && (
                <Flexbox display="flex" className={classes.center} alignItems="center">
                  {center.map(item => {
                    return this.renderItem(item);
                  })}
                </Flexbox>
              )}
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
      'navButton',
      'custom',
      'logo'
    ]),
    text: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    link: PropTypes.string,
    theme: PropTypes.oneOf([
      'primary', 'secondary', 'tertiary', 'tertiaryWhite', 'ghostPink', 'ghostGrey', 'ghostWhite'
    ]),
    iconName: PropTypes.string,
    custom: PropTypes.node,
    testId: PropTypes.string
  })
);

NavTab.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Defines the components on the left side of the navigation bar. */
  left: positionPropTypes,
  /** Defines the components on the right side of the navigation bar. */
  right: positionPropTypes,
  /** Defines the components on the center of the navigation bar. */
  center: positionPropTypes,
  /** Defines the components of the navigation bar. */
  flexCenter: positionPropTypes,
  /** [Deprecated] Defines the Nav Top links. */
  top: positionPropTypes,
  /** Sets blue theme. */
  blue: PropTypes.bool,
  /** Sets the NavTab to a fixed position at the top. */
  fixed: PropTypes.bool,
  /** Hides the nav on scroll. */
  hideOnScroll: PropTypes.bool,
  /** Fixes the NavTab to the bottom of the screen (you have to also set fixed as true). */
  bottom: PropTypes.bool,
  /** Specifies the nav z-index (defaults to 999). */
  zIndex: PropTypes.number,
  /** Adds classes to nav container. */
  className: PropTypes.string,
  /** [Deprecated] Adds a simple responsive padding. */
  isFluid: PropTypes.bool,
  /** Adds a responsive padding. */
  isResponsive: PropTypes.bool
};

export default WindowSize(NavTab);
