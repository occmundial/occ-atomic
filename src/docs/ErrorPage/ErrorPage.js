import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card, Button } from '@occmundial/occ-atomic';

const ErrorPage = ({ classes }) => {
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>The component does not exists</Title>
                <Button href="/">Return to Homepage</Button>
            </Card>
        </div>
    )
};

ErrorPage.propTypes = {
    classes: PropTypes.object,
};

export default ErrorPage;