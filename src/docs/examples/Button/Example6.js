/* Button disabled */
import React from 'react';
import { Button, colors } from '@occmundial/occ-atomic';

export default function Example6() {
    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'baseline' }}>
            <Button icon="search" iconRight="search" theme="primary" disabled>Disabled</Button>
            <Button icon="search" iconRight="search" theme="secondary" disabled>Disabled</Button>
            <Button icon="search" iconRight="search" theme="tertiary" disabled>Disabled</Button>
            <div style={{background:colors.prim, marginTop:'15px', padding:'10px', display:'inline-block'}}>
                <Button icon="search" iconRight="search" theme="tertiaryWhite" disabled>Disabled</Button>
            </div>
            <Button icon="search" iconRight="search" theme="ghostPink" disabled>Disabled</Button>
            <Button icon="search" iconRight="search" theme="ghostGrey" disabled>Disabled</Button>
            <div style={{background:colors.prim, marginTop:'15px', padding:'10px', display:'inline-block'}}>
                <Button icon="search" iconRight="search" theme="ghostWhite" disabled>Disabled</Button>
            </div>
        </div>
    );
}