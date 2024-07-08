/* Toast with an icon */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example4() {
  const toast = {
    title: 'The icon depends on the toast type',
    description: 'This a description text',
    closeIcon: true
  };
  return (
    <Fragment>
      <div style={{ display: 'flex', gap: '8px', flexDirection: 'row' }}>
        <Button onClick={() => toaster.success(toast)}>Success</Button>
        <Button onClick={() => toaster.warning(toast)}>Warning</Button>
        <Button onClick={() => toaster.info(toast)}>Info</Button>
        <Button onClick={() => toaster.error(toast)}>Error</Button>
        <Button onClick={() => toaster.promote(toast)}>Promote</Button>
      </div>
      <Toaster container={document.body} />
    </Fragment>
  );
}
