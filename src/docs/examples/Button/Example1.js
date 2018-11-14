/* Themes */
import React from 'react';
import { Button, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Button theme="primary">Primary</Button>
            <Button theme="secondary">Secondary</Button>
            <Button theme="tertiary">Tertiary</Button>
            <Button theme="ghostPink">Ghost Pink</Button>
            <Button theme="ghostGrey">Ghost Grey</Button>
            <div style={{background:colors.sec, marginTop:'15px', padding:'10px', display:'inline-block'}}>
                <Button theme="ghostWhite">Ghost White</Button>
            </div>
        </div>
    );
}
