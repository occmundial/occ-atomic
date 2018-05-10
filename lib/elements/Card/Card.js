import React from 'react';
import PropTypes from 'prop-types';

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

Card.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    noPadding: PropTypes.bool,
    shadow: PropTypes.number,
    style: PropTypes.object,
    id: PropTypes.string
};

export default Card;