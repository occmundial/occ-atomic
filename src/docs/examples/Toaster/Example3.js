/* Toast with an action button */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example3() {
    const toast = {
        title: 'Toast with action button',
        description: 'The click on the action button will call a function and dismiss the toast. The click on the action button will call a function and dismiss the toast. The click on the action button will call a function and dismiss the toast',
        action: {
            label: 'Click me',
            onClick: () => console.log('Action button clicked')
        }
    };
    return (
        <Fragment>
            <Button onClick={() => toaster.success(toast)}>Launch toast</Button>
            <Toaster container={document.body} />
        </Fragment>
    );
}
