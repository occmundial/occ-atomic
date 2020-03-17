import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import useStyles from './styles';

/** Use the Row component inside a Grid. To make your grid as complex as you need, you can nest a Column inside a Row and then nest a Row inside a Column to start a new grid. */
const Row = ({ children, className, id, style }) => {
    const classes = useStyles();
    return (
        <div className={classnames(classes.row, className)} style={style} id={id}>{children}</div>
    );
};

Row.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Row;
