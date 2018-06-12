/* Label with functions */
import React from 'react';
import { Label } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <Label onClick={() => {console.log('clicked!');}} onClose={() => {console.log('closed!');}}>Label with functions</Label>
    )
}