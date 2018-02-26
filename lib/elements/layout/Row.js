import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    row: {
        boxSizing:'border-box',
        marginRight:'-15px',
        marginLeft:'-15px',
        '&:before, &:after': {
            display:'table',
            content:'""'
        },
        '&:after': {
            clear:'both'
        }
    }
}

const Row = ({ classes, children, extraClasses }) => (
    <div className={`${classes.row} ${extraClasses ? extraClasses : ''}`}>{children}</div>
);

export default injectSheet(styles)(Row);