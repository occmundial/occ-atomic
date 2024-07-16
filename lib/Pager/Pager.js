import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Page from './Page';

/** This pager allows the user to navigate between pages with 'Next' and 'Previous' buttons and numerical buttons. */
export default function Pager({
  classes,
  currentPage,
  onPageChange,
  pageCount = 10,
  centerPages = 3,
  marginPages = 2,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  breakSymbol = '...',
  hideNumbers,
  disabled,
  className
}) {
  const handlePageSelected = useCallback(
    (newPage) => {
      if (currentPage === newPage) return;
      if (onPageChange) onPageChange(newPage);
    },
    [currentPage, onPageChange]
  );

  useEffect(() => {
    if (currentPage > pageCount || currentPage < 1) {
      handlePageSelected(1);
    }
  }, [currentPage, pageCount, handlePageSelected]);

  const handlePrevPage = () => {
    if (currentPage > 1) handlePageSelected(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) handlePageSelected(currentPage + 1);
  };

  const addPage = (page) => {
    const pageData = {
      key: page.toString(),
      type: 'page',
      selected: currentPage === page
    };
    return pageData;
  };

  const getStartAndEndPages = () => {
    let startPage = Math.max(
      currentPage - Math.floor(centerPages / 2),
      marginPages + 1
    );
    let endPage = Math.min(startPage + centerPages - 1, pageCount - marginPages);

    if (endPage === pageCount - marginPages) {
      startPage = Math.max(endPage - centerPages + 1, marginPages + 1);
    }

    return { startPage, endPage };
  };

  function getPagination() {
    const elements = [];

    if (pageCount <= centerPages + marginPages * 2) {
      for (let i = 1; i <= pageCount; i++) {
        elements.push(addPage(i));
      }
    } else {
      for (let i = 1; i <= marginPages; i++) {
        elements.push(addPage(i));
      }

      const { startPage, endPage } = getStartAndEndPages();

      if (currentPage > marginPages + 1 && startPage > marginPages + 1) {
        elements.push({ key: 'left-break', type: 'break' });
      }

      for (let i = startPage; i <= endPage; i++) {
        elements.push(addPage(i));
      }

      if (currentPage < pageCount - marginPages - 1) {
        elements.push({ key: 'right-break', type: 'break' });
      }

      for (let i = pageCount - marginPages + 1; i <= pageCount; i++) {
        elements.push(addPage(i));
      }
    }

    return elements;
  }

  return (
    <div className={`${classes.pager}${className ? ` ${className}` : ''}`}>
      <Button
        className={classes.prev}
        disabled={currentPage === 1 || disabled}
        theme="secondary"
        onClick={handlePrevPage}
        icon="arrow-left"
        size={!previousLabel ? 'lg' : 'sm'}
      >
        {previousLabel}
      </Button>
      {!hideNumbers &&
        getPagination().map(({ key, type, selected }) => {
          if (type === 'page') {
            return (
              <Page
                key={key}
                onClick={() => handlePageSelected(Number(key))}
                selected={selected}
                page={Number(key)}
                disabled={disabled}
              />
            );
          }
          return <Page key={key} page={breakSymbol} disabled={disabled} />;
        })
      }
      <Button
        className={classes.next}
        disabled={currentPage === pageCount || disabled}
        theme="secondary"
        onClick={handleNextPage}
        iconRight="arrow-right"
        size={!nextLabel ? 'lg' : 'sm'}
      >
        {nextLabel}
      </Button>
    </div>
  );
}

Pager.propTypes = {
  classes: PropTypes.object,
  /** The current page number. */
  currentPage: PropTypes.number.isRequired,
  /** The total number of pages. */
  pageCount: PropTypes.number,
  /** The number of page numbers displayed at the center, between the '...' separators. */
  centerPages: PropTypes.number,
  /** The number of page numbers displayed on the sides of the pager. */
  marginPages: PropTypes.number,
  /** The label for the 'Previous' button. */
  previousLabel: PropTypes.node,
  /** The label for the 'Next' button. */
  nextLabel: PropTypes.node,
  /** Function to call after clicking a button to change the page. */
  onPageChange: PropTypes.func,
  /** Hide the numerical buttons, leaving just the 'Next' and 'Previous' buttons to interact with. */
  hideNumbers: PropTypes.bool,
  /** Label for the separators. */
  breakSymbol: PropTypes.string,
  /** Disable the pager */
  disabled: PropTypes.bool,
  className: PropTypes.string
};
