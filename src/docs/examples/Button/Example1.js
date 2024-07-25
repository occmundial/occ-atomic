/* Themes */
import React from 'react';
import { Button, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'baseline' }}>
            <Button icon="search" iconRight="search" theme="primary">Primary</Button>
            <Button icon="search" iconRight="search" theme="secondary">Secondary</Button>
            <Button icon="search" iconRight="search" theme="tertiary">Tertiary</Button>
            <div style={{background:colors.prim, marginTop:'15px', padding:'10px', display:'inline-block'}}>
                <Button icon="search" iconRight="search" theme="tertiaryWhite">Tertiary White</Button>
            </div>
            <Button icon="search" iconRight="search" theme="ghostPink">Ghost Pink</Button>
            <Button icon="search" iconRight="search" theme="ghostGrey">Ghost Grey</Button>
            <div style={{background:colors.prim, marginTop:'15px', padding:'10px', display:'inline-block'}}>
                <Button icon="search" iconRight="search" theme="ghostWhite">Ghost White</Button>
            </div>
        </div>
    );
}
