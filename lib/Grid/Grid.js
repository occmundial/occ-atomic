import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import RowItem from './Row';
import ColItem from './Col';

import useStyles from './styles';

/** The Grid should be used as the main content container. You can't use a Grid inside of another Grid, it will brake your layout. */
const Grid = ({ children, fluid, onClick, className, id, style }) => {
    const classes = useStyles();
    return (
        <div
            className={classnames(
                { [classes.conFluid]: fluid },
                { [classes.con]: !fluid },
                className
            )}
            style={style}
            id={id}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

Grid.Row = RowItem;
Grid.Col = ColItem;

Grid.propTypes = {
    children: PropTypes.node,
    /** By default, the Grid component has a specified width for any screen size. The fluid property allows the Grid to extend to a 100% width. */
    fluid: PropTypes.bool,
    /** Function to call on click. This is not the best practice, but is an option if you need to use it. */
    onClick: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Grid;
