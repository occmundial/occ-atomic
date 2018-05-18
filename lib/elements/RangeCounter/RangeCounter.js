import React from 'react';
import PropTypes from 'prop-types';

class RangeCounter extends React.Component {
    
    numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    render() {
        const { classes, min, max, symbol, total, type, of } = this.props;
        return (
            <div className={classes.cont}><span className={classes.num}>{this.numberWithCommas(min)}{symbol}{this.numberWithCommas(max)}</span> {of} {this.numberWithCommas(total)} {type}</div>
        );
    }
}

RangeCounter.propTypes = {
    classes: PropTypes.object,
    min: PropTypes.number,
    max: PropTypes.number,
    symbol: PropTypes.string,
    total: PropTypes.number,
    type: PropTypes.string,
    of: PropTypes.string
};

RangeCounter.defaultProps = {
    symbol: ' - ',
    type: '',
    of: '/'
};

export default RangeCounter;