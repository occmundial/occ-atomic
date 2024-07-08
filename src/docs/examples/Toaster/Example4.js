/* Toast with an action button */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example3() {
  const toast = {
    title: 'Toast with action button',
    description:
      'The click on the action button will call a function and dismiss the toast. The click on the action button will call a function and dismiss the toast. The click on the action button will call a function and dismiss the toast',
    action: {
      label: 'Click me',
      onClick: () => console.log('Action button clicked')
    }
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
