import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Input from '../elements/Input';
import Droplist from '../elements/Droplist';

const styles = {
    droplist: {
        marginTop: '-31px'
    }
};

class Autocomplete extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: props.valueProp ? props.valueProp : '',
            focus: false
        };
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
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
        const { onClick, onChange, itemTextKey } = this.props;
        this.setState({
            value: item[itemTextKey], focus: false
        });
        if (onClick) onClick(item);
        if (onChange) onChange(item[itemTextKey]);
    }
    
    render() {
        const { value, focus } = this.state;
        const { classes, valueProp, type, name, placeholder, items, groups, groupNameKey, groupIdKey, groupItemsKey, itemTextKey, itemTextRightKey, itemIdKey, onClick, returnItem } = this.props;
        return (
            <div>
                <Input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    valueProp={value} />
                {(value && focus) && (
                    <Droplist
                        className={classes.droplist}
                        items={items}
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
            </div>
        );
    }
}

Autocomplete.propTypes = {
    classes: PropTypes.object,
    valueProp: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    items: PropTypes.array,
    groups: PropTypes.bool,
    groupNameKey: PropTypes.string,
    groupIdKey: PropTypes.string,
    groupItemsKey: PropTypes.string,
    itemTextKey: PropTypes.string,
    itemTextRightKey: PropTypes.string,
    itemIdKey: PropTypes.string
};

export default injectSheet(styles)(Autocomplete);