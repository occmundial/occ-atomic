/* Toast types with icon */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example7() {
    const addToast = (type) => {
        const data = {
            title: `Toast type: ${type} with icon`,
            description: `This is the ${type} toast`
        };
        if (type === 'success') toaster.success(data);
        else if (type === 'error') toaster.error(data);
        else if (type === 'info') toaster.info(data);
        else toaster.warning(data);
    };
    return (
        <Fragment>
            <Button onClick={() => addToast('success')} id="button1">Success</Button>
            <Button onClick={() => addToast('error')} id="button1">Error</Button>
            <Button onClick={() => addToast('info')} id="button1">Info</Button>
            <Button onClick={() => addToast('warning')} id="button1">Warning</Button>
            <Toaster container={document.body} />
        </Fragment>
    );
}
