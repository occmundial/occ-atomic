/* Simple toast */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example1() {
    const toast = {
        title: 'Simple toast'
    };
    return (
        <Fragment>
            <Button onClick={() => toaster.success(toast)}>Launch toast</Button>
            <Toaster container={document.body} />
        </Fragment>
    );
}
