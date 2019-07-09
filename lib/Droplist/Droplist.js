import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

/**
* The Droplist component displays a list and filters it with the prop 'term'.
* The value of 'term' es highlighted in every item that matches.
* The array of objects needed to display the items needs a text and an id, and can contain a text that floats on the right. If you're going to group your items by category, you first need to set an array of groups, and each group must contain an array with the items.
*/
class Droplist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: props.term ? props.term.trim() : ''
        };
        this.onClick = this.onClick.bind(this);
        this.renderList = this.renderList.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.term != this.state.term) {
            this.setState({
                term: props.term.trim()
            });
        }
    }

    onClick(item, e) {
        const { onClick } = this.props;
        e.stopPropagation();
        if (onClick) onClick(item);
    }

    onMouseDown(item, e) {
        const { onMouseDown } = this.props;
        e.stopPropagation();
        if (onMouseDown) onMouseDown(item);
    }

    onMouseUp(item, e) {
        const { onMouseUp } = this.props;
        e.stopPropagation();
        if (onMouseUp) onMouseUp(item);
    }

    compareText(text = "", term) {
        let textLC = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let termLC = term.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let index = textLC.indexOf(termLC);
        return index;
    }

    separateText(itemText = "", index, term) {
        let text = [itemText.substr(0, index), itemText.substr(index, term.length), itemText.substr(index+term.length, itemText.length)];
        return text;
    }

    renderList(items) {
        const { term } = this.state;
        const { classes, itemIdKey, itemTextKey, itemTextRightKey, filter } = this.props;
        const itemsDOM = items.map(item => {
            let index = this.compareText(item[itemTextKey], term);
            if (index >= 0) {
                let text = this.separateText(item[itemTextKey], index, term);
                return (
                    <div
                        key={item[itemIdKey]}
                        onClick={(e) => this.onClick(item, e)}
                        onMouseDown={(e) => this.onMouseDown(item, e)}
                        onMouseUp={(e) => this.onMouseUp(item, e)}
                        className={classes.item}>
                        <Text>
                            {text[0].length ? text[0] : ''}
                            <span className={classes.bold}>{text[1].length ? text[1] : ''}</span>
                            {text[2].length ? text[2] : ''}
                        </Text>
                        {item[itemTextRightKey] ? <span className={classes.right}><Text tag="span" mid>{item[itemTextRightKey]}</Text></span> : ''}
                    </div>
                );
            } else {
                if (filter) {
                    return false;
                } else {
                    return (
                        <div
                            key={item[itemIdKey]}
                            onClick={(e) => this.onClick(item, e)}
                            onMouseDown={(e) => this.onMouseDown(item, e)}
                            onMouseUp={(e) => this.onMouseUp(item, e)}
                            className={classes.item}>
                            <Text>{item[itemTextKey]}</Text>
                            {item[itemTextRightKey] ? <span className={classes.right}>{item[itemTextRightKey]}</span> : ''}
                        </div>
                    );
                }
            }

        });
        return itemsDOM;
    }

    render() {
        const { classes, className, style, id, items, groups, groupNameKey, groupIdKey, groupItemsKey } = this.props;
        return (
            <div className={`${classes.block}${className ? ` ${className}` : ''}`} id={id} style={style}>
                {
                    groups ? (
                        items.map(group => {
                            return (
                                <div key={group[groupIdKey]}>
                                    <Text small mid className={classes.group}>{group[groupNameKey].toUpperCase()}</Text>
                                    {
                                        this.renderList(group[groupItemsKey])
                                    }
                                </div>
                            );
                        })
                    ) : (
                        this.renderList(items)
                    )
                }
            </div>
        );
    }
}

Droplist.defaultProps = {
    groups: false,
    groupNameKey:'text',
    groupIdKey:'id',
    groupItemsKey:'items',
    itemTextKey:'text',
    itemTextRightKey:'textRight',
    itemIdKey:'id',
    term:'',
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
    /** Filters given items if they match with the term. */
    filter: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Droplist;
