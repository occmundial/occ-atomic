import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import Page from './Page';
import Break from './Break';

/** This pager allows the user to navigate between pages with 'Next' and 'Previous' buttons and numerical buttons. */
class Pager extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: props.initialPage
				? props.initialPage
				: props.forcePage
				? props.forcePage
				: 1
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
		if (typeof initialPage != 'undefined' && !disableInitialCallback) {
			this.callCallback(initialPage);
		}
	}

	componentWillReceiveProps(props) {
		if (
			typeof props.forcePage != 'undefined' &&
			this.props.forcePage != props.forcePage
		) {
			this.setState({ selected: props.forcePage });
		}
	}

	callCallback(selectedItem) {
		const { onPageChange } = this.props;
		if (
			typeof onPageChange != 'undefined' &&
			typeof onPageChange == 'function'
		) {
			onPageChange({ selected: selectedItem });
		}
	}

	handlePrevPage(e) {
		const { selected } = this.state;
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		if (selected > 1) {
			this.handlePageSelected(selected - 1, e);
		}
	}

	handleNextPage(e) {
		const { selected } = this.state;
		const { pageCount } = this.props;
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		if (selected < pageCount) {
			this.handlePageSelected(selected + 1, e);
		}
	}

	handlePageSelected(selected, e) {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		if (this.state.selected == selected) return;
		this.setState({ selected });
		this.callCallback(selected);
	}

	getPageElement(index) {
		const { selected } = this.state;
		return (
			<Page
				key={index}
				onClick={this.handlePageSelected.bind(null, index)}
				selected={selected == index}
				page={index}
			/>
		);
	}

	pagination() {
		const items = [];
		const { selected } = this.state;
		const { pageRangeDisplayed, pageCount, marginPagesDisplayed, breakLabel } =
			this.props;

		if (pageCount <= pageRangeDisplayed) {
			for (let index = 1; index <= pageCount; index++) {
				items.push(this.getPageElement(index));
			}
		} else {
			let leftSide = pageRangeDisplayed / 2;
			let rightSide = pageRangeDisplayed - leftSide;

			if (selected > pageCount - pageRangeDisplayed / 2) {
				rightSide = pageCount - selected;
				leftSide = pageRangeDisplayed - rightSide;
			} else if (selected < pageRangeDisplayed / 2) {
				leftSide = selected;
				rightSide = pageRangeDisplayed - leftSide;
			}

			let index;
			let page;
			let breakView;
			let createPage = index => this.getPageElement(index);

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

				if (index >= selected - leftSide && index <= selected + rightSide) {
					items.push(createPage(index));
					continue;
				}

				if (breakLabel && items[items.length - 1] != breakView) {
					breakView = <Break key={index} label={breakLabel} />;
					items.push(breakView);
				}
			}
		}

		return items;
	}

	render() {
		const { selected } = this.state;
		const {
			classes,
			pageCount,
			previousLabel,
			nextLabel,
			hideNumbers,
			className
		} = this.props;
		return (
			<ul className={`${classes.pager}${className ? ` ${className}` : ''}`}>
				<li
					className={`${classes.btn} ${classes.listItemPrevious}${
						selected == 1 ? ` ${classes.disabled}` : ''
					}`}
					tabIndex="0"
					onClick={this.handlePrevPage}
				>
					<div className={classes.prev}>
						<Icon
							iconName="chevron-left"
							width={14}
							height={14}
							colors={['#adb4bb']}
						/>
						{previousLabel}
					</div>
				</li>
				{!hideNumbers && this.pagination()}
				<li
					className={`${classes.btn} ${classes.listItemNext}${
						selected == pageCount ? ` ${classes.disabled}` : ''
					}`}
					tabIndex="0"
					onClick={this.handleNextPage}
				>
					<div className={classes.next}>
						{nextLabel}
						<Icon
							iconName="chevron-right"
							width={14}
							height={14}
							colors={['#adb4bb']}
						/>
					</div>
				</li>
			</ul>
		);
	}
}

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
