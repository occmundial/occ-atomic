import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Text';
import Icon from '../../Icon';
import colors from '../../subatomic/colors';
import iconSizes from '../../subatomic/iconSizes';

function handleOnClick(id, onClick) {
    if (onClick) onClick(id);
}

function handleOnClose(e, id, onClose) {
    e.stopPropagation();
    if (onClose) onClose(id);
}

const Stack = ({ classes, children, id, disabled, onClick, onClose, idPrefix, testId }) => (
    <button
        className={`${classes.pill}${disabled ? ` ${classes.disabled}` : ''}`}
        onClick={() => {handleOnClick(id, onClick);}}
        id={idPrefix ? `${idPrefix}${id}` : null}
        data-testid={testId ? `${testId}${id}` : null}
    >
        {children && <Text className={classes.text} tag="span" disabled={disabled}>{children}</Text>}
        {onClose && (
            <span className={classes.closeCont} onClick={e => handleOnClose(e, id, onClose)}>
                <Icon className={classes.close} iconName="cross" colors={[colors.grey300]} width={iconSizes.small} height={iconSizes.small} />
            </span>
        )}
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
    onClose: PropTypes.func,
    idPrefix: PropTypes.string,
    testId: PropTypes.string
};

export default Stack;
