import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon';

import Page from './Page';
import Break from './Break';

import useStyles from './styles';

import usePrevious from '../hooks/usePrevious';

/** This pager allows the user to navigate between pages with 'Next' and 'Previous' buttons and numerical buttons. */
const Pager = ({ initialPage, forcePage, disableInitialCallback, pageCount, pageRangeDisplayed, marginPagesDisplayed, breakLabel, previousLabel, nextLabel, hideNumbers, className, onPageChange }) => {
    const classes = useStyles();
    const [selected, setSelected] = useState(initialPage || forcePage || 1);
    const prevForcePage = usePrevious(forcePage);

    useEffect(() => {
        if (typeof(initialPage) !== 'undefined' && !disableInitialCallback) {
            callCallback(initialPage);
        }
    }, []);

    useEffect(() => {
        if (typeof(forcePage) !== 'undefined' && prevForcePage !== forcePage) {
            setSelected(forcePage);
        }
    }, [forcePage, prevForcePage]);

    const callCallback = selectedItem => {
        if (typeof(onPageChange) === 'function')
            onPageChange({selected: selectedItem});
    };

    const handlePrevPage = e => {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        if (selected > 1)
            handlePageSelected(selected - 1, e);
    };

    const handleNextPage = e => {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        if (selected < pageCount)
            handlePageSelected(selected + 1, e);
    };

    const handlePageSelected = (newSelected, e) => {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        if (selected === newSelected) return;
        setSelected(newSelected);
        callCallback(newSelected);
    };

    const getPageElement = index => (
        <Page
            key={index}
            onClick={event => handlePageSelected(index, event)}
            selected={selected === index}
            page={index}
        />
    );

    const pagination = () => {
        const items = [];
        if (pageCount <= pageRangeDisplayed) {
            for (let index = 1; index <= pageCount; index++) {
                items.push(getPageElement(index));
            }
        } else {
            let leftSide  = (pageRangeDisplayed / 2);
            let rightSide = (pageRangeDisplayed - leftSide);

            if (selected > pageCount - pageRangeDisplayed / 2) {
                rightSide = pageCount - selected;
                leftSide  = pageRangeDisplayed - rightSide;
            } else if (selected < pageRangeDisplayed / 2) {
                leftSide  = selected;
                rightSide = pageRangeDisplayed - leftSide;
            }

            let index;
            let page;
            let breakView;
            let createPage = (index) => getPageElement(index);

            for (index = 1; index <= pageCount; index++) {
                page = index;

                if (page <= marginPagesDisplayed) {
                    items.push(createPage(index));
                    continue;
                }

                if (page > pageCount - marginPagesDisplayed) {
                    items.push(createPage(index));
                    continue;
                }

                if ((index >= selected - leftSide) && (index <= selected + rightSide)) {
                    items.push(createPage(index));
                    continue;
                }

                if (breakLabel && items[items.length - 1] != breakView) {
                    breakView = (
                        <Break
                            key={index}
                            label={breakLabel}
                        />
                    );
                    items.push(breakView);
                }
            }
        }
        return items;
    };

    return (
        <ul className={classnames(classes.pager, className)}>
            <li
                className={classnames(
                    classes.btn,
                    classes.prev,
                    { [classes.disabled]: selected === 1 }
                )}
                tabIndex="0"
                onClick={handlePrevPage}
            >
                <Icon iconName="arrowDown" colors={['#adb4bb']} /> {previousLabel}
            </li>
            {!hideNumbers && pagination()}
            <li
                className={classnames(
                    classes.btn,
                    classes.next,
                    { [classes.disabled]: selected === pageCount }
                )}
                tabIndex="0"
                onClick={handleNextPage}
            >
                {nextLabel} <Icon iconName="arrowDown" colors={['#adb4bb']} />
            </li>
        </ul>
    );
};

Pager.propTypes = {
    classes: PropTypes.object,
    /** The total number of pages. */
    pageCount: PropTypes.number.isRequired,
    /** The number of page numbers displayed at the center, between the '...' separators. */
    pageRangeDisplayed: PropTypes.number.isRequired,
    /** The number of page numbers displayed on the sides of the pager. */
    marginPagesDisplayed: PropTypes.number.isRequired,
    /** The label for the 'Previous' button. */
    previousLabel: PropTypes.node,
    /** The label for the 'Next' button. */
    nextLabel: PropTypes.node,
    /** Function to call after clicking a button to change the page. */
    onPageChange: PropTypes.func,
    /** Default page to start the Pager. */
    initialPage: PropTypes.number,
    /** Force a page change externally. */
    forcePage: PropTypes.number,
    /** By default, a callback triggers after mounting, calling the onPageChange function. Set this to false if you don't want that to happen. */
    disableInitialCallback: PropTypes.bool,
    /** Hide the numerical buttons, leaving just the 'Next' and 'Previous' buttons to interact with. */
    hideNumbers: PropTypes.bool,
    /** Label for the separators. */
    breakLabel: PropTypes.string,
    className: PropTypes.string
};

Pager.defaultProps = {
    pageCount: 10,
    pageRangeDisplayed: 2,
    marginPagesDisplayed: 3,
    previousLabel: 'Previous',
    nextLabel: 'Next',
    breakLabel: '...',
    disableInitialCallback: false,
    hideNumbers: false
};

export default Pager;
