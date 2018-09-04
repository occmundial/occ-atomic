import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card, grid, colors } from '@occmundial/occ-atomic';

const Grid = ({ classes }) => {
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>Grid</Title>
                <p>The library includes different types of grids. Probably the most popular is the 'Container-Row-Column' grid system.</p>
                <p>This library has some default values for the breakpoints necessary to make the grid collapse correctly.</p>
                <p>There are four sizes: Extra-small, Small, Medium and Large.</p>
                <p>The extra-small sizes works between 0 and 767px. The small between 768 and 991px. Medium between 992 and 1199px. Large starts from 1200px</p>
            </Card>
            <Card shadow={3} style={{marginTop:30}}>
                <div className={classes.itemCont}>
                    <div className={classes.item} style={{width:grid.lg+200, background:`linear-gradient(to right, rgba(151, 151, 151, 1) 1200px, rgba(151, 151, 151, 0) 1400px)`}}>lg (+1200px)</div>
                    <div className={classes.item} style={{width:grid.lg, background:colors.grey4}}>md (992px - 1200px)</div>
                    <div className={classes.item} style={{width:grid.md, background:colors.grey2}}>sm (768px - 991px)</div>
                    <div className={classes.item} style={{width:grid.sm, background:colors.grey3}}>xs (0px - 767px)</div>
                </div>
            </Card>
        </div>
    );
};

Grid.propTypes = {
    classes: PropTypes.object,
};

export default Grid;