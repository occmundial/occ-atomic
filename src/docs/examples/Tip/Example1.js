/* Themes of Tip */
import React from 'react';
import { Tip, Flexbox } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <Flexbox display="flex" direction="col" style={{ gap: 8 }}>
            <Tip theme="info">Tip with some simple text.</Tip>
            <Tip theme="warning">Tip with some simple text.</Tip>
            <Tip theme="success">Tip with some simple text.</Tip>
            <Tip theme="error">Tip with some simple text.</Tip>
            <Tip theme="promote">Tip with some simple text.</Tip>
        </Flexbox>
    );
}
