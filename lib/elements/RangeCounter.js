import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

const styles = {
    cont: {
        boxSizing:'border-box',
        fontFamily:fonts.body,
        fontSize:'14px',
        lineHeight:'18px',
        color:colors.grey7
    },
    num: {
        color:colors.black
    }
};

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

RangeCounter.defaultProps = {
    symbol: ' - ',
    type: '',
    of: '/'
};

export default injectSheet(styles)(RangeCounter);