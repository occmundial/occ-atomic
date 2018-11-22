import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import GroupItem from './Group';
import StackItem from './Stack';
import ChoiceItem from './Choice';

/** Group of buttons to toggle. */
class Pill extends Component {

    static Group = GroupItem;
    static Stack = StackItem;
    static Choice = ChoiceItem;

    constructor(props) {
        super(props);
        this.state = {
            status: 'default',
            touched: false,
            selected: props.selected
        };
        this.handleGroupOnSelect = this.handleGroupOnSelect.bind(this);
        this.handleChoiceOnSelect = this.handleChoiceOnSelect.bind(this);
        this.handleStackItemOnClose = this.handleStackItemOnClose.bind(this);
        this.handleStackItemOnClick = this.handleStackItemOnClick.bind(this);
    }

    componentWillReceiveProps(props) {
        let { selected } = props;
        if (selected != this.state.selected) {
            this.setState({ selected });
        }
    }

    handleGroupOnSelect(selected) {
        const { onChange } = this.props;
        this.setState({
            selected,
            touched: true
        });
        if (onChange) onChange(selected);
    }

    handleChoiceOnSelect(selected) {
        const { onChange } = this.props;
        this.setState({
            touched: true
        });
        if (onChange) onChange(selected);
    }

    handleStackItemOnClose(id) {
        const { onClose } = this.props;
        if (onClose) onClose(id);
    }

    handleStackItemOnClick(id) {
        const { onClick } = this.props;
        if (onClick) onClick(id);
    }

    render() {
        const { selected, status, touched } = this.state;
        const { classes, label, assistiveText, choice, group, stack, error, allowError, disabled, lockHeight, id, className, style } = this.props;
        let realStatus = status;
        const errorStatus = (error && (touched || allowError));
        if (disabled)
            realStatus = 'disabled';
        else if (errorStatus)
            realStatus = 'error';
        return (
            <div className={`${classes.container}${realStatus == 'disabled' ? ` ${classes.disabled}` : ''}${className ? ` ${className}` : ''}`} id={id} style={style}>
                {(label || lockHeight) && (
                    <div className={classes.top}>
                        {label && (
                            <label className={`${classes.label} ${classes.left}`}>
                                {label}
                            </label>
                        )}
                    </div>
                )}
                {group ? (
                    <GroupItem
                        items={group}
                        onSelect={this.handleGroupOnSelect}
                        selected={selected}
                    />
                ) : stack ? (
                    <div className={classes.stackGroup}>
                        {stack.map(pill => (
                            <StackItem
                                key={pill.id}
                                id={pill.id}
                                disabled={pill.disabled}
                                onClick={this.handleStackItemOnClick}
                                onClose={this.handleStackItemOnClose}
                            >
                                {pill.label}
                            </StackItem>
                        ))}
                    </div>
                ) : choice ? (
                    <div className={classes.choiceGroup}>
                        {choice.map(pill => (
                            <ChoiceItem
                                key={pill.id}
                                id={pill.id}
                                disabled={pill.disabled}
                                selected={pill.selected}
                                onClick={this.handleChoiceOnSelect}
                            >
                                {pill.label}
                            </ChoiceItem>
                        ))}
                    </div>
                ) : null}
                {(assistiveText || lockHeight) && (
                    <div className={classes.bottom}>
                        {assistiveText && (
                            <label className={`${classes.label} ${classes.left} ${realStatus == 'error' ? classes.errorAssistiveText : classes.assistiveText}`}>
                                {realStatus == 'error' ? <Icon iconName="warning" width={14} height={14} className={classes.errorIcon} /> : null} {assistiveText}
                            </label>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

Pill.propTypes = {
    classes: PropTypes.object.isRequired,
    /** Label text to show above the button's group. */
    label: PropTypes.string,
    /** Assistive text to show below the button's group. This text turns into an error message when the component receives the error prop. */
    assistiveText: PropTypes.string,
    /** Array of items to render a bar of buttons. There just can be one selected item at a time. Each item must have an id (unique) and a label. */
    group: PropTypes.array,
    /** Array of items to render a list of closable pills. Each item must have an id (unique) and a label. */
    stack: PropTypes.array,
    /** Array of items to render as a block of independent pills. Each of these pills is toggable. Each item must have an id (unique) and a label. */
    choice: PropTypes.array,
    /** Value to specify the selected item for group pills. */
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    /** Function to call when selecting an option in a group or a choice array. */
    onChange: PropTypes.func,
    /** Function to call when clicking on a stack item. */
    onClick: PropTypes.func,
    /** Function to call when clicking on the close icon of a stack item. */
    onClose: PropTypes.func,
    /** After doing your validations outside of this component, you can change the state of the Pill to 'error' with this bool property. */
    error: PropTypes.bool,
    /** It allows the component to display the error messages even if it hasn't been touched. */
    allowError: PropTypes.bool,
    /** Disable the pill group. */
    disabled: PropTypes.bool,
    /** By default the Pill container would be smaller without a label or an assistive text. lockHeight will maintain the same height as if it had both, label and assistive text. */
    lockHeight: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Pill;
