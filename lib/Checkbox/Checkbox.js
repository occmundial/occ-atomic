import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Text from '../Text';
import useStyles from './styles';

const Checkbox = ({ value, undetermined, onChange, label, right, disabled, textOverflow, id, className, style, trk }) => {
    const classes = useStyles();
    const [iValue, setValue] = useState(value);
    const [iUndetermined, setUndetermined] = useState(undetermined);

    useEffect(() => {
        if (iValue !== value) setValue(value);
    }, [iValue, value]);

    const toggle = () => {
        if (!disabled) {
            setValue(!iValue);
            setUndetermined(false);
            if (onChange) onChange(!iValue, id);
        }
    };

    return (
        <div
            id={id}
            className={classnames(
                classes.cont,
                { [classes.undetermined]: iUndetermined },
                { [classes.active]: value && !iUndetermined },
                { [classes.disabled]: disabled },
                className
            )}
            onClick={toggle}
            style={style}>
            <div className={classes.check} id={trk}/>
            {label && <Text tag="label" className={classnames(classes.label, { [classes.overflow]: textOverflow })}>{label}</Text>}
            {right && <Text tag="label" mid className={classes.right}>{right}</Text>}
        </div>
    );
};

Checkbox.propTypes = {
    /** Default value for the checkbox. */
    value: PropTypes.bool,
    /** Used for partial check or when is unable to retrieve the value as absolute. */
    undetermined: PropTypes.bool,
    /** The function to call when the value of the checkbox changes. */
    onChange: PropTypes.func,
    /** Disable the checkbox. */
    disabled: PropTypes.bool,
    /** Text to display next to the checkbox.  */
    label: PropTypes.node,
    /** Text to show on the right. */
    right: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    /** Use this prop to overflow the text of the label, adding '...' and the end. */
    textOverflow: PropTypes.bool,
    /** Id for catching selected element for tracking. */
    trk: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Checkbox;
