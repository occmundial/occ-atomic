import React from 'react';
import PropTypes from 'prop-types';
import { Text, Card } from '@occmundial/occ-atomic';

const IndexPage = ({ classes }) => {
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Text tag="h1" heading>OCC-Atomic</Text>
                <Text tag="h4" large>Collection of shareable styled React components for OCC applications.</Text>
            </Card>
        </div>
    );
};

IndexPage.propTypes = {
    classes: PropTypes.object,
};

export default IndexPage;
