/* Raisable card on hover */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

class Example3 extends React.Component {

    addToast(type) {
        const data = {
            title: `${type} toastr`,
            description: 'Description',
            hasIcon: true
        };
        if (type === 'success') toaster.success(data);
        else if (type === 'error') toaster.error(data);
        else if (type === 'info') toaster.info(data);
        else toaster.warning(data);
    }

    render() {
        return (
            <Fragment>
                <Button onClick={() => this.addToast('success')} id="button1">Show Success</Button>
                <Button onClick={() => this.addToast('error')} id="button1">Show Error</Button>
                <Button onClick={() => this.addToast('info')} id="button1">Show Info</Button>
                <Button onClick={() => this.addToast('warning')} id="button1">Show Warning</Button>
                <Button theme="tertiary" onClick={() => toaster.clear()}>Clear All</Button>
                <Button theme="tertiary" onClick={() => toaster.close()}>Clear Current</Button>
                <Toaster />
            </Fragment>
        );
    }
}

export default Example3;
