import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card, icons, Avatar, Flexbox } from '@occmundial/occ-atomic';

const reduceIcons = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const iconKeys = Object.keys(icons);

const Icons = ({ classes }) => {
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>Icons</Title>
            </Card>
            <Card shadow={3} style={{marginTop:30}}>
            </Card>
        </div>
    )
};

Icons.propTypes = {
    classes: PropTypes.object,
};

export default Icons;