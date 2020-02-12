/* Themes */
import React from 'react';
import { Button, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Button theme="primary">Primary</Button>
            <Button theme="secondary">Secondary</Button>
            <Button theme="tertiary">Tertiary</Button>
            <div style={{background:colors.prim, marginTop:'15px', padding:'10px', display:'inline-block'}}>
                <Button theme="tertiaryWhite">Tertiary White</Button>
            </div>
            <Button theme="ghostPink">Ghost Pink</Button>
            <Button theme="ghostGrey">Ghost Grey</Button>
            <div style={{background:colors.prim, marginTop:'15px', padding:'10px', display:'inline-block'}}>
                <Button theme="ghostWhite">Ghost White</Button>
            </div>
            <div style={{background:colors.prim, marginTop:'15px', marginLeft:'15px', padding:'10px', display:'inline-block'}}>
            <Button theme="alphaWhite"> alpha White</Button>
            </div>
        </div>
    );
}
