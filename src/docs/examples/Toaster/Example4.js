/* Toast with an icon */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example4() {
    const toast = {
        title: 'The icon depends on the toast type',
        hasIcon: true,
        closeIcon: true,
    };
    return (
        <Fragment>
            <Button onClick={() => toaster.success(toast)}>Launch toast</Button>
            <Toaster container={document.body} />
        </Fragment>
    );
}
