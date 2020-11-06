/* Themes of Tip */
import React from 'react';
import { Tip } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Tip theme="info">Tip with some simple text.</Tip>
            <Tip theme="warning">Tip with some simple text.</Tip>
            <Tip theme="success">Tip with some simple text.</Tip>
            <Tip theme="error">Tip with some simple text.</Tip>
            <Tip theme="promote">Tip with some simple text.</Tip>
        </div>
    );
}
