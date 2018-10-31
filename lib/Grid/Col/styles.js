import grid from '../../subatomic/grid';
import spacing from '../../subatomic/spacing';

const styles = {
    col: {
        boxSizing:'border-box',
        position:'relative',
        minHeight:'1px',
        paddingRight:spacing.gutter,
        paddingLeft:spacing.gutter
    }
};

const pushGrid = function() {
    const xs = `@media (min-width: ${grid.xs}px)`;
    const sm = `@media (min-width: ${grid.sm}px)`;
    const md = `@media (min-width: ${grid.md}px)`;
    const lg = `@media (min-width: ${grid.lg}px)`;
    const xl = `@media (min-width: ${grid.xl}px)`;
    for (let i = 1; i <= 12; i++) {
        styles[`xxs${i}`] = {
            float:'left',
            width:`${100/12*i}%`
        };
        styles[`offset-xxs${i}`] = {
            marginLeft:`${100/12*i}%`
        };
        styles[`push-xxs${i}`] = {
            left:`${100/12*i}%`
        };
        styles[`pull-xxs${i}`] = {
            right:`${100/12*i}%`
        };
    };
    styles[xs] = {};
    styles[sm] = {};
    styles[md] = {};
    styles[lg] = {};
    styles[xl] = {};
    for(let i = 1; i <= 12; i++) {
        styles[xs][`xs${i}`] = {
            float:'left',
            width:`${100/12*i}%`
        };
        styles[xs][`offset-xs${i}`] = {
            marginLeft:`${100/12*i}%`
        };
        styles[xs][`push-xs${i}`] = {
            left:`${100/12*i}%`
        };
        styles[xs][`pull-xs${i}`] = {
            right:`${100/12*i}%`
        };
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
        styles[xl][`xl${i}`] = {
            float:'left',
            width:`${100/12*i}%`
        };
        styles[xl][`offset-xl${i}`] = {
            marginLeft:`${100/12*i}%`
        };
        styles[xl][`push-xl${i}`] = {
            left:`${100/12*i}%`
        };
        styles[xl][`pull-xl${i}`] = {
            right:`${100/12*i}%`
        };
    }
};

pushGrid();

export default styles;