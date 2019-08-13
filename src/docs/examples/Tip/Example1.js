/* Themes of Tip */
import React from 'react';
import { Tip } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Tip text="Tip with some simple text." theme="info" />
            <Tip text="Tip with some simple text." theme="warning" />
            <Tip text="Tip with some simple text." theme="success" />
            <Tip text="Tip with some simple text." theme="error" />
        </div>
    );
}
