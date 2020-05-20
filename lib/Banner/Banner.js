import React from 'react';
import PropTypes from 'prop-types';
import Flexbox from '../Flexbox';
import WindowSize from '../WindowSize';
import Text from '../Text';
import Icon from '../Icon';
import grid from '../subatomic/grid';
import colors from '../subatomic/colors';

const Banner = ({
  id, style, className, classes, children, onClose, winWidth,
}) => {
  const isMobile = winWidth < grid.xs;
  return (
    <div id={id} className={className} style={style}>
      <Flexbox display="flex" className={classes.container}>
        <Flexbox flex="1" className={classes.textFlex}>
          <Text white micro={isMobile} tag="div" className={classes.textBanner}>
            { children }
          </Text>
        </Flexbox>
        <Flexbox className={classes.iconFlex}>
          <Icon iconName="close" colors={[colors.bgWhite]} onClick={onClose} className={classes.icon} />
        </Flexbox>
      </Flexbox>
    </div>
  );
};

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
  winWidth: PropTypes.number,
  /** Text of the tip. If you put text between two * characters that text will be displayed as bold. */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  /** Icon name to show on the left. */
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
};

export default WindowSize(Banner);
