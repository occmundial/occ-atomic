import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card, shadows } from '@occmundial/occ-atomic';

const Shadows = ({ classes }) => {
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>Shadows</Title>
                <p>The library includes a small library of predefined shadow levels. They're ment to show hierarchy between containers. There are six levels of shadow.</p>
                <p>By default, the Card component has a shadow level 3.</p>
            </Card>
            <Card shadow={3} style={{marginTop:30}}>
                <Card className={classes.block} style={{boxShadow:shadows.lvl0}}>Level 0</Card>
                <Card className={classes.block} style={{boxShadow:shadows.lvl1}}>Level 1</Card>
                <Card className={classes.block} style={{boxShadow:shadows.lvl2}}>Level 2</Card>
                <Card className={classes.block} style={{boxShadow:shadows.lvl3}}>Level 3</Card>
                <Card className={classes.block} style={{boxShadow:shadows.lvl4}}>Level 4</Card>
                <Card className={classes.block} style={{boxShadow:shadows.lvl5}}>Level 5</Card>
            </Card>
        </div>
    );
};

Shadows.propTypes = {
    classes: PropTypes.object,
};

export default Shadows;
