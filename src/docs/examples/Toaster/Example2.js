/* Toast with a longer timeout */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example2() {
    const toast = {
        description: 'This toast will be automatically dismissed in 8 seconds',
        timer: 'longer'
    };
    return (
        <Fragment>
            <Button onClick={() => toaster.success(toast)}>Launch toast</Button>
            <Toaster container={document.body} />
        </Fragment>
    );
}
