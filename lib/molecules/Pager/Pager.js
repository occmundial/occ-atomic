import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Icon from '../../elements/Icon';

import Page from './Page';
import Break from './Break';

class Pager extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selected:props.initialPage ? props.initialPage : props.forcePage ? props.forcePage : 0
        };
        this.callCallback = this.callCallback.bind(this);
        this.handlePrevPage = this.handlePrevPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePageSelected = this.handlePageSelected.bind(this);
        this.getPageElement = this.getPageElement.bind(this);
        this.pagination = this.pagination.bind(this);
    }
    
    componentDidMount() {
        const { initialPage, disableInitialCallback } = this.props;
        if (typeof(initialPage) != 'undefined' && !disableInitialCallback) {
            this.callCallback(initialPage);
        }
    }
    
    componentWillReceiveProps(props) {
        if (typeof(props.forcePage) != 'undefined' && this.props.forcePage != props.forcePage) {
          this.setState({selected: props.forcePage});
        }
    }
    
    callCallback(selectedItem) {
        const { onPageChange } = this.props;
        if (typeof(onPageChange) != 'undefined' && typeof(onPageChange) == 'function') {
            onPageChange({selected: selectedItem});
        }
    }
    
    handlePrevPage(e) {
        const { selected } = this.state;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        if (selected > 0) {
            this.handlePageSelected(selected -1, e);
        }
    }
    
    handleNextPage(e) {
        const { selected } = this.state;
        const { pageCount } = this.props;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        if (selected < pageCount - 1) {
            this.handlePageSelected(selected + 1, e);
        }
    }
    
    handlePageSelected(selected, e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        if (this.state.selected == selected) return;
        this.setState({selected});
        this.callCallback(selected);
    }
    
    getPageElement(index) {
        const { selected } = this.state;
        return (
            <Page
                key={index}
                onClick={this.handlePageSelected.bind(null, index)}
                selected={selected == index}
                page={index+1}
            />
        );
    }
    
    pagination() {
        const items = [];
        const { selected } = this.state;
        const { pageRangeDisplayed, pageCount, marginPagesDisplayed, breakLabel } = this.props;
        
        if (pageCount <= pageRangeDisplayed) {
            for (let index = 0; index < pageCount; index++) {
                items.push(this.getPageElement(index));
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
            let createPage = (index) => this.getPageElement(index);
            
            for (index = 0; index < pageCount; index++) {
                page = index+1;
                
                // 
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
    }
    
    render() {
        const { selected } = this.state;
        const { classes, pageCount, previousLabel, nextLabel, hideNumbers, className } = this.props;
        return (
            <ul className={`${classes.pager}${className ? ` ${className}` : ''}`}>
                <li className={`${classes.btn} ${classes.prev}${selected == 0 ? ` ${classes.disabled}` : ''}`} tabIndex="0" onClick={this.handlePrevPage}>
                    <Icon iconName="arrowDown" colors={['#adb4bb']} /> {previousLabel}
                </li>
                {!hideNumbers && this.pagination()}
                <li className={`${classes.btn} ${classes.next}${selected == pageCount - 1 ? ` ${classes.disabled}` : ''}`} tabIndex="0" onClick={this.handleNextPage}>
                    {nextLabel} <Icon iconName="arrowDown" colors={['#adb4bb']} />
                </li>
            </ul>
        );
    }
}

Pager.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    pageCount: PropTypes.number.isRequired,
    pageRangeDisplayed: PropTypes.number.isRequired,
    marginPagesDisplayed: PropTypes.number.isRequired,
    previousLabel: PropTypes.node,
    nextLabel: PropTypes.node,
    onPageChange: PropTypes.func,
    initialPage: PropTypes.number,
    forcePage: PropTypes.number,
    disableInitialCallback: PropTypes.bool,
    hideNumbers: PropTypes.bool,
    breakLabel: PropTypes.string
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