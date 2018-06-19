import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card, shadows, Avatar, Flexbox } from '@occmundial/occ-atomic';

const reduceShadows = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const shadowKeys = Object.keys(shadows);

const Shadows = ({ classes }) => {
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>Shadows</Title>
            </Card>
            <Card shadow={3} style={{marginTop:30}}>
            </Card>
        </div>
    )
};

Shadows.propTypes = {
    classes: PropTypes.object,
};

export default Shadows;