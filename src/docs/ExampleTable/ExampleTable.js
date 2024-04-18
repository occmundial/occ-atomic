import React from 'react';
import PropTypes from 'prop-types';

const ExampleTable = ({ classes, children }) => {
    return (
        <table className={classes.table}>
            { children }
        </table>
    );
};

ExampleTable.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node
};

export default ExampleTable;
