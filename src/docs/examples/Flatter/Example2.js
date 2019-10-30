/* Flatter tags with class */
import React from 'react';
import { Flatter } from '@occmundial/occ-atomic';

const htmlTextExample = `<p class="ql-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Donec sed scelerisque risus, ut efficitur ante.</strong></p>`;

export default function Example2() {
    return (
        <div>
            <Flatter htmlText={htmlTextExample} />
        </div>
    );
}
