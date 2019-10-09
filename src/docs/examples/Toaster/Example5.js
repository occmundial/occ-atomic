/* Toast with a title */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example4() {
    const toast = {
        title: 'Title of the toast',
        description: 'This toast has a title',
    };
    return (
        <Fragment>
            <Button onClick={() => toaster.success(toast)}>Launch toast</Button>
            <Toaster container={document.body} />
        </Fragment>
    );
}
