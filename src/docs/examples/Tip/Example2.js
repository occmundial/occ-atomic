/* Tip with icon */
import React from 'react';
import { Tip } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <div>
            <Tip icon theme="info">Tip with icon.</Tip>
            <Tip icon theme="warning">Tip with icon.</Tip>
            <Tip icon theme="success">Tip with icon.</Tip>
            <Tip icon theme="error">Tip with icon.</Tip>
        </div>
    );
}
