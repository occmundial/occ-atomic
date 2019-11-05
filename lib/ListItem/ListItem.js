import React from 'react';
import Icon from '../Icon';
import Flexbox from '../Flexbox';
import colors from '../subatomic/colors';
import PropTypes from 'prop-types';

/**
* List Component
* It is meant to be used as a usual ul component
*/

class ListItem extends React.Component {
  render () {
    const { children, classes, icon, iconColor, svg, size } = this.props;
    let width = 0;
    let height = 0;
    switch (size) {
      case 'sm':
        width = 16;
        height = 16; 
        break;
      case 'md':
        width = 24;
        height = 24; 
        break;
      case 'lg':
        width = 32;
        height = 32; 
        break;
      case 'xl':
        width = 48;
        height = 48; 
        break;
      case 'xxl':
        width = 72;
        height = 72; 
        break;
      default:
        width = 24;
        height = 24;
        break;
    }
    return (
      <Flexbox display="inline-flex" direction="row" alignItems="center">
        {icon && <Icon iconName={icon} className={classes.icon} colors={[iconColor]} width={width} height={height} />}
        {svg && <div className={classes.svg} />}
        {children}
      </Flexbox>
    );
  }
}


ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  svg: PropTypes.string,
  size: PropTypes.string,
};

ListItem.defaultProps = {
  iconColor: colors.ink,
};

export default ListItem;
