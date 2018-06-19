import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card } from '@occmundial/occ-atomic';

const IndexPage = ({ classes }) => {
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>OCC-Atomic</Title>
                <Title h={4}>Collection of shareable styled React components for OCC applications.</Title>
            </Card>
        </div>
    )
};

IndexPage.propTypes = {
    classes: PropTypes.object,
};

export default IndexPage;