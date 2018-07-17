/* Themes */
import React from 'react';
import { Button, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Button theme="main">Main</Button>
            <Button theme="secondary">Secondary</Button>
            <Button theme="blue">Blue</Button>
            <Button theme="main">Flat</Button>
            <div style={{background:colors.grey7, marginTop:'15px', padding:'10px', display:'inline-block'}}>
                <Button theme="white">White</Button>
            </div>
        </div>
    ) 
}