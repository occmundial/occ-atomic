import React from 'react';
import PropTypes from 'prop-types';

function handleOnClick(id, onClick) {
    if (onClick) onClick(id);
}

function handleOnClose(e, id, onClose) {
    e.stopPropagation();
    if (onClose) onClose(id);
}

const Stack = ({ classes, children, id, disabled, onClick, onClose }) => (
    <button
        className={`${classes.pill}${disabled ? ` ${classes.disabled}` : ''}`}
        onClick={() => {handleOnClick(id, onClick);}}
    >
        {children}
        <span className={classes.closeCont}>
            {onClose && (
                <span
                    className={classes.closeIcon}
                    onClick={(e) => {handleOnClose(e, id, onClose);}}
                />
            )}
        </span>
    </button>
);

Stack.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

export default Stack;
