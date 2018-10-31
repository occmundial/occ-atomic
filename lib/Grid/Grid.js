import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RowItem from './Row';
import ColItem from './Col';

/** The Grid should be used as the main content container. You can't use a Grid inside of another Grid, it will brake your layout. */
class Grid extends Component {
    static Row = RowItem;
    static Col = ColItem;

    render() {
        const { classes, children, fluid, onClick, className, id, style } = this.props;
        return (
            <div className={`${fluid ? classes.conFluid : classes.con}${className ? ` ${className}` : ''}`} style={style} id={id} onClick={onClick}>{children}</div>
        );
    }
}

Grid.propTypes = {
    classes: PropTypes.object,
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