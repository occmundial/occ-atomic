import React from 'react';
import injectSheet from 'react-jss';
import v from './globals';

const styles = {
    column: {
        position:'relative',
        minHeight:'1px',
        paddingRight:'15px',
        paddingLeft:'15px'
    }
}

const pushGrid = function() {
    const sm = '@media (min-width: 768px)';
    const md = '@media (min-width: 992px)';
    const lg = '@media (min-width: 1200px)';
    for (let i = 1; i <= 12; i++) {
        styles[`xs${i}`] = {
            float:'left',
            width:`${100/12*i}%`
        };
        styles[`offset-xs${i}`] = {
            marginLeft:`${100/12*i}%`
        };
        styles[`push-xs${i}`] = {
            left:`${100/12*i}%`
        };
        styles[`pull-xs${i}`] = {
            right:`${100/12*i}%`
        };
    };
    styles[sm] = {};
    styles[md] = {};
    styles[lg] = {};
    for(let i = 1; i <= 12; i++) {
        styles[sm][`sm${i}`] = {
            float:'left',
            width:`${100/12*i}%`
        };
        styles[sm][`offset-sm${i}`] = {
            marginLeft:`${100/12*i}%`
        };
        styles[sm][`push-sm${i}`] = {
            left:`${100/12*i}%`
        };
        styles[sm][`pull-sm${i}`] = {
            right:`${100/12*i}%`
        };
        styles[md][`md${i}`] = {
            float:'left',
            width:`${100/12*i}%`
        };
        styles[md][`offset-md${i}`] = {
            marginLeft:`${100/12*i}%`
        };
        styles[md][`push-md${i}`] = {
            left:`${100/12*i}%`
        };
        styles[md][`pull-md${i}`] = {
            right:`${100/12*i}%`
        };
        styles[lg][`lg${i}`] = {
            float:'left',
            width:`${100/12*i}%`
        };
        styles[lg][`offset-lg${i}`] = {
            marginLeft:`${100/12*i}%`
        };
        styles[lg][`push-lg${i}`] = {
            left:`${100/12*i}%`
        };
        styles[lg][`pull-lg${i}`] = {
            right:`${100/12*i}%`
        };
    }
};

pushGrid();

const getClasses = function(size, data, classes) {
    let string = '';
    if (data.col) string+=' '+classes[`${size}${data.col}`];
    if (data.offset) string+=' '+classes[`offset-${size}${data.offset}`];
    if (data.push) string+=' '+classes[`push-${size}${data.push}`];
    if (data.pull) string+=' '+classes[`pull-${size}${data.pull}`];
    return string;
}

const Column = ({ classes, children, xs, sm, md, lg, extraClasses }) => (
    <div className={`${classes.column}${xs ? getClasses('xs', xs, classes) : ''}${sm ? getClasses('sm', sm, classes) : ''}${md ? getClasses('md', md, classes) : ''}${lg ? getClasses('lg', lg, classes) : ''} ${extraClasses ? extraClasses : ''}`}>
        {children}
    </div>
);

export default injectSheet(styles)(Column);