import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Input from '../Input';
import Droplist from '../Droplist';
import Label from '../../elements/Label';

class Autocomplete extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: props.valueProp ? props.valueProp : '',
            focus: false,
            labels: []
        };
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.addLabel = this.addLabel.bind(this);
        this.removeLabel = this.removeLabel.bind(this);
        this.removeSelected = this.removeSelected.bind(this);
        this.labels = [];
    }
    
    onChange(value) {
        const { onChange } = this.props;
        this.setState({
            value, focus: true
        });
        if (onChange) onChange(value);
    }
    
    onFocus() {
        const { onFocus } = this.props;
        this.setState({
            focus: true
        });
        if (onFocus) onFocus();
    }
    
    onBlur() {
        const { onBlur } = this.props;
        setTimeout(() => {
            this.setState({
                focus: false
            });
        }, 200);
        if (onBlur) onBlur();
    }
    
    onClick(item) {
        const { onClick, onChange, itemTextKey, stackLabels } = this.props;
        const child = this.child;
        if (stackLabels) {
            this.child.onClear();
            this.setState({
                value: ''
            });
            this.child.child.focus();
            this.addLabel(item);
        } else {
            this.setState({
                value: item[itemTextKey], focus: false
            });
            if (onChange) onChange(item[itemTextKey]);
        }
        if (onClick) onClick(stackLabels ? this.labels : item);
    }
    
    addLabel(item) {
        this.labels.push(item);
        this.setState({labels: this.labels});
    }
    removeLabel(item) {
        const { itemIdKey, onClick } = this.props;
        let pos = this.labels.map(label => { return label[itemIdKey];}).indexOf(item[itemIdKey]);
        this.labels.splice(pos, 1);
        this.setState({labels: this.labels});
        if (onClick) onClick(this.labels);
    }
    
    removeSelected() {
        const { labels } = this.state;
        const { items, itemIdKey, groups, groupItemsKey } = this.props;
        let cleanItems = [];
        if (groups) {
            items.map(group => {
                let cleanGroup = group[groupItemsKey].filter(item => {
                    const inLabels = labels.filter(label => {
                        return label[itemIdKey] == item[itemIdKey];
                    });
                    return !inLabels.length;
                });
                const modifiedGroup = Object.assign({}, group);
                modifiedGroup[groupItemsKey] = cleanGroup;
                if (cleanGroup.length) cleanItems.push(modifiedGroup);
            });
        } else {
            cleanItems = items.filter(item => {
                const inLabels = labels.filter(label => {
                    return label[itemIdKey] == item[itemIdKey];
                });
                return !inLabels.length;
            });
        }
        return cleanItems;
    }
    
    render() {
        const { value, focus, labels } = this.state;
        const { classes, id, type, name, label, placeholder, iconName, selectOnFocus, clear, items, groups, groupNameKey, groupIdKey, groupItemsKey, itemTextKey, itemTextRightKey, itemIdKey, onClick, stackLabels, limit, limitPlaceholder, style } = this.props;
        const cleanItems = this.removeSelected();
        return (
            <div className={classes.autoComplete} id={id} style={style}>
                <Input
                    onRef={ref => { this.child = ref; }}
                    type={type}
                    name={name}
                    label={label}
                    placeholder={((stackLabels && limit) && this.labels.length >= limit) ? limitPlaceholder : placeholder}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    selectOnFocus={selectOnFocus}
                    clear={clear}
                    disabled={(stackLabels && limit) && this.labels.length >= limit}
                    valueProp={value}
                    iconName={iconName} />
                {(value && focus) && (
                    <Droplist
                        className={classes.droplist}
                        items={cleanItems}
                        groups={groups}
                        groupNameKey={groupNameKey}
                        groupIdKey={groupIdKey}
                        groupItemsKey={groupItemsKey}
                        itemTextKey={itemTextKey}
                        itemTextRightKey={itemTextRightKey}
                        itemIdKey={itemIdKey}
                        term={value}
                        onClick={this.onClick} />
                )}
                {(stackLabels && labels.length) ? (
                    <div className={classes.labels}>
                        {
                            labels.map(label => (
                                <Label key={label[itemIdKey]} onClose={() => {this.removeLabel(label);}}>{label[itemTextKey]}</Label>
                            ))
                        }
                    </div>
                ) : ''}
            </div>
        );
    }
}

Autocomplete.propTypes = {
    classes: PropTypes.object,
    id: PropTypes.string,
    valueProp: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    iconName: PropTypes.string,
    selectOnFocus: PropTypes.bool,
    clear: PropTypes.bool,
    items: PropTypes.array,
    groups: PropTypes.bool,
    groupNameKey: PropTypes.string,
    groupIdKey: PropTypes.string,
    groupItemsKey: PropTypes.string,
    itemTextKey: PropTypes.string,
    itemTextRightKey: PropTypes.string,
    itemIdKey: PropTypes.string,
    stackLabels: PropTypes.bool,
    limit: PropTypes.number,
    limitPlaceholder: PropTypes.string,
    style: PropTypes.object
};

export default Autocomplete;