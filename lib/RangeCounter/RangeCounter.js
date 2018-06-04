import React from 'react';
import PropTypes from 'prop-types';

/** Use this component in lists with pagination. It will display information about the current page and its elements. */
class RangeCounter extends React.Component {
    
    numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    render() {
        const { classes, min, max, symbol, total, type, of, id, className, style } = this.props;
        return (
            <div className={`${classes.cont}${className ? ` ${className}` : ''}`} id={id} style={style}><span className={classes.num}>{this.numberWithCommas(min)}{symbol}{this.numberWithCommas(max)}</span> {of} {this.numberWithCommas(total)} {type}</div>
        );
    }
}

RangeCounter.propTypes = {
    classes: PropTypes.object,
    /** The number of the first item. */
    min: PropTypes.number,
    /** The number of the last item. */
    max: PropTypes.number,
    /** A symbol to separate the min and max numbers. */
    symbol: PropTypes.string,
    /** A semantic separator between the min and max, with the total. */
    of: PropTypes.string,
    /** The total number of elements on the whole list. */
    total: PropTypes.number,
    /** The type of items that the list is showing. */
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

RangeCounter.defaultProps = {
    symbol: ' - ',
    type: '',
    of: '/'
};

export default RangeCounter;