/* Toast types */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example6() {
    const addToast = (type) => {
        const data = {
            title: `Toast type: ${type}`,
            description: `This is the ${type} toast`,
            action: {
                label: 'Click me',
                onClick: () => console.log('Action button clicked')
            }
        };
        if (type === 'success') toaster.success(data);
        else if (type === 'error') toaster.error(data);
        else if (type === 'info') toaster.info(data);
        else if (type === 'warning') toaster.warning(data);
        else toaster.promote(data)
    };
    return (
        <Fragment>
            <Button onClick={() => addToast('success')} id="button1">Success</Button>
            <Button onClick={() => addToast('error')} id="button1">Error</Button>
            <Button onClick={() => addToast('info')} id="button1">Info</Button>
            <Button onClick={() => addToast('warning')} id="button1">Warning</Button>
            <Button onClick={() => addToast('promote')} id="button1">Promote</Button>
            <Toaster container={document.body} />
        </Fragment>
    );
}
