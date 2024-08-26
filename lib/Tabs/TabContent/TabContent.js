import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTabsContext } from '../context';

function TabContent(props) {
  const [show, setShow] = useState(false);
  const { currentValue } = useTabsContext();
  const { children, value, testId, classes } = props;

  useEffect(() => {
    let timeout = setTimeout(() => setShow(currentValue === value), 150);
    return () => clearTimeout(timeout);
  }, [currentValue, value]);

  return (
    <div
      className={`${classes.container}${
        currentValue !== value ? ` ${classes.hide}` : ''
      }`}
      data-testid={testId}
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
    >
      <div
        style={{
          opacity: show ? 1 : 0,
          transition: 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s'
        }}
      >
        {children}
      </div>
    </div>
  );
}

TabContent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
};

export default TabContent;
