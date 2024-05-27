/* Disabled */
import React from 'react';
import { Fab } from '@occmundial/occ-atomic';

export default function Example1() {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'flex-end',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          flexDirection: 'column',
          paddingRight: '32px'
        }}
      >
        <Fab icon="plus" disabled/>
        <p style={{ margin: '8px 0px 0px' }}>Small</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0px 32px'
        }}
      >
        <Fab icon="plus" size="md" disabled/>
        <p style={{ margin: '8px 0px 0px' }}>Medium</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0px 32px'
        }}
      >
        <Fab icon="plus" size="lg" disabled/>
        <p style={{ margin: '8px 0px 0px' }}>Large</p>
      </div>
    </div>
  );
}
