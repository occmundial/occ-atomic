import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Flexbox from '../Flexbox';
import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';

/**
* List Component
* It is meant to be used as a usual ul component
*/

const ListItem = ({
  children, classes, icon, iconColor, svg, size, style, className, id, hierarchy,
}) => {
    return (
      <div style={style} className={className} id={id}>
        <Flexbox display="flex" direction="col" style={hierarchy ? {marginLeft: (spacing.small * hierarchy)} : {}}>
          <Flexbox display="inline-flex" alignItems="start">
            <div className={classes.bulletContainer}>
              {icon && <Icon iconName={icon} className={classes.icon} colors={[iconColor]} width={spacing[size]} height={spacing[size]} />}
              {svg && svg}
            </div>
            {children}
          </Flexbox>
        </Flexbox>
      </div>
    );
  };


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
  /** The button has five different sizes: small, base, medium, large, xLarge. Default is base */
  size: PropTypes.oneOf([
    'small', 'base', 'medium', 'large', 'xLarge',
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
