import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Droplist from '../Droplist';
import Label from '../Label';

/**
* This component integrates the Input, Droplist and Label components.
* The value of Input filters the list in Droplist.
* The selected items of Droplist can be stacked into Labels.
*/
class Autocomplete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.inputProps.valueProp ? props.inputProps.valueProp : '',
            focus: false,
            labels: []
        };
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onClick = this.onClick.bind(this);
        this.addLabel = this.addLabel.bind(this);
        this.removeLabel = this.removeLabel.bind(this);
        this.removeSelected = this.removeSelected.bind(this);
        this.forceValue = this.forceValue.bind(this);
        this.setRef = this.setRef.bind(this);
        this.labels = [];
    }

    componentWillMount() {
        let { onRef } = this.props;
        if (onRef) onRef(this);
    }

    componentWillUnmount() {
        let { onRef } = this.props;
        if (onRef) onRef(undefined);
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

    onKeyUp(key) {
        const { onKeyUp, selectOnEnter, droplistProps } = this.props;
        if (selectOnEnter) {
            if (key == 13) {
                const cleanItems = this.removeSelected();
                if (cleanItems.length) {
                    if (!droplistProps.groups) {
                        const item = cleanItems[0];
                        this.onClick(item);
                    } else {
                        const item = cleanItems[0][droplistProps.groupItemsKey][0];
                        this.onClick(item);
                    }
                } else {
                    this.setState({
                        value: ''
                    });
                }
            }
        }
        if (onKeyUp) onKeyUp(key);
    }

    onClear() {
        const { onClear } = this.props;
        this.setState({
            value: ''
        });
        if (onClear) onClear();
    }

    onClick(item) {
        const { onClick, onChange, droplistProps, stackLabels } = this.props;
        if (stackLabels) {
            this.input.onClear();
            this.setState({
                value: ''
            });
            this.input.input.focus();
            this.addLabel(item);
        } else {
            this.setState({
                value: item[droplistProps.itemTextKey], focus: false
            });
            if (onChange) onChange(item[droplistProps.itemTextKey]);
        }
        if (onClick) onClick(stackLabels ? this.labels : item);
    }

    addLabel(item) {
        this.labels.push(item);
        this.setState({labels: this.labels});
    }

    removeLabel(item) {
        const { droplistProps, onClick } = this.props;
        let pos = this.labels.map(label => { return label[droplistProps.itemIdKey];}).indexOf(item[droplistProps.itemIdKey]);
        this.labels.splice(pos, 1);
        this.setState({labels: this.labels});
        if (onClick) onClick(this.labels);
    }

    removeSelected() {
        const { labels } = this.state;
        const { droplistProps } = this.props;
        let cleanItems = [];
        if (droplistProps.groups) {
            droplistProps.items.map(group => {
                let cleanGroup = group[droplistProps.groupItemsKey].filter(item => {
                    const inLabels = labels.filter(label => {
                        return label[droplistProps.itemIdKey] == item[droplistProps.itemIdKey];
                    });
                    return !inLabels.length;
                });
                const modifiedGroup = Object.assign({}, group);
                modifiedGroup[droplistProps.groupItemsKey] = cleanGroup;
                if (cleanGroup.length) cleanItems.push(modifiedGroup);
            });
        } else {
            cleanItems = droplistProps.items.filter(item => {
                const inLabels = labels.filter(label => {
                    return label[droplistProps.itemIdKey] == item[droplistProps.itemIdKey];
                });
                return !inLabels.length;
            });
        }
        return cleanItems;
    }

    forceValue(value) {
        this.setState({value});
    }

    setRef(input) {
        if (input)
            this.input = input;
    }

    render() {
        const { value, focus, labels } = this.state;
        const { classes, id, inputProps, droplistProps, stackLabels, limit, limitPlaceholder, className, style, disableAutoComplete } = this.props;
        const cleanItems = this.removeSelected();
        return (
            <div className={`${classes.autoComplete}${className ? ` ${className}` : ''}`} id={id} style={style} ref = {ref => { this.autocomplete = ref; }}>
                <Input
                    onRef={this.setRef}
                    id={inputProps.id}
                    type={inputProps.type}
                    name={inputProps.name}
                    label={inputProps.label}
                    placeholder={((stackLabels && limit) && this.labels.length >= limit) ? limitPlaceholder : inputProps.placeholder}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onKeyUp={this.onKeyUp}
                    onClear={this.onClear}
                    selectOnFocus={inputProps.selectOnFocus}
                    clear={inputProps.clear}
                    disabled={(stackLabels && limit) && this.labels.length >= limit}
                    valueProp={value}
                    iconName={inputProps.iconName}
                    theme={inputProps.theme}
                    className={inputProps.className}
                    inputClassName={inputProps.inputClassName}
                    disableAutoComplete={disableAutoComplete}
                />
                {(value && focus && (cleanItems.length)) ? (
                    <Droplist
                        items={cleanItems}
                        groups={droplistProps.groups}
                        groupNameKey={droplistProps.groupNameKey}
                        groupIdKey={droplistProps.groupIdKey}
                        groupItemsKey={droplistProps.groupItemsKey}
                        itemTextKey={droplistProps.itemTextKey}
                        itemTextRightKey={droplistProps.itemTextRightKey}
                        itemIdKey={droplistProps.itemIdKey}
                        term={value}
                        filter={droplistProps.filter}
                        onClick={this.onClick}
                        className={`${classes.droplist}${droplistProps.className ? ` ${droplistProps.className}` : ''}`} />
                ) : null}
                {(stackLabels && labels.length) ? (
                    <div className={classes.labels}>
                        {
                            labels.map(label => (
                                <Label key={label[droplistProps.itemIdKey]} onClose={() => {this.removeLabel(label);}}>{label[droplistProps.itemTextKey]}</Label>
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
    /** Object with the props for the Input component. Check their descriptions in the Input docs. */
    inputProps: PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        name: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        selectOnFocus: PropTypes.bool,
        clear: PropTypes.bool,
        iconName: PropTypes.string,
        theme: PropTypes.string,
        valueProp: PropTypes.string,
        className: PropTypes.string,
        inputClassName: PropTypes.string
    }).isRequired,
    /** Object with the props for the Droplist component. Check their descriptions in the Droplist docs. */
    droplistProps: PropTypes.shape({
        items: PropTypes.array,
        itemIdKey: PropTypes.string,
        itemTextKey: PropTypes.string,
        itemTextRightKey: PropTypes.string,
        groups: PropTypes.bool,
        groupIdKey: PropTypes.string,
        groupNameKey: PropTypes.string,
        groupItemsKey: PropTypes.string,
        className: PropTypes.string,
        filter: PropTypes.bool
    }).isRequired,
    /** Function to call on change (Input). */
    onChange: PropTypes.func,
    /** Function to call on key up (Input). */
    onKeyUp: PropTypes.func,
    /** Function to call on focus (Input). */
    onFocus: PropTypes.func,
    /** Function to call on blur (Input). */
    onBlur: PropTypes.func,
    /** Function to call on clear (Input). */
    onClear: PropTypes.func,
    /** Function to call on click (Droplist item). */
    onClick: PropTypes.func,
    onRef: PropTypes.func,
    /** Set this property to stack the selected items of Droplist into Labels. */
    stackLabels: PropTypes.bool,
    /** Set the limit of stackable items into labels. */
    limit: PropTypes.number,
    /** Change the placeholder when the limit of labels has been reached. */
    limitPlaceholder: PropTypes.string,
    /** Automatically selects the first item of the Droplist when pressing the Enter key. NOTE: To use this property correctly you must set the droplistProps.filter property as false and handle the filtering yourself, since Autocomplete only has access to the droplistProps.items property and not the items already filtered by Droplist. */
    selectOnEnter: PropTypes.bool,
    /**  Disables native autoComplete on browsers. */
    disableAutoComplete: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

Autocomplete.defaultProps = {
    inputProps: {},
    droplistProps: {},
    disableAutoComplete: false
};

export default Autocomplete;
