import grid from '../subatomic/grid';

const styles = {
    col: {
        boxSizing:'border-box',
        position:'relative',
        minHeight:'1px',
        paddingRight:'15px',
        paddingLeft:'15px'
    }
};

const pushGrid = function() {
    const sm = `@media (min-width: ${grid.sm}px)`;
    const md = `@media (min-width: ${grid.md}px)`;
    const lg = `@media (min-width: ${grid.lg}px)`;
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

export default styles;