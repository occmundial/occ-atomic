import React from 'react';
import PropTypes from 'prop-types';

export default function Drawer({
  classes,
  header,
  children,
  testId,
  show,
  onAnimationEnd
}) {  
  return (
    <div
      className={`${classes.container} ${show ? classes.show : classes.hide}`}
      onAnimationEnd={e => {
        if (onAnimationEnd) onAnimationEnd(e);
      }}
      data-testid={testId}
    >
      {header}
      <div className={classes.content}>{children}</div>
    </div>
  );
};

Drawer.propTypes = {
  classes: PropTypes.object,
  header: PropTypes.node,
  children: PropTypes.node,
  testId: PropTypes.string,
  show: PropTypes.bool,
  onAnimationEnd: PropTypes.func
};
