import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

/** Container component with a card style */
const Card = ({ children, rest, raised, raisable, noPadding, className, style, id }) => {
    const classes = useStyles();

    const getElevation = () => {
        let classNames;
        const elevations = [{rest}, {raised}];
        const filtered = filter(elevations);
        if (filtered.length) classNames = classes[Object.keys(filtered[0])[0]];
        else classNames = classes.flat;
        if (raisable && !raised)
            classNames += ` ${classes.raisable}`;
        return classNames;
    };

    const filter = array => {
        return array.filter((item) => {
            const key = Object.keys(item)[0];
            if (item[key]) return key;
        });
    };

    return (
        <div id={id} className={`${!noPadding ? classes.card : classes.cardNoPadding} ${getElevation()}${className ? ` ${className}` : ''}`} style={style}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    /** The rest property cancels the elevation of the card. */
    rest: PropTypes.bool,
    /** The raised property gives a higher elevation to the card. */
    raised: PropTypes.bool,
    /** The raisable property gives a higher elevation to the card on hover. */
    raisable: PropTypes.bool,
    /** The card has by default a padding. Use this property if you need to remove it. */
    noPadding: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Card;
