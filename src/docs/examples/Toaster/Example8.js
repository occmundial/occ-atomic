/* Simple toast */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example8() {
    const toast = {
        description: 'Dismiss this toast by clicking the "Clear" button'
    };
    return (
        <Fragment>
            <Button onClick={() => toaster.success(toast)}>Launch toast</Button>
            <Button theme="tertiary" onClick={() => toaster.close()}>Clear</Button>
            <Toaster container={document.body} />
        </Fragment>
    );
}
