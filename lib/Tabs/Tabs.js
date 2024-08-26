import React, {
  Children,
  cloneElement,
  useRef,
  isValidElement,
  forwardRef
} from 'react';
import PropTypes from 'prop-types';
import TabIndicator from './TabIndicator';
import TabList from './TabList';

const TabListRef = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <TabList tabRef={ref} {...props}>
      {children}
    </TabList>
  );
});

TabListRef.displayName = TabListRef;

function Tabs(props) {
  const ref = useRef(null);
  const { children, size, classes } = props;
  const indexValueMap = new Map();

  const renderTab = () => {
    return Children.map(children, (child, index) => {
      if (!isValidElement(child)) return null;

      const childValue =
        child.props.value === undefined ? index : child.props.value;

      indexValueMap.set(childValue, index);
      return cloneElement(child, {
        value: childValue,
        size
      });
    });
  };

  return (
    <div className={classes.container}>
      <TabListRef indexValueMap={indexValueMap} ref={ref}>
        {renderTab()}
      </TabListRef>
      <TabIndicator size={size} tabRef={ref} indexValueMap={indexValueMap} />
    </div>
  );
}

Tabs.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']).isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
};

export default Tabs;
