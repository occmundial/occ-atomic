import React, { useCallback, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTabsContext } from '../context';

function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}


function debouce(func) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), 0);
  };
}

function TabIndicator({ tabRef, indexValueMap, size, classes }) {
  const isMounted = useIsMounted();
  const { currentValue } = useTabsContext();
  const [positionStyles, setPositionStyles] = useState({ left: 0, width: 0 });

  const updatePosition = useCallback(() => {
    const children = tabRef?.current?.children;

    if (children && indexValueMap.size) {
      const currentIndex = indexValueMap.get(currentValue);
      if (currentIndex >= 0) {
        const rect = children[currentIndex].getBoundingClientRect();
        const rectContainer = tabRef.current.getBoundingClientRect();
        setPositionStyles({
          width: children[currentIndex].clientWidth,
          left: rect.left - rectContainer.left
        });

        let left =
          children[currentIndex].offsetLeft > 0
            ? children[currentIndex].offsetLeft -
              tabRef?.current.parentElement.clientWidth / 2 +
              children[currentIndex].clientWidth / 2
            : 0;

        if (tabRef.current.parentElement.scrollTo)
          tabRef.current.parentElement.scrollTo({
            behavior: 'smooth',
            left: left
          });
      }
    }
  }, [tabRef, currentValue, indexValueMap]);

  useEffect(() => {
    if (isMounted.current) updatePosition();
  }, [updatePosition, isMounted]);

  useEffect(() => {
    let resizeObserver;
    if (tabRef?.current && isMounted.current) {
      resizeObserver = new ResizeObserver(
        debouce(entries => {
          const element = entries[0];
          const rectContainer = element.target.getBoundingClientRect();
          for (const child of element.target.children) {
            if (child.className.includes('selected')) {
              const rect = child.getBoundingClientRect();

              if (isMounted.current)
                setPositionStyles({
                  width: child.clientWidth,
                  left: rect.left - rectContainer.left
                });
            }
          }
        })
      );
      resizeObserver.observe(tabRef.current);
    }
    return () => {
      resizeObserver?.disconnect();
    };
  }, [tabRef, isMounted]);

  return (
    <div
      className={`${classes.container}${
        size === 'small' ? ` ${classes.small}` : ''
      }`}
      style={positionStyles}
    />
  );
}

TabIndicator.propTypes = {
  tabRef: PropTypes.object,
    classes: PropTypes.object.isRequired,
  indexValueMap: PropTypes.object,
  size: PropTypes.oneOf(['large', 'medium', 'small'])
};

export default TabIndicator;
