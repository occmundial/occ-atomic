import React from 'react';
import PropTypes from 'prop-types';

function getNextFocusElement(parentElement, activeElement) {
  if (activeElement?.nextElementSibling)
    return activeElement.nextElementSibling;
  return parentElement.firstChild;
}

function getPreviousFocusElement(
  parentElement,
  activeElement
) {
  if (activeElement?.previousElementSibling)
    return activeElement.previousElementSibling;
  return parentElement.lastChild;
}

function TabList({ children, tabRef, classes }) {

  const onKeyDownHandler = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        {
          e.preventDefault();
          const parentElement = tabRef?.current;
          if (parentElement.childElementCount > 1) {
            const { activeElement } = document;
            let nextFocusElement = getNextFocusElement(
              parentElement,
              activeElement
            );

            while (nextFocusElement) {
              if (nextFocusElement.getAttribute('disabled') === '')
                nextFocusElement = getNextFocusElement(
                  parentElement,
                  nextFocusElement
                );
              else {
                nextFocusElement.focus();

                let left =
                  nextFocusElement.offsetLeft > 0
                    ? nextFocusElement.offsetLeft -
                      tabRef?.current.parentElement.clientWidth / 2 +
                      nextFocusElement.clientWidth / 2
                    : 0;

                tabRef.current.parentElement.scrollTo({
                  behavior: 'smooth',
                  left: left
                });

                return;
              }
            }
          }
        }
        break;
      case 'ArrowLeft':
        {
          e.preventDefault();
          const parentElement = tabRef?.current;
          if (parentElement.childElementCount > 1) {
            const { activeElement } = document;
            let nextFocusElement = getPreviousFocusElement(
              parentElement,
              activeElement
            );

            while (nextFocusElement) {
              if (nextFocusElement.getAttribute('disabled') === '')
                nextFocusElement = getPreviousFocusElement(
                  parentElement,
                  nextFocusElement
                );
              else {
                nextFocusElement.focus();
                let left =
                  nextFocusElement.offsetLeft > 0
                    ? nextFocusElement.offsetLeft -
                      tabRef?.current.parentElement.clientWidth / 2 +
                      nextFocusElement.clientWidth / 2
                    : 0;

                tabRef.current.parentElement.scrollTo({
                  behavior: 'smooth',
                  left: left
                });
                return;
              }
            }
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={classes.container}
      ref={tabRef}
      onKeyDown={onKeyDownHandler}
      role="tablist"
    >
      {children}
    </div>
  );
}

TabList.defaultProps = {
  size: 'large'
};

TabList.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  tabRef: PropTypes.object,
  indexValueMap: PropTypes.object,
};

export default TabList;