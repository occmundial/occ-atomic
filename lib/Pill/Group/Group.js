import React from 'react';
import PropTypes from 'prop-types';

const Group = ({ classes, items, selected, onSelect }) => (
    <div className={classes.pillGroup}>
        {items.map((item, index) => (
            <button
                key={item.id}
                id={item.value}
                className={`${classes.pill}${selected == item.id ? ` ${classes.selected}` : item.disabled ? ` ${classes.disabled}` : ''}`}
                onClick={selected != item.id ? () => {onSelect(item.id, index);} : null}>
                {item.label}
            </button>
        ))}
    </div>
);

Group.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array,
    onSelect: PropTypes.func,
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default Group;
