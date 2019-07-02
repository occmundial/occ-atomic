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
        const { classes, children, selected, disabled, idPrefix, id } = this.props;
        return (
            <button
                className={`${classes.pill}${selected ? ` ${classes.selected}` : disabled ? ` ${classes.disabled}` : ''}`}
                onClick={this.handleOnClick}
                id={idPrefix ? `${idPrefix}${id}` : null}>
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
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    idPrefix: PropTypes.string
};

export default Choice;
