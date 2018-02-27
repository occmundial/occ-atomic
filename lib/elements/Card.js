import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';
import shadows from '../subatomic/shadows';

const styles = {
    card: {
        background:colors.white,
        borderRadius:'5px',
        padding:'30px 20px'
    },
    cardNoPadding: {
        extend: 'card',
        padding:'0 20px'
    }
};

const pushShadows = function() {
    for (let i = 0; i<8; i++) {
        styles[`shadow${i}`] = {
            boxShadow: shadows[`lvl${i}`]
        };
    }
}

pushShadows();

class Card extends React.Component {
    
    render() {
        const { classes, children, noPadding, shadow } = this.props;
        return (
            <div className={`${!noPadding ? classes.card : classes.cardNoPadding} ${shadow ? classes[`shadow${shadow}`] : ''}`}>
                {children}
            </div>
        );
    }
}

export default injectSheet(styles)(Card);