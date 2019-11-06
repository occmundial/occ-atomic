import React from 'react';
import Icon from '../Icon';
import Flexbox from '../Flexbox';
import colors from '../subatomic/colors';
import PropTypes from 'prop-types';
import spacing from '../subatomic/spacing';

/**
* List Component
* It is meant to be used as a usual ul component
*/

class ListItem extends React.Component {
  render () {
    const { children, classes, icon, iconColor, svg, size, style, className, id, hierarchy } = this.props;
    let width = 0;
    let height = 0;
    switch (size) {
      case 'sm':
        width = spacing.small,
        height = spacing.small; 
        break;
      case 'bs':
        width = spacing.base;
        height = spacing.base; 
        break;
      case 'md':
        width = spacing.md;
        height = spacing.md; 
        break;
      case 'lg':
        width = spacing.large;
        height = spacing.large; 
        break;
      case 'xl':
        width = spacing.xLarge;
        height = spacing.xLarge; 
        break;
      default:
        width = spacing.base;
        height = spacing.base;
        break;
    }
    return (
      <div style={style} className={className} id={id}>
        <Flexbox display="flex" direction="col" style={hierarchy ? {marginLeft: (spacing.small * hierarchy)} : {}}>
          <Flexbox display="inline-flex" alignItems="start">
            <div className={classes.bulletContainer}>
              {icon && <Icon iconName={icon} className={classes.icon} colors={[iconColor]} width={width} height={height} />}
              {svg && svg}
            </div>
            {children}
          </Flexbox>
        </Flexbox>
      </div>
    );
  }
}


ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  /** React component to display on the list. */
  children: PropTypes.node,
  /** Icon name to show on the list. */
  icon: PropTypes.string,
  /** Icon color for the icon on the list. */
  iconColor: PropTypes.string,
  /** svg to display instead of atomic icon */
  svg: PropTypes.element,
  /** The button has five different sizes: sm, bs, md, lg, xl. Default is bs */
  size: PropTypes.oneOf([
    'sm', 'bs', 'md', 'lg', 'xl',
  ]),
  /** Hierarchy of the list 1-n. */
  hierarchy: PropTypes.number,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

ListItem.defaultProps = {
  iconColor: colors.ink,
  size: 'bs',
  hierarchy: 0,
  
};

export default ListItem;
