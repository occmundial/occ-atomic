/* Toast themes */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example1() {
  const toast = {
    title: 'Simple toast'
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
