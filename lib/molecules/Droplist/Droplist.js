import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

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
        this.setState({
            term: props.term.trim()
        });
    }

    onClick(item) {
        const { onClick } = this.props;
        if (onClick) onClick(item);
    }

    compareText(text, term) {
        let textLC = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let termLC = term.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let index = textLC.indexOf(termLC);
        return index;
    }
    
    separateText(itemText, index, term) {
        let text = [itemText.substr(0, index), itemText.substr(index, term.length), itemText.substr(index+term.length, itemText.length)];
        return text;
    }
    
    renderList(items) {
        const { term } = this.state;
        const { classes, itemTextKey, itemTextRightKey } = this.props;
        const itemsDOM = items.map(item => {
            let index = this.compareText(item[itemTextKey], term);
            if (index >= 0) {
                let text = this.separateText(item[itemTextKey], index, term);
                return (
                    <div
                        key={item[itemTextKey]}
                        onClick={() => this.onClick(item)}
                        className={classes.item}>
                        {text[0].length ? text[0] : ''}
                        <span className={classes.bold}>{text[1].length ? text[1] : ''}</span>
                        {text[2].length ? text[2] : ''}
                        {item[itemTextRightKey] ? <span className={classes.right}>{item[itemTextRightKey]}</span> : ''}
                    </div>
                );
            }
            return false;
        });
        return itemsDOM;
    }
    
    render() {
        const { term } = this.state;
        const { classes, className, style, id, items, groups, groupNameKey, groupIdKey, groupItemsKey, itemTextKey, itemTextRightKey, itemIdKey, onClick } = this.props;
        return (
            <div className={`${classes.block}${className ? ` ${className}` : ''}`} id={id}>
                {
                    groups ? (
                        items.map(group => {
                            return (
                                <div key={group[groupIdKey]} className={classes.groupCon}>
                                    <div className={classes.group}>{group[groupNameKey]}</div>
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
    groups: false
};

Droplist.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    items: PropTypes.array,
    term: PropTypes.string,
    onClick: PropTypes.func,
    groups: PropTypes.bool,
    groupNameKey: PropTypes.string,
    groupIdKey: PropTypes.string,
    groupItemsKey: PropTypes.string,
    itemTextKey: PropTypes.string,
    itemTextRightKey: PropTypes.string,
    itemIdKey: PropTypes.string
};

export default Droplist;