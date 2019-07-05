import React from 'react';
import PropTypes from 'prop-types';

/** Container component with a card style */
class Card extends React.Component {

    render() {
        const { classes, children, noPadding, shadow, className, style, id } = this.props;
        return (
            <div id={id} className={`${!noPadding ? classes.card : classes.cardNoPadding}${shadow ? ` ${classes[`shadow${shadow}`]}` : ''}${className ? ` ${className}` : ''}`} style={style}>
                {children}
            </div>
        );
    }
}

Card.defaultProps = {
    shadow: 3
};

Card.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    /** Set the level of shadow of the card. Choose one between 0 and 5. */
    shadow: PropTypes.oneOf([
        0, 1, 2, 3, 4, 5
    ]),
    /** The card has by default a padding. Use this property if you need to remove it. */
    noPadding: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Card;
