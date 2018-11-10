import React from 'react';
import PropTypes from 'prop-types';

class Choice extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        const { id, onClick } = this.props;
        if (onClick) onClick(id);
    }

    render() {
        const { classes, children, selected, disabled } = this.props;
        return (
            <button
                className={`${classes.pill}${selected ? ` ${classes.selected}` : disabled ? ` ${classes.disabled}` : ''}`}
                onClick={this.handleOnClick}>
                {children}
            </button>
        );
    }
}

Choice.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onClick: PropTypes.func,
    children: PropTypes.node,
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    disabled: PropTypes.bool
};

export default Choice;
