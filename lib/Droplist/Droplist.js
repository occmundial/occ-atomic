import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';
import Text from '../Text';
import Icon from '../Icon';
import Colors from '../subatomic/colors';
import { compareText, separateText } from './functions';
import iconSizes from '../subatomic/iconSizes';

const arrowDown = 40;
const arrowUp = 38;
const enter = 13;
const { inkLighter } = Colors;
const { small: iconSmall } = iconSizes;
/**
 * The Droplist component displays a list and filters it with the prop 'term'.
 * The value of 'term' es highlighted in every item that matches.
 * The array of objects needed to display the items needs a text and an id, and can contain a text that floats on the right. If you're going to group your items by category, you first need to set an array of groups, and each group must contain an array with the items.
 */
class Droplist extends React.Component {
	constructor(props) {
		super(props);
		autobind(this);
		this.state = {
			currentItem: -1,
			currentGroup: -1,
			items: props.items
		};
	}

	componentDidMount() {
		const { items, filter, term } = this.props;
		window.addEventListener('keydown', this.onKeyDown);
		if (filter) this.filterItems(items, term);
	}

	componentWillReceiveProps(props) {
		if (
			props.term !== this.props.term ||
			!isEqual(props.items, this.props.items)
		) {
			this.setState({ currentItem: -1 });
			if (props.filter) this.filterItems(props.items, props.term);
			else this.setState({ items: props.items });
		}
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.onKeyDown);
	}

	onKeyDown(e) {
		const { items } = this.state;
		const { isOnFocus, groups } = this.props;
		if (isOnFocus) {
			if (e.which === arrowUp || e.which === arrowDown) {
				e.preventDefault();
				if (groups) {
					if (e.which === arrowDown) {
						this.moveGroupDown();
					} else {
						this.moveGroupUp();
					}
				} else {
					if (e.which === arrowDown) {
						this.moveDown(items);
					} else {
						this.moveUp(items);
					}
				}
			}
			if (e.which === enter) {
				this.onEnter();
			}
		}
	}

	onEnter() {
		const { currentItem, currentGroup, items } = this.state;
		const { onEnter, groups, groupItemsKey } = this.props;
		if (currentItem > -1) {
			if (groups) {
				const selectedGroup = items.find((group, i) => i === currentGroup);
				const selectedItem = selectedGroup[groupItemsKey].find(
					(item, i) => i === currentItem
				);
				this.setState({ currentGroup: -1, currentItem: -1 });
				if (onEnter) onEnter(selectedItem);
			} else {
				const selectedItem = items.find((item, i) => i === currentItem);
				this.setState({ currentItem: -1 });
				if (onEnter) onEnter(selectedItem);
			}
		}
	}

	moveGroupDown() {
		const { currentItem, currentGroup, items } = this.state;
		const { groupItemsKey } = this.props;
		if (currentGroup === -1) {
			this.moveToNextGroup();
		} else {
			const groupItems = items[currentGroup][groupItemsKey];
			if (currentItem === groupItems.length - 1) {
				this.moveToNextGroup();
			} else {
				this.moveDown(groupItems);
			}
		}
	}

	moveGroupUp() {
		const { currentItem, currentGroup, items } = this.state;
		const { groupItemsKey } = this.props;
		if (currentGroup === -1) {
			this.moveToPreviousGroup();
		} else {
			const groupItems = items[currentGroup][groupItemsKey];
			if (currentItem === 0) {
				this.moveToPreviousGroup();
			} else {
				this.moveUp(groupItems);
			}
		}
	}

	moveToNextGroup() {
		const { currentGroup, items } = this.state;
		const { groupItemsKey } = this.props;
		if (currentGroup === items.length - 1) {
			this.setState({ currentGroup: -1, currentItem: -1 });
		} else {
			this.setState({ currentGroup: currentGroup + 1 }, () => {
				const { currentGroup } = this.state;
				if (
					items[currentGroup][groupItemsKey] &&
					items[currentGroup][groupItemsKey].length
				) {
					this.setState({ currentItem: 0 });
				} else {
					this.moveToNextGroup();
				}
			});
		}
	}

	moveToPreviousGroup() {
		const { currentGroup, items } = this.state;
		const { groupItemsKey } = this.props;
		if (currentGroup === -1) {
			this.setState({ currentGroup: items.length - 1 }, () => {
				const { currentGroup } = this.state;
				if (
					items[currentGroup][groupItemsKey] &&
					items[currentGroup][groupItemsKey].length
				) {
					this.setState({
						currentItem: items[currentGroup][groupItemsKey].length - 1
					});
				} else {
					this.moveToPreviousGroup();
				}
			});
		} else if (currentGroup === 0) {
			this.setState({ currentGroup: -1, currentItem: -1 });
		} else {
			this.setState({ currentGroup: currentGroup - 1 }, () => {
				const { currentGroup } = this.state;
				if (
					items[currentGroup][groupItemsKey] &&
					items[currentGroup][groupItemsKey].length
				) {
					this.setState({
						currentItem: items[currentGroup][groupItemsKey].length - 1
					});
				} else {
					this.moveToPreviousGroup();
				}
			});
		}
	}

	moveDown(items) {
		const { currentItem } = this.state;
		if (currentItem === items.length - 1) {
			this.setState({ currentItem: -1 });
		} else {
			this.setState({ currentItem: currentItem + 1 });
		}
	}

	moveUp() {
		const { currentItem, items } = this.state;
		if (currentItem === -1) {
			this.setState({ currentItem: items.length - 1 });
		} else {
			this.setState({ currentItem: currentItem - 1 });
		}
	}

	onClick(item, e) {
		const { onClick } = this.props;
		e.stopPropagation();
		this.setState({ currentGroup: -1, currentItem: -1 });
		if (onClick) onClick(item);
	}

	onMouseDown(item, e) {
		const { onMouseDown } = this.props;
		e.stopPropagation();
		this.setState({ currentGroup: -1, currentItem: -1 });
		if (onMouseDown) onMouseDown(item);
	}

	onMouseUp(item, e) {
		const { onMouseUp } = this.props;
		e.stopPropagation();
		this.setState({ currentGroup: -1, currentItem: -1 });
		if (onMouseUp) onMouseUp(item);
	}

	filterItems(items, term) {
		const { itemTextKey, groupItemsKey, groups } = this.props;
		if (groups) {
			let newItems = cloneDeep(items);
			newItems = items.map(group => {
				group[groupItemsKey] = group[groupItemsKey].filter(
					item => compareText(item[itemTextKey], term) >= 0
				);
				return group;
			});
			newItems = newItems.filter(group => group[groupItemsKey].length > 0);
			this.setState({ items: newItems });
		} else {
			const newItems = items.filter(
				item => compareText(item[itemTextKey], term) >= 0
			);
			this.setState({ items: newItems });
		}
	}

	renderList(items, selectedGroup) {
		const { currentItem } = this.state;
		const {
			classes,
			itemIdKey,
			itemTextKey,
			itemTextRightKey,
			term
		} = this.props;
		const itemsDOM = items.map((item, i) => {
			let index = compareText(item[itemTextKey], term);
			if (index >= 0) {
				let text = separateText(item[itemTextKey], index, term);
				return (
					<div
						key={item[itemIdKey]}
						onClick={e => this.onClick(item, e)}
						onMouseDown={e => this.onMouseDown(item, e)}
						onMouseUp={e => this.onMouseUp(item, e)}
						className={`${classes.item}${
							selectedGroup && currentItem === i ? ` ${classes.onFocus}` : ''
						}`}
					>
						<div>
							{item.iconName && (
								<Icon
									iconName={item.iconName}
									width={iconSmall}
									height={iconSmall}
									display="inline-block"
									className={classes.icon}
									colors={[inkLighter]}
								/>
							)}
							<Text className={item.iconName ? classes.iconText : ''}>
								{text[0].length ? text[0] : ''}
								<Text tag="b" strong>
									{text[1].length ? text[1] : ''}
								</Text>
								{text[2].length ? text[2] : ''}
								{item.extraText && (
									<span className={classes.extraText}>{item.extraText}</span>
								)}
							</Text>
						</div>
						{item[itemTextRightKey] && (
							<span className={classes.right}>
								<Text tag="span" low>
									{item[itemTextRightKey]}
								</Text>
							</span>
						)}
					</div>
				);
			} else {
				return (
					<div
						key={item[itemIdKey]}
						onClick={e => this.onClick(item, e)}
						onMouseDown={e => this.onMouseDown(item, e)}
						onMouseUp={e => this.onMouseUp(item, e)}
						className={`${classes.item}${
							selectedGroup && currentItem === i ? ` ${classes.onFocus}` : ''
						}`}
					>
						<div>
							{item.iconName && (
								<Icon
									iconName={item.iconName}
									width={14}
									height={14}
									display="inline-block"
									className={classes.dsfsdf}
									colors={[inkLighter]}
								/>
							)}
							<Text>
								{item[itemTextKey]}
								{item.extraText && (
									<span className={classes.extraText}>{item.extraText}</span>
								)}
							</Text>
						</div>
						{item[itemTextRightKey] && (
							<span className={classes.right}>
								<Text tag="span" low>
									{item[itemTextRightKey]}
								</Text>
							</span>
						)}
					</div>
				);
			}
		});
		return itemsDOM;
	}

	render() {
		const { items, currentGroup } = this.state;
		const {
			classes,
			className,
			style,
			id,
			groups,
			groupNameKey,
			groupIdKey,
			groupItemsKey
		} = this.props;
		return (
			<div
				className={`${classes.block}${className ? ` ${className}` : ''}`}
				id={id}
				style={style}
			>
				{groups
					? items.map((group, index) => {
							return (
								<div key={group[groupIdKey]}>
									<Text small mid className={classes.group}>
										{group[groupNameKey].toUpperCase()}
									</Text>
									{this.renderList(
										group[groupItemsKey],
										currentGroup === index
									)}
								</div>
							);
					  })
					: this.renderList(items, true)}
			</div>
		);
	}
}

Droplist.defaultProps = {
	groups: false,
	groupNameKey: 'text',
	groupIdKey: 'id',
	groupItemsKey: 'items',
	itemTextKey: 'text',
	itemTextRightKey: 'textRight',
	itemIdKey: 'id',
	term: '',
	filter: true
};

Droplist.propTypes = {
	classes: PropTypes.object.isRequired,
	/** Array of objects with all the items to display. */
	items: PropTypes.array,
	/** Term to filter the items of the Droplist. */
	term: PropTypes.string,
	/** Key to find in the object, to use as the text. */
	itemTextKey: PropTypes.string,
	/** Key to find in the object, to use as the text that floats on the right. */
	itemTextRightKey: PropTypes.string,
	/** Key to find in the object, to use as the id. */
	itemIdKey: PropTypes.string,
	/** Use this if the items are grouped in different categories. */
	groups: PropTypes.bool,
	/** Key to find in the object to use as the name of the group. */
	groupNameKey: PropTypes.string,
	/** Key to find in the object to use as the id of the group. */
	groupIdKey: PropTypes.string,
	/** Key to find in the object where you can find the array of items. */
	groupItemsKey: PropTypes.string,
	/** Function to call when an item is clicked. */
	onClick: PropTypes.func,
	/** Function to call when mouse is pressed down on an item. */
	onMouseDown: PropTypes.func,
	/** Function to call when mouse is pressed up on an item. */
	onMouseUp: PropTypes.func,
	/** Function to call when the Enter key is pressed down. */
	onEnter: PropTypes.func,
	/** Filters given items if they match with the term. */
	filter: PropTypes.bool,
	/** With this parameter the Droplist will have navigation with up and down keys. */
	isOnFocus: PropTypes.bool,
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
};

export default Droplist;
